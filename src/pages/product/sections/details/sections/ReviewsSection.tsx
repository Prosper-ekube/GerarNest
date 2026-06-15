import { FaStar } from 'react-icons/fa'
import type { Product } from '../../../../../types/Product'

type Props = {
    product: Product
}

const ReviewsSection = ({ product }: Props) => {
    const reviews = product.reviews_list ?? []

    return (
        <section className='mb-24'>
            <h2 className='text-white text-3xl font-bold mb-8'>
                Customer Reviews
            </h2>

            {/* SUMMARY */}
            <div className='mb-8 text-[#A8A8A8]'>
                <p>
                    {product.rating?.toFixed(1)} average rating • {reviews.length} reviews
                </p>
            </div>

            {/* EMPTY STATE */}
            {reviews.length === 0 ? (
                <p className='text-[#A8A8A8]'>
                    No reviews yet for this product.
                </p>
            ) : (
                <div className='grid md:grid-cols-2 gap-6'>
                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className='bg-[#0E1013] rounded-2xl p-6'
                        >
                            <div className='flex items-center justify-between mb-3'>
                                <p className='text-white font-semibold'>
                                    {review.name}
                                </p>

                                <div className='flex gap-1 text-yellow-500'>
                                    {Array.from({ length: review.rating }).map((_, i) => (
                                        <FaStar key={i} />
                                    ))}
                                </div>
                            </div>

                            <p className='text-[#A8A8A8] text-sm leading-relaxed'>
                                {review.text}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </section>
    )
}

export default ReviewsSection