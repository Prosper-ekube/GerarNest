import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Hero: React.FC = () => {
    const navigate = useNavigate()
    const videoRef = useRef<HTMLVideoElement>(null)

    const [progress, setProgress] = useState(0)

    const video =
        'https://res.cloudinary.com/dkdd5pfl0/video/upload/v1788020512/Orvibo_Smart_Home_Brand_Video_yat4e7.mp4'

    const poster =
        'https://res.cloudinary.com/dkdd5pfl0/image/upload/v1788020718/Poster_rneuea.png'

    return (
        <section className='relative min-h-screen overflow-hidden'>

            {/* Background Video */}
            <div className='absolute inset-0'>

                {/* Poster */}
                <img
                    src={poster}
                    alt=''
                    className='absolute inset-0 h-full w-full object-cover'
                />

                {/* Video */}
                <video
                    ref={videoRef}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload='metadata'
                    poster={poster}
                    onTimeUpdate={() => {
                        if (!videoRef.current) return

                        const video = videoRef.current

                        if (!video.duration) return

                        setProgress(
                            (video.currentTime / video.duration) * 100
                        )
                    }}
                    className='relative h-full w-full object-cover'
                >
                    <source
                        src={video}
                        type='video/mp4'
                    />
                </video>
            </div>

            {/* Dark Overlay */}
            <div className='absolute inset-0 bg-black/50' />

            {/* Content */}
            <div className='relative z-10 flex min-h-screen items-end pb-20 sm:pb-24 md:pb-28 lg:pb-32'>
                <div className='mx-auto w-full max-w-7xl px-6 lg:px-10'>

                    <div className='max-w-2xl'>

                        {/* Category */}
                        <span className='mb-3 inline-block text-xs font-semibold tracking-[0.3em] text-white/70 uppercase'>
                            OFFICIAL ORVIBO PARTNER & DISTRIBUTOR
                        </span>

                        {/* Brand */}
                        <h1 className='text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl'>
                            GerarNest
                        </h1>

                        {/* Tagline */}
                        <p className='mt-2 text-lg text-white/80 sm:text-xl md:text-2xl'>
                            Smart Living Simplified.
                        </p>

                        {/* CTA */}
                        <button
                            onClick={() => navigate('/product')}
                            className='mt-6 rounded-full border-2 border-white bg-transparent px-8 py-4 font-semibold text-white transition-all duration-1000 ease-in-out hover:-translate-y-1 hover:bg-white hover:text-[#6f4ccf]'
                        >
                            Explore Our Products
                        </button>

                    </div>

                </div>
            </div>

            {/* Progress Bar */}
            <div className='absolute bottom-0 left-0 right-0 z-20 h-1 bg-[#6F4CCF]/20'>
                <div
                    className='h-full bg-[#6F4CCF] transition-[width] duration-100 ease-linear'
                    style={{
                        width: `${progress}%`
                    }}
                />
            </div>
        </section>
    )
}

export default Hero