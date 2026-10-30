
import React from 'react'
import { motion } from 'framer-motion'

type Feature = {
    title: string
    description: string
    icon: React.ReactNode
}

type FeatureProps = {
    desktopImage: string
    mobileImage: string
    eyebrow?: string
    headline: string
    title: string
    description: string
    features: Feature[]
}

const Features: React.FC<FeatureProps> = ({
    desktopImage,
    mobileImage,
    eyebrow,
    headline,
    title,
    description,
    features
}) => {
    return (
        <section className='border-t border-white/10 bg-[#0a0a0a] px-6 py-20 text-[#EDEDED] md:py-24 lg:px-12'>
            <div className='mx-auto max-w-7xl'>
                <div className='mb-12 md:mb-16'>
                    <span className='mb-3 block text-xs font-semibold uppercase tracking-widest text-[#6F4CCF]'>
                        {eyebrow}
                    </span>

                    <h2 className='text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl'>
                        {headline}
                    </h2>
                </div>

                <div className='grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12'>
                    <motion.div
                        initial={{ opacity: 0, x: -24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        className='overflow-hidden rounded-2xl border border-[#6F4CCF]/15 bg-[#0E1013] lg:col-span-7'
                    >
                        <picture>
                            <source media='(max-width: 767px)' srcSet={mobileImage} />
                            <img
                                src={desktopImage}
                                alt={title}
                                loading='lazy'
                                className='aspect-[4/3] w-full object-cover sm:aspect-[5/4] lg:aspect-[4/5]'
                            />
                        </picture>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
                        className='flex flex-col justify-center gap-6 lg:col-span-5'
                    >
                        <div>
                            <h3 className='text-2xl font-medium tracking-tight text-[#EDEDED]'>
                                {title}
                            </h3>

                            <p className='mt-3 text-sm leading-relaxed text-[#A8A8A8] md:text-base'>
                                {description}
                            </p>
                        </div>

                        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
                            {features.map(feature => (
                                <div
                                    key={feature.title}
                                    className='rounded-xl border border-[#6F4CCF]/20 bg-[#0E1013] p-4 transition-colors duration-200 hover:border-[#6F4CCF] hover:bg-[#1a1a2e]'
                                >
                                    <div className='mb-3 text-[#6F4CCF]'>
                                        {feature.icon}
                                    </div>

                                    <h4 className='mb-1 text-sm font-medium text-[#EDEDED]'>
                                        {feature.title}
                                    </h4>

                                    <p className='text-xs leading-relaxed text-[#A8A8A8]'>
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Features