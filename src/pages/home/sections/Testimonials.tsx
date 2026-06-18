import { FaStar } from 'react-icons/fa'

const Testimonials: React.FC = () => {
    const testimonials = [
        {
            initials: 'NE',
            name: 'Nancy Ejiofor',
            rating: 5,
            role: 'Homeowner, Enugu',
            text: 'Gerar Homes has completely transformed how I live. The voice control is incredibly responsive and the energy savings are real. My electricity bill dropped by 30% in the first month!'
        },
        {
            initials: 'BR',
            name: 'Babatunde Rasheed',
            rating: 5,
            role: 'Homeowner, Ogun',
            text: "Setup was incredibly easy! I'm not tech-savvy at all, but I had everything running in 20 minutes. The guide is intuitive and the customer support is excellent."
        },
        {
            initials: 'TA',
            name: 'Taiwo Akinkummi',
            rating: 5,
            role: 'Homeowner, Lagos',
            text: "The security features give me peace of mind when I'm away. I can check my cameras from anywhere and get instant alerts. Worth every kobo!"
        }
    ]

    const card = 'bg-[#1a1a2e] border border-[#6f4ccf]/10 hover:-translate-y-2 hover:border-[#6f4ccf]/30 hover:shadow-[#6f4ccf]/15 duration-1000 ease-in-out p-8 rounded-2xl shadow-xl transition-all'
    const initialsCircle = 'bg-gradient-to-br flex font-bold from-[#6f4ccf] h-12 items-center justify-center rounded-full text-white to-[#5a3ca8] w-12'
    const starsWrapper = 'flex mb-6 text-[#6f4ccf] text-xl'

    return (
        <section className='bg-[#0f0f1a] pb-20 pt-10 lg:pt-20 px-6 lg:px-8' id='testimonials'>
            <div className='max-w-6xl mx-auto'>
                <div className='mb-16 text-center'>
                    <span className='font-semibold text-sm tracking-wider uppercase text-base text-[#6f4ccf]'>Customer Reviews</span>
                    <h2 className='mt-4 mb-4 font-bold text-4xl lg:text-4xl text-white'>What Our <span className='text-[#6f4ccf]'>Customers Say</span></h2>
                    <p className='max-w-xl mx-auto text-base text-[#a8a8a8]'>Join thousands of happy customers who have transformed their homes with Gerar Smart Homes</p>
                </div>
                <div className='gap-8 grid md:grid-cols-2 lg:grid-cols-3'>
                    {testimonials.map(({ initials, name, rating, role, text }) => (
                        <div className={card} key={initials}>
                            <div className={starsWrapper}>
                                {[...Array(rating)].map((_, i) => (
                                    <FaStar key={i} />
                                ))}
                            </div>
                            <p className='mb-6 leading-relaxed text-sm text-[#a8a8a8]'>{text}</p>
                            <div className='flex gap-4 items-center'>
                                <div className={initialsCircle}>{initials}</div>
                                <div>
                                    <h4 className='font-semibold text-sm text-white'>{name}</h4>
                                    <p className='text-sm text-[#a8a8a8]'>{role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials