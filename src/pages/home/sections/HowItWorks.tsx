import { FaChevronRight } from 'react-icons/fa'

const HowItWorks: React.FC = () => {
    const steps = [
        {
            description: 'Browse our collection and select the smart devices that fit your needs. From lighting to security, we have everything you need.',
            id: 'choose-devices',
            number: '1',
            title: 'Choose Your Devices'
        },
        {
            description: 'Follow our simple setup guide step-by-step instructions. Most devices are installed in under 5 minutes.',
            id: 'installation',
            number: '2',
            title: 'Easy Installation'
        },
        {
            description: 'Control your devices with voice, app, or automation. Enjoy the convenience and efficiency of your new smart home.',
            id: 'start-smart-living',
            number: '3',
            title: 'Start Living Smart'
        }
    ]

    const numberCircle = 'bg-gradient-to-br flex font-bold from-[#6f4ccf] h-24 items-center justify-center mb-6 mx-auto rounded-full shadow-lg shadow-[#6f4ccf]/30 text-4xl to-[#5a3ca8] w-24'

    return (
        <section className='bg-[#1a1a2e] pb-20 pt-10 lg:pt-20 px-6 lg:px-8 text-white' id='how-it-works'>
            <div className='max-w-6xl mx-auto'>
                <div className='mb-16 text-center'>
                    <span className='font-semibold tracking-wider uppercase text-sm text-[#6f4ccf]'>Simple Process</span>
                    <h2 className='mb-4 mt-4 font-bold text-4xl lg:text-5xl'>Get Started in <span className='text-[#6f4ccf]'>3 Easy Steps</span></h2>
                    <p className='mx-auto max-w-2xl text-lg text-[#a8a8a8]'>Transform your home into a smart home in minutes with our simple setup process</p>
                </div>
                <div className='gap-12 grid md:grid-cols-3'>
                    {steps.map(({ description, id, number, title }, index) => (
                        <div className='relative text-center' key={id}>
                            {index < steps.length - 1 && (
                                <FaChevronRight className='absolute hidden md:block -right-8 text-4xl text-[#6f4ccf] top-12' />
                            )}
                            <div className={numberCircle}>{number}</div>
                            <h3 className='font-bold mb-4 text-2xl'>{title}</h3>
                            <p className='leading-relaxed text-[#a8a8a8]'>{description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default HowItWorks