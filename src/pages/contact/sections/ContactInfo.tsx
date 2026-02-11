type InfoBlockProps = {
    title: string
    children: React.ReactNode
}

const InfoBlock = ({ title, children }: InfoBlockProps) => {
    return (
        <div className='flex flex-col gap-2'>
            <h3 className='font-semibold text-[#A8A8A8] text-xs md:text-sm tracking-wider uppercase'>
                {title}
            </h3>
            <div className='text-[#EDEDED] text-sm md:text-base'>
                {children}
            </div>
        </div>
    )
}

const ContactInfo = () => {
    return (
        <div className='flex flex-col gap-8'>
            <div className='flex flex-col gap-4'>
                <h2 className='font-semibold text-[#EDEDED] text-xl md:text-2xl'>
                    Direct contact
                </h2>
                <p className='text-[#A8A8A8] text-sm md:text-base'>
                    Reach our Orvibo-certified team for technical consultations, quotations, and project support across Nigeria.
                </p>
            </div>

            <InfoBlock title='Email'>
                <a className='duration-200 hover:text-[#6F4CCF] transition-colors' href='mailto:sales@gerarsmarthomes.ng'>
                    sales@gerarsmarthomes.ng
                </a>
                <br />
                <a className='duration-200 hover:text-[#6F4CCF] transition-colors' href='mailto:support@gerarsmarthomes.ng'>
                    support@gerarsmarthomes.ng
                </a>
            </InfoBlock>

            <InfoBlock title='Phone'>
                <a className='duration-200 hover:text-[#6F4CCF] transition-colors' href='tel:+2348008000000'>
                    +234 (0) 800 000 0000
                </a>
                <p className='text-[#A8A8A8] text-xs md:text-sm mt-1'>
                    Mon - Fri, 9:00am - 6:00pm WAT
                </p>
            </InfoBlock>

            <InfoBlock title='Showroom & Office'>
                <p>Lagos, Nigeria</p>
                <p>Premium Smart Home Experience Centre</p>
            </InfoBlock>

            <div className='bg-[#1A1D24] border border-[#2A2D34] mt-4 p-4 md:p-6 rounded-lg'>
                <p className='text-[#A8A8A8] text-xs md:text-sm leading-relaxed'>
                    Gerar Smart Homes is an official Orvibo partner and distributor in Nigeria, providing certified design, installation, and after-sales support for Orvibo smart home solutions.
                </p>
            </div>
        </div>
    )
}

export default ContactInfo