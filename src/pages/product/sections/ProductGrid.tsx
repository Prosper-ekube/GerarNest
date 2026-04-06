import { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import { MdStorage } from 'react-icons/md'
import { GoArrowSwitch } from "react-icons/go";
import { FaLightbulb } from "react-icons/fa6";
import { LuInspectionPanel } from "react-icons/lu";
import { PiSecurityCamera } from "react-icons/pi";
import central_scene_panel from '../../../assets/images/central_scene_panel.png'
import glass_touch_console from '../../../assets/images/glass_touch_console.png'
import smart_switch_1 from '../../../assets/images/smart_switch_1.png'
import cctv_c2 from '../../../assets/images/cctv_c2.png'
import smart_bulb from '../../../assets/images/smart_bulb.png'
import smart_control_panel_s1 from '../../../assets/images/smart_control_panel_s1.png'

const ProductGrid: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState('All Product')
    const [expandedSections, setExpandedSections] = useState({
        category: true,
        newArrivals: false,
        bestSeller: false,
        onDiscount: false
    })

    const categories = [
        { name: 'All Products', count: 57, icon: <MdStorage /> },
        { name: 'Smart Central Control Panels', icon: <LuInspectionPanel /> },
        { name: 'Smart Lighting', icon: <FaLightbulb /> },
        { name: 'Smart Switches', icon: <GoArrowSwitch /> },
        { name: 'Home Security & Sensors', icon: <PiSecurityCamera /> },        
    ]

    const products = [
        {
            id: 1,
            name: 'Orvibo Control Panel S1',
            price: '₦1,150,000',
            rating: 5.0,
            reviews: 12000,
            category: 'Smart Central Control Panels',
            image: central_scene_panel
        },
        {
            id: 2,
            name: 'Orvibo Glass Touch Console',
            price: '₦980,000',
            rating: 5.0,
            reviews: 4000,
            category: 'Smart Central Control Panels',
            image: glass_touch_console
        },
        {
            id: 3,
            name: 'Orvibo Smart Switch S1',
            price: '₦90,000',
            rating: 4.4,
            reviews: 2000,
            category: 'Smart Switches',
            image: smart_switch_1
        },
        {
            id: 4,
            name: 'Orvibo CCTV C2',
            price: '₦50,000',
            rating: 4.8,
            reviews: 100,
            category: 'Home Security & Sensors',
            image: cctv_c2
        },
        {
            id: 5,
            name: 'Orvibo Smart Bulb B2',
            price: '₦10,000',
            rating: 5.0,
            reviews: 60000,
            category: 'Smart Lighting',
            image: smart_bulb
        },
        {
            id: 6,
            name: 'Orvibo Control Panel S1',
            price: '₦450,000',
            rating: 4.8,
            reviews: 24000,
            category: 'Smart Central Control Panels',
            image: smart_control_panel_s1
        }
    ]

    // const toggleSection = (section: keyof typeof expandedSections) => {
    //     setExpandedSections(prev => ({
    //         ...prev,
    //         [section]: !prev[section]
    //     }))
    // }

    return (
        <section className='py-20 px-6 lg:px-8 bg-[#0a0a0a] overflow-hidden'>
            <div className='max-w-6xl mx-auto'>
                <div className='grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8'>
                    {/* Sidebar */}
                    <aside className='w-full space-y-6'>
                        {/* Category Section */}
                        <div className='border border-[#6f4ccf]/20 rounded-2xl overflow-hidden bg-[#1a1a2e]'>
                            <button className='w-full flex items-center justify-between p-4 bg-[#1a1a2e]'>
                                <h3 className='font-bold text-white'>Category</h3>                                
                            </button>
                            {expandedSections.category && (
                                <ul className='p-4 pt-0 space-y-3'>
                                    {categories.map((cat) => (
                                        <li key={cat.name}>
                                            <button
                                                className={`w-full flex items-center gap-3 p-2 rounded-lg transition-colors ${selectedCategory === cat.name
                                                        ? 'bg-[#6f4ccf]/20 text-[#6f4ccf]'
                                                        : 'hover:bg-[#6f4ccf]/10 text-white'
                                                    }`}
                                                onClick={() => setSelectedCategory(cat.name)}
                                            >
                                                <span className='text-xl'>{cat.icon}</span>
                                                <span className='flex-1 text-left font-medium text-sm'>{cat.name}</span>
                                                {cat.count && (
                                                    <span className='bg-[#6f4ccf] text-white text-xs px-2 py-1 rounded-full font-bold'>
                                                        {cat.count}
                                                    </span>
                                                )}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </aside>

                    {/* Product Grid */}
                    <div>
                        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                            {products.map((product) => (
                                <div className='bg-[#1a1a2e] border border-[#6f4ccf]/10 rounded-2xl overflow-hidden hover:shadow-lg hover:shadow-[#6f4ccf]/20 hover:-translate-y-1 hover:border-[#6f4ccf]/30 transition-all group' key={product.id}>
                                    {/* Category Badge */}
                                    <div className='relative'>
                                        <span className='absolute top-4 right-4 bg-[#6f4ccf] text-white px-3 py-1 rounded-full text-xs font-medium z-10'>
                                            {product.category}
                                        </span>
                                        {/* Product Image */}
                                        <div className='bg-[#0f0f1a] flex items-center justify-center'>
                                            <div className='w-full h-full rounded-xl flex items-end justify-center'>
                                                <img src={product.image} alt={product.name} className='object-contain h-max' />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Product Info */}
                                    <div className='p-6'>
                                        <h3 className='font-bold text-white mb-2'>{product.name}</h3>

                                        {/* Rating */}
                                        <div className='flex items-center gap-2 mb-4'>
                                            <FaStar className='text-yellow-500 text-sm' />
                                            <span className='text-sm text-white font-medium'>{product.rating}</span>
                                            <span className='text-sm text-[#a8a8a8]'>({product.reviews.toLocaleString()} Reviews)</span>
                                        </div>

                                        {/* Price */}
                                        <p className='text-2xl font-bold text-[#6f4ccf] mb-4'>{product.price}</p>

                                        {/* Buttons */}
                                        <div className='flex gap-3'>
                                            <button className='px-4 py-2.5 border-2 border-[#6f4ccf] text-[#6f4ccf] rounded-full font-semibold text-sm hover:bg-[#6f4ccf]/10 transition-colors'>
                                                Add to Cart
                                            </button>
                                            <button className='px-4 py-2.5 bg-[#6f4ccf] text-white rounded-full font-semibold text-sm hover:bg-[#5a3ca8] transition-colors'>
                                                Buy Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Pagination */}
                        <div className='flex items-center justify-between mt-12 overflow-x-auto gap-2'>
                            <button className='flex items-center gap-2 px-6 py-3 text-white font-medium hover:text-[#6f4ccf] transition-colors'>
                                <span>←</span> Previous
                            </button>

                            <div className='flex items-center gap-2'>
                                {[1, 2, 3, '...', 8, 9, 10].map((page, index) => (
                                    <button
                                        className={`w-10 h-10 rounded-lg font-medium transition-colors ${page === 1
                                                ? 'bg-[#6f4ccf] text-white'
                                                : 'text-white hover:bg-[#6f4ccf]/20 border border-[#6f4ccf]/20'
                                            }`}
                                        key={index}
                                    >
                                        {page}
                                    </button>
                                ))}
                            </div>

                            <button className='flex items-center gap-2 px-6 py-3 text-white font-medium hover:text-[#6f4ccf] transition-colors'>
                                Next <span>→</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductGrid