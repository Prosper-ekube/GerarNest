import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'

type HeroProps = {
    onSearch: (query: string) => void
}

const Hero: React.FC<HeroProps> = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('')

    const handleSearch = () => {
        onSearch(searchQuery)
    }

    return (
        <section
            className='relative pt-24 md:pt-36 pb-16 px-6 lg:px-8 bg-cover bg-center'
            style={{ backgroundImage: 'url(/path-to-your-hero-image.jpg)' }}
        >
            <div className='absolute inset-0 bg-[#0a0a0a]/90' />

            <div className='relative z-10 max-w-6xl mx-auto text-center'>
                <h1 className='text-6xl lg:text-8xl font-bold text-white mb-4'>
                    Gerar Smart Homes
                </h1>

                <p className='text-xl text-[#a8a8a8] mb-8'>
                    Give All You Need
                </p>

                <div className='max-w-2xl mx-auto flex gap-3'>
                    <div className='flex-1 relative'>
                        <FaSearch className='absolute left-4 top-1/2 -translate-y-1/2 text-[#a8a8a8]' />

                        <input
                            className='w-full pl-12 pr-4 py-3 rounded-full bg-[#1a1a2e] text-white placeholder:text-[#a8a8a8] focus:outline-none focus:ring-2 focus:ring-[#6f4ccf] border border-[#6f4ccf]/20'
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder='Search on Gerar Homes'
                            type='text'
                            value={searchQuery}
                        />
                    </div>

                    <button
                        className='px-8 py-3 bg-[#6f4ccf] text-white rounded-full font-semibold hover:bg-[#5a3ca8] transition-colors'
                        onClick={handleSearch}
                    >
                        Search
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Hero