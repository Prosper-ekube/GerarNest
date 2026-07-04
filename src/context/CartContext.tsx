import { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';

import type { Product } from '../types/Product';

type CartItem = {
    id: number;
    image: string;
    name: string;
    price: number;
    quantity: number;
};

type CartContextType = {
    addToCart: (product: Product) => void;
    cartCount: number;
    cartItems: CartItem[];
    cartSubtotal: number;
    clearCart: () => void;
    decreaseQuantity: (id: number) => void;
    increaseQuantity: (id: number) => void;
    removeFromCart: (id: number) => void;
};

const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({
    children
}: {
    children: ReactNode;
}) => {
    const [cartItems, setCartItems] = useState<CartItem[]>(() => {
        try {
            const saved = localStorage.getItem('cart');
            return saved ? JSON.parse(saved) : [];
        } catch {
            return [];
        }
    });    

    useEffect(() => {
        localStorage.setItem(
            'cart',
            JSON.stringify(cartItems)
        );
    }, [cartItems]);

    const addToCart = (product: Product) => { 

        setCartItems(prev => {        
            const existing = prev.find(
                item => item.id === product.id
            );

            if (existing) {
                return prev.map(item =>
                    item.id === product.id
                        ? {
                            ...item,
                            quantity: item.quantity + 1
                        }
                        : item
                );
            }

            return [
                ...prev,
                {
                    id: product.id,
                    image: product.image,
                    name: product.name,
                    price: product.price,
                    quantity: 1
                }
            ];
        });
    };

    const removeFromCart = (id: number) => {
        setCartItems(prev =>
            prev.filter(item => item.id !== id)
        );
    };

    const increaseQuantity = (id: number) => {
        setCartItems(prev =>
            prev.map(item =>
                item.id === id
                    ? {
                        ...item,
                        quantity: item.quantity + 1
                    }
                    : item
            )
        );
    };

    const decreaseQuantity = (id: number) => {
        setCartItems(prev =>
            prev
                .map(item =>
                    item.id === id
                        ? {
                            ...item,
                            quantity: item.quantity - 1
                        }
                        : item
                )
                .filter(item => item.quantity > 0)
        );
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const cartCount = cartItems.reduce(
        (sum, item) => sum + item.quantity,
        0
    );

    const cartSubtotal = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return (
        <CartContext.Provider
            value={{
                addToCart,
                cartCount,
                cartItems,
                cartSubtotal,
                clearCart,
                decreaseQuantity,
                increaseQuantity,
                removeFromCart
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error(
            'useCart must be used inside CartProvider'
        );
    }

    return context;
};