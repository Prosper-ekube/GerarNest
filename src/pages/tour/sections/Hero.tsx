import React from 'react'
import { motion } from 'framer-motion'

type HeroProps = {
    image?: string
    tagline?: string
    headline?: string
}

const Hero: React.FC<HeroProps> = ({
    image = 'https://res.cloudinary.com/dkdd5pfl0/image/upload/v1792923104/Tour_1_gxcviq.webp',
    headline = 'Official Orvibo Distributor',
    tagline = 'Bringing premium Orvibo smart technology to Nigerian residences. Seamlessly uniting control, lighting, and security into one refined experience.'
}) => {
    return (
        <section
            className='relative min-h-screen flex items-center bg-cover bg-center bg-no-repeat overflow-hidden'
            style={{ backgroundImage: `url(${image})` }}
        >        
            {/* Content Container */}
            <div className='relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-28 w-full text-center text-white'>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className='max-w-5xl text-center mx-auto'
                >
                    <h1 className='text-3xl mb-4 md:mb-6 md:text-5xl font-medium tracking-tight'>
                        {headline}
                    </h1>
                    {/* Tagline Badge */}
                    {tagline && (                
                        <p className='text-xs leading-5 md:leading-9 sm:text-xl md:text-2xl tracking-widest text-white/70'>
                                {tagline}
                        </p>
                    )}
                </motion.div>
            </div>
        </section>
    )
}

export default Hero