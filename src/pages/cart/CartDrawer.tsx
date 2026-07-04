// CartDrawer.tsx
import { useState } from 'react';
import { FiTrash2, FiX } from 'react-icons/fi';

import { useCart } from '../../context/CartContext';
import CustomerInfoModal from './CustomerInfoModal';

type Props = {
    isOpen: boolean;
    onClose: () => void;
};

const CartDrawer = ({
    isOpen,
    onClose
}: Props) => {
    const {
        cartItems,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart
    } = useCart();

    const [showCheckout, setShowCheckout] = useState(false);

    const total = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return (
        <>
            {/* Overlay */}
            <div
                onClick={onClose}
                className={`fixed inset-0 z-40 bg-black/60 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
                    }`}
            />

            {/* Drawer */}
            <aside
                className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-[#0a0a0a] shadow-2xl transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                {/* Header */}
                <div className='flex items-center justify-between border-b border-white/10 p-6'>
                    <h2 className='text-2xl font-bold text-white'>Cart</h2>
                    <button
                        onClick={onClose}
                        className='rounded-full p-2 transition hover:bg-white/10'
                    >
                        <FiX className='text-xl text-white' />
                    </button>
                </div>

                {/* Body */}
                <div className='flex-1 overflow-y-auto p-6'>
                    {cartItems.length === 0 ? (
                        <p className='mt-10 text-center text-[#888]'>
                            Your cart is empty.
                        </p>
                    ) : (
                        <div className='space-y-6'>
                            {cartItems.map(item => (
                                <div key={item.id} className='flex gap-4'>
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className='h-20 w-20 rounded-lg bg-[#1a1a1a] object-contain'
                                    />
                                    <div className='flex-1'>
                                        <h3 className='font-semibold text-white'>
                                            {item.name}
                                        </h3>
                                        <p className='mt-1 text-[#6f4ccf]'>
                                            ₦{item.price.toLocaleString()}
                                        </p>
                                        <div className='mt-3 flex items-center gap-3'>
                                            <button
                                                onClick={() =>
                                                    decreaseQuantity(item.id)
                                                }
                                                className='h-8 w-8 rounded-full bg-[#222] text-white'
                                            >
                                                −
                                            </button>
                                            <span className='text-white'>
                                                {item.quantity}
                                            </span>
                                            <button
                                                onClick={() =>
                                                    increaseQuantity(item.id)
                                                }
                                                className='h-8 w-8 rounded-full bg-[#222] text-white'
                                            >
                                                +
                                            </button>
                                            <button
                                                onClick={() =>
                                                    removeFromCart(item.id)
                                                }
                                                className='ml-auto'
                                            >
                                                <FiTrash2 className='text-red-400' />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className='border-t border-white/10 p-6'>
                    <div className='mb-5 space-y-2 text-sm'>
                        <div className='flex justify-between text-[#a8a8a8]'>
                            <span>Subtotal</span>
                            <span>₦{total.toLocaleString()}</span>
                        </div>
                        <div className='flex justify-between text-[#a8a8a8]'>
                            <span>Shipping</span>
                            <span>Free</span>
                        </div>
                        <div className='border-t border-white/10 pt-3 flex justify-between text-lg font-semibold text-white'>
                            <span>Total</span>
                            <span>₦{total.toLocaleString()}</span>
                        </div>
                    </div>

                    {/* ✅ Add the Checkout button here */}
                    <button
                        onClick={() => setShowCheckout(true)}
                        disabled={cartItems.length === 0}
                        className='w-full rounded-full bg-[#6f4ccf] py-4 font-semibold text-white transition hover:bg-[#5a3ca8] disabled:opacity-50 disabled:cursor-not-allowed'
                    >
                        Proceed to Checkout
                    </button>
                </div>
            </aside>

            {/* ✅ Modal is now OUTSIDE the aside - rendered at root level */}
            <CustomerInfoModal
                isOpen={showCheckout}
                onClose={() => setShowCheckout(false)}
                items={cartItems.map(item => ({
                    product: item.id,
                    quantity: item.quantity
                }))}
            />
        </>
    );
};

export default CartDrawer;