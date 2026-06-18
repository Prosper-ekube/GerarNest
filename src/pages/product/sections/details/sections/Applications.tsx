const items = [
    'Homes',
    'Apartments',
    'Hotels',
    'Offices'
]

const Applications = () => {
    return (
        <section className='mb-24'>
            <h2 className='text-white text-4xl font-bold mb-8'>
                Perfect For
            </h2>

            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {items.map(item => (
                    <div
                        className='bg-[#0E1013] rounded-2xl p-8 text-center text-white text-sm'
                        key={item}
                    >
                        {item}
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Applications