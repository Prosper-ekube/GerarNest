import { FaStar } from 'react-icons/fa'

const reviews = [
    {
        name: 'Adebayo K.',
        rating: 5,
        comment: 'Very solid product. Installation was straightforward and it works perfectly with my smart home setup.'
    },
    {
        name: 'Chisom E.',
        rating: 4,
        comment: 'Clean design and responsive control. Delivery was fast in Lagos.'
    },
    {
        name: 'Michael T.',
        rating: 5,
        comment: 'Premium feel. Definitely worth the price for automation.'
    }
]

const ReviewsSection = () => {
    return (
        <section className='mb-24'>
            <h2 className='text-white text-3xl font-bold mb-8'>
                Customer Reviews
            </h2>

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

                        <p className='text-[#A8A8A8] text-sm max-w-[400px] leading-relaxed'>
                            {review.comment}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default ReviewsSection