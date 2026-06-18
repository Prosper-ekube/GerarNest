const CTA: React.FC = () => {
    const buttonPrimary = 'bg-white border-2 border-white duration-1000 ease-in-out font-semibold hover:-translate-y-1 hover:bg-transparent hover:text-white px-8 py-4 rounded-full text-[#6f4ccf] transition-all'
    const buttonSecondary = 'bg-transparent border-2 border-white duration-1000 ease-in-out font-semibold hover:-translate-y-1 hover:bg-white hover:text-[#6f4ccf] px-8 py-4 rounded-full text-white transition-all'

    return (
        <section className='bg-gradient-to-br from-[#6f4ccf] to-[#5a3ca8] pb-20 pt-10 lg:pt-20 px-6 lg:px-8 text-center text-white'>
            <div className=' max-w-4xl mx-auto'>
                <h2 className='font-bold mb-6 text-4xl lg:text-4xl'>Ready to Transform Your Home?</h2>
                <p className='mb-8 opacity-90 text-base'>Join over 50,000 happy customers and experience the future of smart living today</p>
                <div className='flex flex-wrap gap-4 justify-center'>
                    <a className={buttonPrimary} href='#products'>Shop Smart Devices</a>
                    <a className={buttonSecondary} href='#how-it-works'>Learn More</a>
                </div>
            </div>
        </section>
    )
}

export default CTA