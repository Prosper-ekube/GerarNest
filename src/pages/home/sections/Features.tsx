import { FaBolt, FaGlobe, FaLock, FaMobileAlt, FaRobot, FaSync } from 'react-icons/fa'

const Features: React.FC = () => {
    const features = [
        {
            icon: FaMobileAlt,
            id: 'device',
            title: 'Smart Device Selection',
            description: 'Browse a wide range of smart home devices to suit every room and need.'
        },
        {
            icon: FaLock,
            id: 'security',
            title: 'Enhanced Security',
            description: 'We stock devices with top-notch security features to keep your home safe.'
        },
        {
            icon: FaBolt,
            id: 'energy',
            title: 'Energy Efficient',
            description: 'Find devices designed to reduce energy consumption and save on bills.'
        },
        {
            icon: FaSync,
            id: 'setup',
            title: 'Easy Setup',
            description: 'Our products are simple to install and ready to use out of the box.'
        },
        {
            icon: FaGlobe,
            id: 'delivery',
            title: 'Nationwide Delivery',
            description: 'Order from anywhere and get your smart home devices delivered to your door.'
        },
        {
            icon: FaRobot,
            id: 'tech',
            title: 'Innovative Technology',
            description: 'We offer the latest smart devices with cutting-edge features and design.'
        }
    ]

    const card = 'bg-[#1a1a2e] border border-[#6f4ccf]/10 duration-700 group hover:-translate-y-2 hover:border-[#6f4ccf]/30 hover:shadow-[#6f4ccf]/20 hover:shadow-xl p-8 rounded-2xl transition-all'
    const iconWrapper = 'bg-gradient-to-br duration-700 flex from-[#6f4ccf] group-hover:rotate-3 group-hover:scale-110 h-20 items-center justify-center mb-6 rounded-2xl text-4xl text-white to-[#5a3ca8] transition-all w-20'

    return (
        <section className='bg-[#0f0f1a] lg:px-8 pb-20 pt-10 px-6 lg:pt-20' id='features'>
            <div className='max-w-6xl mx-auto'>                
                <div className='mb-16 text-center'>
                    <span className='font-semibold text-[#6f4ccf] text-sm tracking-wider uppercase'>Why Choose Gerar Smart Homes</span>
                    <h2 className='font-bold mt-4 mb-4 text-4xl lg:text-5xl text-white'>Smart Living Made <span className='text-[#6f4ccf]'>Simple</span></h2>
                    <p className='max-w-2xl mx-auto text-[#a8a8a8] text-lg'>
                        Experience the perfect blend of innovation and simplicity with features designed for modern living
                    </p>
                </div>
                <div className='gap-8 grid md:grid-cols-2 lg:grid-cols-3'>
                    {features.map(({ icon: Icon, id, title, description }) => (
                        <div className={card} key={id}>
                            <div className={iconWrapper}><Icon /></div>
                            <h3 className='font-bold mb-3 text-white text-xl'>{title}</h3>
                            <p className='leading-relaxed text-[#a8a8a8]'>{description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Features