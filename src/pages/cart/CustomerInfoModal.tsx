// CustomerInfoModal.tsx
import { useState } from 'react';

type CheckoutItem = {
    product: number;
    quantity: number;
};

type Props = {
    isOpen: boolean;
    items: CheckoutItem[];
    onClose: () => void;
    onSubmit?: (fullName: string, email: string, phone: string) => Promise<void>; // ✅ Added
};

const CustomerInfoModal = ({ isOpen, items, onClose, onSubmit }: Props) => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleCheckout = async () => {
        if (!fullName.trim()) {
            setError('Please enter your full name.');
            return;
        }

        if (!email.trim()) {
            setError('Please enter your email address.');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError('Please enter a valid email address.');
            return;
        }

        if (!items.length || loading) {
            return;
        }

        setError('');
        setLoading(true);

        try {
            // Save customer info for future checkouts
            localStorage.setItem(
                'customer',
                JSON.stringify({
                    full_name: fullName,
                    email: email,
                    phone: phone
                })
            );

            // ✅ If onSubmit is provided (from ProductActions), use it
            if (onSubmit) {
                await onSubmit(fullName, email, phone);
            } else {
                // ✅ Otherwise use the existing flow (from CartDrawer)
                // Create order
                const orderRes = await fetch(
                    'http://127.0.0.1:8000/api/orders/',
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            full_name: fullName,
                            email: email,
                            phone: phone,
                            items: items
                        })
                    }
                );

                if (!orderRes.ok) {
                    throw new Error('Order creation failed.');
                }

                const orderData = await orderRes.json();

                if (!orderData.order_id) {
                    throw new Error('Order ID was not returned.');
                }

                // Initialize Paystack payment
                const paymentRes = await fetch(
                    'http://127.0.0.1:8000/api/payments/init/',
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            order_id: orderData.order_id
                        })
                    }
                );

                if (!paymentRes.ok) {
                    throw new Error('Payment initialization failed.');
                }

                const paymentData = await paymentRes.json();

                if (!paymentData.authorization_url) {
                    throw new Error(
                        'No payment authorization URL was returned.'
                    );
                }

                window.location.href = paymentData.authorization_url;
            }

            // Close modal on success
            onClose();

        } catch (error) {
            console.error(error);
            setError(
                error instanceof Error
                    ? error.message
                    : 'Unable to start checkout. Please try again.'
            );
        } finally {
            setLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className='fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-6'>
            <div className='w-full max-w-md rounded-2xl bg-[#111] p-8'>
                <h2 className='mb-6 text-2xl font-bold text-white'>
                    Customer Information
                </h2>

                <div className='space-y-4'>
                    <input
                        value={fullName}
                        onChange={e => setFullName(e.target.value)}
                        placeholder='Full Name'
                        className='w-full rounded-lg border border-white/10 bg-[#1a1a1a] p-4 text-white placeholder:text-white/40 focus:border-[#6f4ccf] focus:outline-none'
                    />

                    <input
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder='Email Address'
                        type='email'
                        className='w-full rounded-lg border border-white/10 bg-[#1a1a1a] p-4 text-white placeholder:text-white/40 focus:border-[#6f4ccf] focus:outline-none'
                    />

                    <input
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        placeholder='Phone Number'
                        className='w-full rounded-lg border border-white/10 bg-[#1a1a1a] p-4 text-white placeholder:text-white/40 focus:border-[#6f4ccf] focus:outline-none'
                    />

                    {error && (
                        <div className='rounded-lg bg-red-500/10 border border-red-500/50 p-3 text-red-400 text-sm'>
                            {error}
                        </div>
                    )}
                </div>

                <div className='mt-8 flex gap-3'>
                    <button
                        onClick={onClose}
                        className='flex-1 rounded-full border border-white/20 py-4 text-white hover:bg-white/5 transition-colors'
                    >
                        Cancel
                    </button>

                    <button
                        disabled={loading}
                        onClick={handleCheckout}
                        className='flex-1 rounded-full bg-[#6f4ccf] py-4 font-semibold text-white hover:bg-[#5a3ca8] transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
                    >
                        {loading ? 'Processing...' : 'Continue'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CustomerInfoModal;