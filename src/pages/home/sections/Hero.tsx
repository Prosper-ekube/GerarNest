import smart_living_room from '../../../assets/images/smart_living_room.jpg'
import smart_living_room_desktop from '../../../assets/images/smart_living_room_desktop.jpg'

const Hero: React.FC = () => {
    const buttonPrimary = 'bg-[#6f4ccf] duration-1000 ease-in-out font-semibold hover:-translate-y-1 hover:bg-[#5a3ca8] px-8 py-4 rounded-full shadow-[#6f4ccf]/40 shadow-lg text-white transition-all'
    const buttonSecondary = 'bg-transparent duration-1000 ease-in-out border-2 border-white font-semibold hover:-translate-y-1 hover:bg-white hover:text-[#0a0a0a] px-8 py-4 rounded-full text-white transition-all'

    const statTitle = 'font-bold text-4xl text-[#6f4ccf]'
    const statText = 'text-[#a8a8a8] text-sm'

    return (
        <section className='bg-[#0a0a0a] lg:px-8 overflow-hidden pb-20 pt-32 md:pt-44 px-6 relative'>
            <div className='absolute bg-[#6f4ccf]/20 blur-3xl h-[800px] rounded-full right-0 top-0 translate-x-1/2 -translate-y-1/2 w-[800px]' />
            <div className='grid gap-12 items-center lg:grid-cols-2 max-w-6xl mx-auto relative z-10'>
                <div className='space-y-6'>
                    <span className='bg-[#6f4ccf]/20 font-semibold inline-block px-6 py-2 rounded-full text-[#6f4ccf] text-sm'>ORVIBO-POWERED SMART LIVING</span>
                    <h1 className='font-bold leading-tight text-5xl text-white lg:text-6xl'>
                        Intelligent Homes for the Modern
                        <span className='bg-clip-text bg-gradient-to-r from-[#6f4ccf] text-transparent to-[#5a3ca8]'>{' '}Nigerian Lifestyle</span>
                    </h1>
                    <p className='leading-relaxed text-[#a8a8a8] text-lg'>
                        Gerar Smart Home designs and deploys integrated smart home solutions, powered by Orvibo technology,
                        for discerning homes and premium developments across Nigeria.
                    </p>
                    <div className='flex flex-wrap gap-4'>
                        <a className={buttonPrimary} href='#products'>Explore Products</a>
                        <a className={buttonSecondary} href='#how-it-works'>How It Works</a>
                    </div>
                    <div className='flex flex-wrap gap-8 pt-8'>
                        <div>
                            <h3 className={statTitle}>50K+</h3>
                            <p className={statText}>Happy Customers</p>
                        </div>
                        <div>
                            <h3 className={statTitle}>100+</h3>
                            <p className={statText}>Smart Devices</p>
                        </div>
                        <div>
                            <h3 className={statTitle}>4.9★</h3>
                            <p className={statText}>Average Rating</p>
                        </div>
                    </div>
                </div>
                <div className='relative'>
                    <div className='group h-[400px] overflow-hidden relative rounded-3xl w-full'>
                        <picture>
                            <source media='(min-width: 768px)' srcSet={smart_living_room_desktop} />
                            <img alt='Smart Home Interior' className='h-full object-cover transition-transform duration-700 w-full group-hover:scale-105'
                                decoding='async' loading='lazy' src={smart_living_room} />
                        </picture>                        
                        <div className='absolute bg-gradient-to-t from-[#0a0a0a] inset-0 to-transparent via-transparent' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero