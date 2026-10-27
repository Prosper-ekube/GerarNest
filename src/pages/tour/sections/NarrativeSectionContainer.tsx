import React from 'react'
import NarrativeSection from './NarrativeSection'

const sections = [
    {
        image: 'https://res.cloudinary.com/dkdd5pfl0/image/upload/v1793016036/Tour_2_jcwwqk.webp',
        mobileImage: 'https://res.cloudinary.com/dkdd5pfl0/image/upload/v1793023762/tour_21.webp',
        headline: 'Centralized Command',
        tagline: 'Experience intelligent technology designed to make everyday living more comfortable, convenient, and connected.'
    },
    {
        image: 'https://res.cloudinary.com/dkdd5pfl0/image/upload/v1793017160/Tour_3_oi602r.webp',
        mobileImage: 'https://res.cloudinary.com/dkdd5pfl0/image/upload/v1793021405/tour_31.webp',
        headline: 'Lighting Scene & Automation',
        tagline: 'Bring lighting, security, climate, and other smart devices together for effortless control.'
    },
    {
        image: 'https://res.cloudinary.com/dkdd5pfl0/image/upload/v1793017159/Tour_4_zeulyc.webp',
        mobileImage: 'https://res.cloudinary.com/dkdd5pfl0/image/upload/v1793024009/tour_42.webp',
        headline: 'Precision Climate Control',
        tagline: 'Premium smart-home solutions that blend naturally into the spaces you live and work in.'
    },
    {
        image: 'https://res.cloudinary.com/dkdd5pfl0/image/upload/v1793017160/Tour_5_hy8gwx.webp',
        mobileImage: 'https://res.cloudinary.com/dkdd5pfl0/image/upload/v1793024156/tour_51.webp',
        headline: 'Perimeter & Access Control',
        tagline: 'Build a connected environment where your devices communicate seamlessly and respond to your needs.'
    },
    {
        image: 'https://res.cloudinary.com/dkdd5pfl0/image/upload/v1793026361/Tour_6_q2f2lt.webp',
        mobileImage: 'https://res.cloudinary.com/dkdd5pfl0/image/upload/v1793026413/tour_61.webp',
        headline: 'Secure Access Control',
        tagline: 'Advanced smart locks engineered with biometric precision, high-grade security, and sophisticated architectural finishes.'
    }
]

const NarrativeSectionContainer: React.FC = () => {
    return (
        <main>
            {sections.map(section => (
                <NarrativeSection
                    key={section.headline}
                    image={section.image}
                    mobileImage={section.mobileImage}
                    headline={section.headline}
                    tagline={section.tagline}
                />
            ))}
        </main>
    )
}

export default NarrativeSectionContainer