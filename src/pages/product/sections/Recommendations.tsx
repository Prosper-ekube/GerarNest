import { useEffect, useRef, useState } from 'react'
import { FaStar } from 'react-icons/fa'
import { IoChevronBack, IoChevronForward } from 'react-icons/io5'
import type { Product } from '../../../types/Product'

const Recommendations: React.FC = () => {
    const scrollRef = useRef<HTMLDivElement>(null)
    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await fetch('http://127.0.0.1:8000/api/products/')

                if (!res.ok) {
                    throw new Error('Failed to fetch products')
                }

                const data: Product[] = await res.json()

                setProducts(data.slice(0, 6))
            } catch (error) {
                console.error('Failed to fetch recommendations:', error)
            }
        }

        fetchProducts()
    }, [])

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const scrollAmount = 400
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            })
        }
    }

    return (
        <section className='py-16 px-6 lg:px-8 bg-[#0f0f1a]'>
            <div className='max-w-6xl mx-auto'>

                {/* HEADER */}
                <div className='flex flex-col md:flex-row items-center justify-between mb-8'>
                    <h2 className='text-3xl lg:text-4xl font-bold text-white'>
                        Explore our recommendations
                    </h2>

                    <div className='flex gap-3'>
                        <button
                            className='w-10 h-10 rounded-full bg-[#1a1a2e] border border-[#6f4ccf]/20 flex items-center justify-center hover:bg-[#6f4ccf] hover:text-white text-white transition-colors'
                            onClick={() => scroll('left')}
                        >
                            <IoChevronBack />
                        </button>

                        <button
                            className='w-10 h-10 rounded-full bg-[#1a1a2e] border border-[#6f4ccf]/20 flex items-center justify-center hover:bg-[#6f4ccf] hover:text-white text-white transition-colors'
                            onClick={() => scroll('right')}
                        >
                            <IoChevronForward />
                        </button>
                    </div>
                </div>

                {/* LIST */}
                <div className='overflow-x-auto scrollbar-hide' ref={scrollRef}>
                    <div className='flex gap-6 pb-4'>
                        {products.map((product) => (
                            <div
                                key={product.id}
                                className='min-w-[320px] bg-[#1a1a2e] border border-[#6f4ccf]/10 rounded-2xl overflow-hidden hover:shadow-lg hover:shadow-[#6f4ccf]/20 hover:-translate-y-1 hover:border-[#6f4ccf]/30 transition-all'
                            >
                                {/* CATEGORY */}
                                <div className='relative'>
                                    <span className='absolute top-4 right-4 bg-[#6f4ccf] text-white px-3 py-1 rounded-full text-xs font-medium z-10'>
                                        {product.category_display}
                                    </span>

                                    {/* IMAGE */}
                                    <div className='h-64 bg-[#0f0f1a] flex items-center justify-center'>
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className='object-contain h-full'
                                        />
                                    </div>
                                </div>

                                {/* INFO */}
                                <div className='p-6'>
                                    <h3 className='font-bold text-white mb-2'>
                                        {product.name}
                                    </h3>

                                    {/* RATING */}
                                    <div className='flex items-center gap-2 mb-4'>
                                        <FaStar className='text-yellow-500 text-sm' />
                                        <span className='text-sm text-white font-medium'>
                                            {product.rating?.toFixed(1)}
                                        </span>
                                        <span className='text-sm text-[#a8a8a8]'>
                                            ({product.review_count} Reviews)
                                        </span>
                                    </div>

                                    {/* PRICE */}
                                    <p className='text-2xl font-bold text-[#6f4ccf] mb-4'>
                                        ₦{product.price.toLocaleString()}
                                    </p>

                                    {/* BUTTONS */}
                                    <div className='flex gap-3'>
                                        <button className='flex-1 px-4 py-2.5 border-2 border-[#6f4ccf] text-[#6f4ccf] rounded-full font-semibold text-sm hover:bg-[#6f4ccf]/10 transition-colors'>
                                            Add to Cart
                                        </button>

                                        <button className='flex-1 px-4 py-2.5 bg-[#6f4ccf] text-white rounded-full font-semibold text-sm hover:bg-[#5a3ca8] transition-colors'>
                                            Buy Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* SCROLLBAR HIDE */}
                <style>{`
                    .scrollbar-hide::-webkit-scrollbar {
                        display: none;
                    }
                    .scrollbar-hide {
                        -ms-overflow-style: none;
                        scrollbar-width: none;
                    }
                `}</style>

            </div>
        </section>
    )
}

export default Recommendations