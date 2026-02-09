const Partnership: React.FC = () => {
    return (
        <section className='bg-[#15171B] p-4 md:px-6 md:py-16 lg:px-12 lg:py-20'>
            <div className='flex flex-col justify-between gap-3 md:gap-8 lg:gap-1 xl:gap-4 max-w-7xl mx-auto lg:flex-row'>
                {/* Left Content */}
                <div className='flex flex-col justify-center pl-2 space-y-1 text-[#A8A8A8] text-left'>
                    <p className='font-medium text-xs md:text-lg lg:text-sm tracking-wider'>OFFICIAL ORVIBO DISTRIBUTOR IN NIGERIA</p>
                    <h3 className='font-bold text-xl md:text-4xl lg:text-xl xl:text-4xl text-[#EDEDED]'>Orvibo</h3>                    
                </div>
                <p className='leading-relaxed text-[#A8A8A8] text-xs md:text-lg lg:text-base xl:text-lg md:w-[550px] lg:w-[300px] xl:w-[580px]'>
                    Gerar Smart Homes is an authorized Orvibo partner and distributor in Nigeria, delivering end-to-end design, supply, configuration and support for
                    Orvibo smart home ecosystems across residential, hospitality and mixed-use developments.
                </p>
                {/* Right Badge */}
                <div className='flex justify-center lg:justify-end [w-200px]'>
                    <div className='flex flex-col justify-center inline-block rounded-lg lg:px-6 lg:py-3'>
                        <p className='font-medium text-sm md:text-2xl lg:text-xl xl:text-2xl text-[#EDEDED]'>Orvibo Partner · Nigeria</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Partnership