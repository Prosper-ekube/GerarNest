const specs = [
    ['Connectivity', 'WiFi'],
    ['Material', 'Tempered Glass'],
    ['Power', '220V'],
    ['Warranty', '1 Year']
]

const Specifications = () => {
    return (
        <section className='mb-24'>
            <h2 className='text-white text-3xl font-bold mb-8'>
                Specifications
            </h2>

            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {specs.map(([title, value]) => (
                    <div
                        className='bg-[#0E1013] rounded-2xl p-6'
                        key={title}
                    >
                        <p className='text-[#A8A8A8] text-sm'>{title}</p>

                        <p className='text-white text-xl font-semibold mt-2'>
                            {value}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Specifications