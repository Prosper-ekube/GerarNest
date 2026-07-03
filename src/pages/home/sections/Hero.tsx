// Hero.tsx
import { useState, useRef, useEffect, useCallback } from 'react'; // ✅ Added useCallback
import { useNavigate } from 'react-router-dom';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';

// Types
type Slide = {
    id: number;
    video: string;
    poster: string;
    category: string;
    productName: string;
    tagline: string;
    ctaLink: string;
};

// Slide data
const slidesData: Slide[] = [
    {
        id: 1,
        video: 'https://res.cloudinary.com/dkdd5pfl0/video/upload/v1783084466/Mixswtich_wi6kzy.mp4',
        poster: 'https://res.cloudinary.com/dkdd5pfl0/image/upload/v1775557125/MixSwitch_j36vnc.png',
        category: 'SMART CENTRAL CONTROL PANELS',
        productName: 'Mixswitch',
        tagline: 'Intelligent Living, Elevated.',
        ctaLink: '/product#smart_lighting'
    },
    {
        id: 2,
        video: 'https://res.cloudinary.com/dkdd5pfl0/video/upload/v1783084466/Mixswtich_wi6kzy.mp4',
        poster: 'https://res.cloudinary.com/dkdd5pfl0/image/upload/v1775557125/MixSwitch_j36vnc.png',
        category: 'SMART LIGHTING',
        productName: 'Orvibo Smart Panel',
        tagline: 'Intelligent Living, Elevated.',
        ctaLink: '/product#smart_lighting'
    },
    // ... more slides
];

const Hero: React.FC = () => {
    const navigate = useNavigate();
    const [currentIndex, setCurrentIndex] = useState(0);    
    const [progress, setProgress] = useState(0);

    const videoRef = useRef<HTMLVideoElement>(null);

    const totalSlides = slidesData.length;

    const goToSlide = useCallback((index: number) => {
        if (index === currentIndex) return;

        setProgress(0);
        setCurrentIndex(index);
    }, [currentIndex]);

    // ✅ Fixed: useCallback with proper dependencies
    const nextSlide = useCallback(() => {
        const nextIndex = (currentIndex + 1) % totalSlides;
        goToSlide(nextIndex);
    }, [currentIndex, totalSlides, goToSlide]);

    const prevSlide = useCallback(() => {
        const prevIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        goToSlide(prevIndex);
    }, [currentIndex, totalSlides, goToSlide]);

    useEffect(() => {
        setProgress(0);

        if (!videoRef.current) return;

        const video = videoRef.current;

        video.currentTime = 0;

        video.play().catch(() => { });
    }, [currentIndex]);

    const currentSlide = slidesData[currentIndex];

    return (
        <section className='relative min-h-screen overflow-hidden'>
            {/* Background video */}
            <video
                ref={videoRef}
                key={currentSlide.id}
                autoPlay
                muted
                playsInline
                preload='auto'
                className='absolute inset-0 h-full w-full object-cover'
                onEnded={nextSlide}
                onTimeUpdate={() => {
                    if (!videoRef.current) return;

                    const video = videoRef.current;

                    if (!video.duration) return;

                    setProgress((video.currentTime / video.duration) * 100);
                }}
            >
                <source
                    src={currentSlide.video}
                    type='video/mp4'
                />
            </video>

            {/* Dark Overlay */}
            <div className='absolute inset-0 bg-black/50' />

            {/* Content Container */}
            <div className='relative z-10 flex min-h-screen items-end pb-20 sm:pb-24 md:pb-28 lg:pb-32'>
                <div className='mx-auto w-full max-w-7xl px-6 lg:px-10'>

                    {/* Content - Bottom Left */}
                    <div className='max-w-2xl'>
                        <span className='inline-block text-xs font-semibold tracking-[0.3em] text-white/70 uppercase mb-3'>
                            {currentSlide.category}
                        </span>

                        <h2 className='text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl'>
                            {currentSlide.productName}
                        </h2>

                        <p className='mt-2 text-lg text-white/80 sm:text-xl md:text-2xl'>
                            {currentSlide.tagline}
                        </p>

                        <button
                            onClick={() => navigate(currentSlide.ctaLink)}
                            className='bg-transparent border-2 border-white mt-6 duration-1000 ease-in-out font-semibold hover:-translate-y-1 hover:bg-white hover:text-[#6f4ccf] px-8 py-4 rounded-full text-white transition-all'
                        >
                            Learn More
                        </button>
                    </div>

                </div>
            </div>

            {/* Navigation Arrows - Show on Hover */}
            <div className='absolute top-1/2 left-0 right-0 z-20 flex justify-between px-4 pointer-events-none'>
                <button
                    onClick={prevSlide}
                    className='pointer-events-auto rounded-full bg-black/30 p-3 text-white transition-colors duration-300 hover:bg-black/50'
                    aria-label="Previous slide"
                >
                    <IoChevronBack className='w-6 h-6' />
                </button>
                <button
                    onClick={nextSlide}
                    className='pointer-events-auto rounded-full bg-black/30 p-3 text-white transition-colors duration-300 hover:bg-black/50'
                    aria-label="Next slide"
                >
                    <IoChevronForward className='w-6 h-6' />
                </button>
            </div>

            {/* Progress Bar */}
            <div className='absolute bottom-0 left-0 right-0 z-20 h-1 bg-[#6F4CCF]/20'>
                <div
                    className='h-full bg-[#6F4CCF] transition-[width] duration-100 ease-linear'
                    style={{ width: `${progress}%` }}
                />
            </div>

            {/* Slide Indicators (Dots) */}
            <div className='absolute bottom-6 left-0 right-0 z-20 flex justify-center gap-2'>
                {slidesData.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`transition-all duration-300 rounded-full ${index === currentIndex
                            ? 'w-8 h-2 bg-[#6F4CCF]'
                            : 'w-2 h-2 bg-[#6F4CCF]/40 hover:bg-[#6F4CCF]/60'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default Hero;