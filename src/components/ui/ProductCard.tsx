import React from 'react'
import { FaStar } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import type { Product } from '../../types/Product'
import { useCart } from '../../context/CartContext'

type ProductCardProps = {
    product: Product
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const { addToCart } = useCart()
    const navigate = useNavigate()

    return (
        <div className='group flex flex-col overflow-hidden rounded-2xl border border-[#6f4ccf]/10 bg-[#1a1a2e] transition-all duration-1000 ease-in-out hover:-translate-y-1 hover:border-[#6f4ccf]/30 hover:shadow-lg hover:shadow-[#6f4ccf]/20'>

            {/* CLICKABLE AREA */}
            <Link to={`/products/${product.id}`} className='flex flex-col'>

                <div className='relative'>
                    <span className='absolute right-4 top-4 z-10 rounded-full bg-[#6f4ccf] px-3 py-1 text-xs font-medium text-white'>
                        {product.category_display}
                    </span>

                    <div className='bg-[#0f0f1a] flex items-center justify-center h-64 pb-4 pt-14'>
                        <img
                            alt={product.name}
                            className='h-full w-full object-contain'
                            src={product.image}
                        />
                    </div>
                </div>

                <div className='flex flex-grow flex-col p-6'>
                    <h3 className='mb-2 font-bold text-white'>{product.name}</h3>

                    <div className='mb-4 flex items-center gap-2'>
                        <FaStar className='text-sm text-yellow-500' />
                        <span className='text-sm font-medium text-white'>
                            {product.rating}
                        </span>
                        <span className='text-sm text-[#a8a8a8]'>
                            ({product.review_count.toLocaleString()} Reviews)
                        </span>
                    </div>

                    <p className='mb-4 text-2xl font-bold text-[#6f4ccf]'>
                        ₦{product.price.toLocaleString()}
                    </p>

                    {!product.in_stock && (
                        <p className='text-red-500 text-sm mb-2'>Out of Stock</p>
                    )}
                </div>

            </Link>

            {/* ACTIONS */}
            <div className='px-4 pb-6 mt-auto flex gap-3'>
                <button
                    disabled={!product.in_stock}
                    onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        addToCart(product)
                    }}
                    className='rounded-full border-2 border-[#6f4ccf] px-4 py-2.5 text-sm font-semibold text-[#6f4ccf] transition-all hover:bg-[#6f4ccf]/10 hover:-translate-y-1 duration-1000 ease-in-out'
                >
                    Add to Cart
                </button>

                <button
                    onClick={(e) => {
                        e.stopPropagation()
                        navigate(`/products/${product.id}`)
                    }}
                    className='rounded-full bg-[#6f4ccf] px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#5a3ca8] hover:-translate-y-1 duration-1000 ease-in-out'
                >
                    View More
                </button>
            </div>

        </div>
    )
}

export default ProductCard