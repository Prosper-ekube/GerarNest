import smart_bulb from '../../../../../assets/images/smart_bulb.png'

const RelatedProducts = () => {
    return (
        <section className='pb-24'>
            <h2 className='text-white text-3xl font-bold mb-8'>
                Related Products
            </h2>

            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {[1, 2, 3, 4].map(item => (
                    <div
                        className='bg-[#0E1013] rounded-2xl overflow-hidden'
                        key={item}
                    >
                        <div className='p-6'>
                            <img
                                alt='product'
                                className='h-48 mx-auto object-contain'
                                src={smart_bulb}
                            />
                        </div>

                        <div className='p-6 border-t border-[#6F4CCF]/10'>
                            <h3 className='text-white font-semibold'>
                                Smart Bulb B2
                            </h3>

                            <p className='text-[#6F4CCF] font-bold mt-2'>
                                ₦10,000
                            </p>

                            <button className='mt-4 text-[#6F4CCF]'>
                                View Product →
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default RelatedProducts