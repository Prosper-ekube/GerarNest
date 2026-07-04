import { useState } from 'react';
import type { Product } from "../../../types/Product";
import { useCart } from "../../../context/CartContext";
import CustomerInfoModal from '../../cart/CustomerInfoModal';

type ActionButton = {
    label: string;
    onClick: () => void;
    variant: 'primary' | 'secondary';
};

const ProductActions = ({ product }: { product: Product }) => {
    const cart = useCart();
    const [showCheckout, setShowCheckout] = useState(false);
    const [isBuyNow, setIsBuyNow] = useState(false);

    const handleAddToCart = () => {
        cart.addToCart(product);
        console.log(`${product.name} added to cart`);
    };

    const handleBuyNow = () => {
        // Open the modal instead of directly creating order
        setIsBuyNow(true);
        setShowCheckout(true);
    };

    const handleCheckoutComplete = async (fullName: string, email: string, phone: string) => {
        try {
            console.log('CHECKOUT START');

            // 1. Create order
            const orderRes = await fetch('http://127.0.0.1:8000/api/orders/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    full_name: fullName,
                    email: email,
                    phone: phone,
                    items: [
                        {
                            product: product.id,
                            quantity: 1
                        }
                    ]
                })
            });

            const orderData = await orderRes.json();
            console.log('ORDER CREATED:', orderData);

            const orderId = orderData.order_id;

            if (!orderId) {
                throw new Error('Order ID missing from response');
            }

            // 2. Initialize payment
            const payRes = await fetch('http://127.0.0.1:8000/api/payments/init/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    order_id: orderId
                })
            });

            console.log('PAYMENT REQUEST SENT');

            const payData = await payRes.json();
            console.log('PAYMENT RESPONSE:', payData);

            if (payData.authorization_url) {
                window.location.href = payData.authorization_url;
            } else {
                throw new Error('No authorization URL returned');
            }

        } catch (error) {
            console.error('CHECKOUT ERROR:', error);
            throw error; // Re-throw so the modal can handle the error
        }
    };

    const BUTTONS: ActionButton[] = [
        {
            label: 'Add to Cart',
            onClick: handleAddToCart,
            variant: 'primary'
        },
        {
            label: 'Buy Now',
            onClick: handleBuyNow,
            variant: 'secondary'
        }
    ];

    return (
        <>
            <div className='flex flex-wrap gap-3'>
                {BUTTONS.map(button => (
                    <button
                        key={button.label}
                        onClick={button.onClick}
                        className={`${button.variant === 'primary'
                                ? 'bg-[#6f4ccf] duration-1000 ease-in-out font-semibold hover:-translate-y-1 hover:bg-[#5a3ca8] px-8 py-4 rounded-full shadow-[#6f4ccf]/52 shadow-lg text-base text-white transition-all w-full md:w-72 lg:w-52 xl:w-60'
                                : 'bg-transparent duration-1000 ease-in-out border-2 border-white font-semibold hover:-translate-y-1 hover:bg-white hover:text-[#0a0a0a] px-8 py-4 text-base rounded-full text-white transition-all w-full md:w-72 lg:w-52 xl:w-60'
                            }`}
                    >
                        {button.label}
                    </button>
                ))}
            </div>

            {/* Customer Info Modal */}
            <CustomerInfoModal
                isOpen={showCheckout}
                onClose={() => {
                    setShowCheckout(false);
                    setIsBuyNow(false);
                }}
                items={[
                    {
                        product: product.id,
                        quantity: 1
                    }
                ]}
                onSubmit={handleCheckoutComplete}
            />
        </>
    );
};

export default ProductActions;