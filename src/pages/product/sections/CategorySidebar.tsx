import { useState } from 'react'

type Category = {
    id: string
    name: string
}

const categories: Category[] = [
    { id: 'central-control', name: 'Smart Central Control Panels' },
    { id: 'switches', name: 'Smart Switches' },
    { id: 'lighting', name: 'Smart Lighting' },
    { id: 'security', name: 'Home Security & Sensors' },
    { id: 'shading', name: 'Smart Shading' },
    { id: 'hvac', name: 'Smart HVAC' },
    { id: 'entertainment', name: 'Home Entertainment' }
]

const CategorySidebar = () => {
    const [activeCategory, setActiveCategory] = useState('central-control')

    return (
        <aside className='hidden lg:block w-64 flex-shrink-0'>
            <div className='sticky top-32'>
                <h3 className='font-semibold mb-6 text-[#EDEDED] text-lg'>Categories</h3>
                <ul className='flex flex-col gap-2'>
                    {categories.map((category) => (
                        <li key={category.id}>
                            <button
                                className={[
                                    'duration-200 px-4 py-3 rounded-md text-left text-sm transition-colors w-full',
                                    activeCategory === category.id
                                        ? 'bg-[#1A1D24] text-[#EDEDED]'
                                        : 'text-[#A8A8A8] hover:bg-[#1A1D24] hover:text-[#EDEDED]'
                                ].join(' ')}
                                onClick={() => setActiveCategory(category.id)}
                                type='button'
                            >
                                {category.name}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    )
}

export default CategorySidebar