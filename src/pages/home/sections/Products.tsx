import { FaStar } from 'react-icons/fa'
import In_Wall_Switch from '../../../assets/images/In_Wall_Switch.png'
import MixSwitch from '../../../assets/images/MixSwitch.png'
import Smart_IP_Camera from '../../../assets/images/Smart_IP_Camera.png'
import Smart_Magnetic_Chandelier from '../../../assets/images/Smart_Magnetic_Chandelier.png'
import Smart_Magnetic_Floodlight from '../../../assets/images/Smart_Magnetic_Floodlight.png'
import ZigBee_Mini from '../../../assets/images/ZigBee_Mini.png'

type Product = {
    category: string
    id: number
    image: string
    name: string
    price: string
    rating: number
    reviews: number
}

const PRODUCTS: Product[] = [
    {
        category: 'Smart Central Control Panels',
        id: 1,
        image: ZigBee_Mini,
        name: 'ZigBee Mini Hub',
        price: '₦1,150,000',
        rating: 5.0,
        reviews: 12000
    },
    {
        category: 'Smart Central Control Panels',
        id: 2,
        image: MixSwitch,
        name: 'MixSwitch',
        price: '₦980,000',
        rating: 5.0,
        reviews: 4000
    },
    {
        category: 'Home Security & Sensors',
        id: 3,
        image: Smart_IP_Camera,
        name: 'Smart IP Camera',
        price: '₦90,000',
        rating: 4.4,
        reviews: 2000
    },
    {
        category: 'Home Security & Sensors',
        id: 4,
        image: Smart_Magnetic_Floodlight,
        name: 'Smart Magnetic Floodlight',
        price: '₦50,000',
        rating: 4.8,
        reviews: 100
    },
    {
        category: 'Smart Switches',
        id: 5,
        image: In_Wall_Switch,
        name: 'In Wall Switch',
        price: '₦10,000',
        rating: 5.0,
        reviews: 60000
    },
    {
        category: 'Smart Lighting',
        id: 6,
        image: Smart_Magnetic_Chandelier,
        name: 'Smart Magnetic Chandelier',
        price: '₦450,000',
        rating: 4.8,
        reviews: 24000
    }
]

const Products: React.FC = () => {
    return (
        <section className='bg-[#0a0a0a] pb-20 pt-10 lg:pt-20 px-6 lg:px-8' id='products'>
            <div className='mx-auto max-w-6xl'>
                <div className='mb-16 text-center'>
                    <span className='text-[#6f4ccf] text-sm font-semibold tracking-wider uppercase'>Our Products</span>
                    <h2 className='mt-4 mb-4 text-4xl lg:text-5xl font-bold text-white'>Featured Smart <span className='text-[#6f4ccf]'>Devices</span></h2>
                    <p className='mx-auto max-w-2xl text-[#a8a8a8] text-lg'>Discover our range of cutting-edge smart home devices designed to transform your living space</p>
                </div>
                <div className=' gap-6 grid md:grid-cols-2 lg:grid-cols-3'>
                    {PRODUCTS.map((product) => (
                        <div className='duration-700 ease-in-out group flex flex-col overflow-hidden rounded-2xl border border-[#6f4ccf]/10 bg-[#1a1a2e] transition-all hover:-translate-y-1 hover:border-[#6f4ccf]/30 hover:shadow-lg hover:shadow-[#6f4ccf]/20'
                            key={product.id}
                        >
                            <div className='relative'>
                                <span className='absolute right-4 top-4 z-10 rounded-full bg-[#6f4ccf] px-3 py-1 text-xs font-medium text-white'>{product.category}</span>
                                <div className='bg-[#0f0f1a] flex items-center justify-center h-64 pb-4 pt-14'>
                                    <img alt={product.name} className='h-full w-full object-contain' src={product.image} />
                                </div>
                            </div>
                            <div className='flex flex-grow flex-col p-6'>
                                <h3 className='mb-2 font-bold text-white'>{product.name}</h3>
                                <div className='mb-4 flex items-center gap-2'>
                                    <FaStar className='text-sm text-yellow-500' />
                                    <span className='text-sm font-medium text-white'>{product.rating}</span>
                                    <span className='text-sm text-[#a8a8a8]'>({product.reviews.toLocaleString()} Reviews)</span>
                                </div>
                                <p className='mb-4 text-2xl font-bold text-[#6f4ccf]'>{product.price}</p>
                                <div className='mt-auto flex gap-3'>
                                    <button className='duration-1000 ease-in-out rounded-full border-2 border-[#6f4ccf] px-4 py-2.5 text-sm font-semibold text-[#6f4ccf] transition-colors hover:bg-[#6f4ccf]/10'>Add to Cart</button>
                                    <button className='duration-1000 ease-in-out rounded-full bg-[#6f4ccf] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#5a3ca8]'>Buy Now</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Products