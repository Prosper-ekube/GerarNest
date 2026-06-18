import {
    FaBolt,
    FaHome,
    FaShieldAlt,
    FaWifi
} from 'react-icons/fa'

const features = [
    {
        icon: <FaWifi />,
        title: 'Smart Connectivity'
    },
    {
        icon: <FaBolt />,
        title: 'Energy Efficient'
    },
    {
        icon: <FaShieldAlt />,
        title: 'Reliable Security'
    },
    {
        icon: <FaHome />,
        title: 'Home Automation'
    }
]

const FeatureHighlights = () => {
    return (
        <section className='mb-24'>
            <h2 className='text-white text-4xl font-bold mb-8'>
                Why You'll Love It
            </h2>

            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm'>
                {features.map(feature => (
                    <div
                        className='bg-[#0E1013] border border-[#6F4CCF]/10 rounded-2xl p-6'
                        key={feature.title}
                    >
                        <div className='text-[#6F4CCF] text-3xl mb-4'>
                            {feature.icon}
                        </div>

                        <h3 className='text-white font-semibold'>
                            {feature.title}
                        </h3>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default FeatureHighlights