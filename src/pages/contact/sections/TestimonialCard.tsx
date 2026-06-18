import GH_Logo from '../../../assets/images/GH_Logo.png'

const GridIcon = () => {
    return (
        <svg fill='none' height='16' viewBox='0 0 16 16' width='16'>
            <rect fill='#0d0d0d' height='5' rx='1' width='5' x='2' y='2' />
            <rect fill='#0d0d0d' height='5' rx='1' width='5' x='9' y='2' />
            <rect fill='#0d0d0d' height='5' rx='1' width='5' x='2' y='9' />
            <rect fill='#0d0d0d' height='5' rx='1' width='5' x='9' y='9' />
        </svg>
    )
}

const TestimonialCard = () => {
    return (
        <div className='bg-[#111] border border-[#2a2a2a] overflow-hidden p-4 md:p-6 relative rounded-2xl'>
            <div className='absolute bg-[#6f4ccf]/20 blur-3xl h-[800px] bottom-[-40px] h-[220px] pointer-events-none right-[-40px] w-[220px]' />

            <div className='flex gap-2 items-center mb-5'>
                <div className='flex h-7 items-center justify-center rounded-md w-7'>
                    <img className='w-10' src={GH_Logo} />
                </div>
                <span className='font-medium text-sm text-white'>
                    Gerar Smart Homes
                </span>
            </div>

            <p className='leading-relaxed mb-5 text-[#ccc] text-sm'>
                <strong className='font-medium text-white'>
                    Transformed our villa into a fully automated smart home
                </strong>{' '}
                — lighting, security, and climate all controlled seamlessly. The
                Orvibo system is exceptional.
            </p>

            <p className='text-[#a8a8a8] text-[13px]'>
                — Residence project, Lekki Phase 1, Lagos
            </p>
        </div>
    )
}

export default TestimonialCard