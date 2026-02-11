import smart_living_room from '../../../assets/images/smart_living_room.png'
import Button from '../../../components/ui/Button'

const Hero: React.FC = () => {
    return (
        <section className='bg-[#0F1115] pt-24 md:pt-36 px-4 md:px-12 md:pt-32 lg:pb-12'>
            <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-3 md:gap-5 max-w-7xl mx-auto'>
                {/* Left Content */}
                <div className='flex flex-col gap-6 md:gap-8 lg:gap-6 text-[#A8A8A8] text-center lg:text-left'>
                    <div className='flex flex-col gap-3 lg:gap-6'>
                        <p className='font-medium text-xs md:text-base tracking-wider uppercase'>Orvibo-Powered Smart Living</p>
                        <h2 className='font-bold mx-auto text-[#EDEDED] text-2xl md:text-4xl lg:text-5xl w-[240px] md:w-[360px] lg:w-full'>Intelligent homes for the modern Nigerian lifestyle.</h2>
                        <p className='mx-auto text-xs md:text-lg w-[280px] md:w-[420px] lg:w-full'> Gerar Smart Homes designs and deploys integrated smart home solutions, powered by Orvibo technology,
                            for discerning homes and premium developments across Nigeria.
                        </p>
                    </div>
                    {/* CTA */}
                    <div className='flex flex-col gap-5 min-w-[1360px]:flex-row min-w-[1360px]:items-center lg:gap-4'>
                        <Button className='w-full lg:w-auto' type='button'>View Products</Button>
                        <p className='text-xs md:text-lg text-[#A8A8A8]'>Experience reliable, enterprise-grade automation.</p>
                    </div>
                    {/* Certifications */}
                    <div className='flex flex-col gap-1 md:gap-2 lg:gap-1 min-w-[1360px]:flex-row min-w-[1360px]:items-center text-left'>
                        <div className='flex gap-1 lg:gap-2 text-xs md:text-lg'>
                            <span className='font-semibold text-[#EDEDED]'>Orvibo</span>
                            <span className='text-[#A8A8A8]'>certified design & installation</span>
                        </div>
                        <p className='text-[#A8A8A8]'>Serving Lagos, Abuja, Port Harcourt & nationwide projects</p>
                    </div>
                </div>
                {/* Right Content */}
                <div className='relative'>
                    <div className='overflow-hidden mb-4 md:mb-16 lg:mb-0 rounded-lg'>
                        <img alt='Luxury smart home living room with ambient lighting' className='h-[220px] w-full object-cover sm:h-[320px] md:h-auto'
                            src={smart_living_room}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero