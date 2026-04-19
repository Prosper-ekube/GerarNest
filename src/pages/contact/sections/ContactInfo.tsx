type InfoItem = {
    label: string
    value: React.ReactNode
}

const INFO_ITEMS: InfoItem[] = [
    {
        label: 'Email',
        value: (
            <a
                className='block hover:text-white text-[#ccc] transition-colors duration-200 w-24'
                href='mailto:gerarsmarthomes@gmail.com'
            >
                gerarsmarthomes@gmail.com
            </a>
        )
    },
    {
        label: 'Phone',
        value: (
            <>
                +234 70 5523 9376
                <br />
                <span className='text-[#555] text-[12px]'>
                    Mon-Fri, 9am-6pm WAT
                </span>
            </>
        )
    },
    {
        label: 'Showroom',
        value: 'Lagos, Nigeria'
    },
    {
        label: 'Partner',
        value: 'Official Orvibo distributor'
    }
]

type InfoCellProps = {
    label: string
    value: React.ReactNode
}

const InfoCell: React.FC<InfoCellProps> = ({ label, value }) => {
    return (
        <div>
            <p className='leading-none mb-1.5 text-[#555] text-[11px] tracking-[0.8px] uppercase'>
                {label}
            </p>
            <div className='leading-relaxed text-[#ccc] text-[14px]'>
                {value}
            </div>
        </div>
    )
}

const ContactInfo = () => {
    return (
        <div className='bg-[#111] border border-[#2a2a2a] gap-5 grid grid-cols-2 px-7 py-6 rounded-2xl'>
            {INFO_ITEMS.map(item => (
                <InfoCell key={item.label} label={item.label} value={item.value} />
            ))}
        </div>
    )
}

export default ContactInfo