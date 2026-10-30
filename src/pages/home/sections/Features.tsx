import { useNavigate } from "react-router-dom"

const Features: React.FC = () => {
    const navigate = useNavigate()
    return (
        < section className='bg-[#0f0f1a] lg:px-8 pb-20 pt-10 px-6 lg:pt-20' id='features' >
            <div className='max-w-6xl mx-auto'>
                <div className='text-center'>
                    <span className='font-semibold text-[#6f4ccf] text-base tracking-wider uppercase'>Why Choose GerarNest</span>
                    <h2 className='font-bold mt-4 mb-4 text-4xl lg:text-4xl text-white'>Smart Living Made <span className='text-[#6f4ccf]'>Simple</span></h2>
                    <p className='max-w-2xl mx-auto text-[#a8a8a8] text-base'>
                        Experience the perfect blend of innovation and simplicity with features designed for modern living
                    </p>
                    <button onClick={() => navigate('/tour')}
                        className='bg-[#6f4ccf] duration-1000 ease-in-out font-semibold hover:-translate-y-1 hover:bg-[#5a3ca8] self-start px-8 py-4 mt-10 md:mt-20 rounded-full shadow-[#6f4ccf]/40 shadow-lg text-base text-white transition-all'
                    >
                        TAKE A TOUR
                    </button>
                </div>
            </div>
        </section >
    )
}

export default Features