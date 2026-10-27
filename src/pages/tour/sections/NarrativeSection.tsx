
import React from 'react'

type NarrativeSectionProps = {
    image: string
    mobileImage: string
    headline: string
    tagline: string
}

const NarrativeSection: React.FC<NarrativeSectionProps> = ({
    image,
    mobileImage,
    headline,
    tagline
}) => {
    return (
        <section className='relative min-h-screen overflow-hidden'>
            <div
                className='absolute inset-0 bg-cover bg-center bg-no-repeat lg:hidden'
                style={{ backgroundImage: `url(${mobileImage})` }}
            />

            <div
                className='absolute inset-0 hidden bg-cover bg-center bg-no-repeat lg:block'
                style={{ backgroundImage: `url(${image})` }}
            />

            <div className='absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent' />

            <div className='relative z-10 min-h-screen flex items-end px-6 pb-20 md:pb-28 lg:px-10 lg:pb-32'>
                <div className='max-w-2xl text-left'>
                    <h2 className='mb-4 text-2xl tracking-tight text-[#EDEDED] md:text-3xl lg:text-4xl'>
                        {headline}
                    </h2>

                    <p className='mt-3 text-xs leading-relaxed text-white/70 md:text-lg lg:text-xl'>
                        {tagline}
                    </p>
                </div>
            </div>
        </section>
    )
}

export default NarrativeSection