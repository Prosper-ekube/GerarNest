import { useState } from 'react'
import Button from '../../../components/ui/Button'
import ProductCard from './ProductCard'

type Product = {
    id: string
    name: string
    price: number
    image: string
    category: string
}

const mockProducts: Product[] = [
    {
        id: '1',
        name: 'Orvibo Central Scene Panel S1',
        price: 1150000,
        image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=400&h=300&fit=crop',
        category: 'central-control'
    },
    {
        id: '2',
        name: 'Orvibo Glass Touch Console...',
        price: 980000,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
        category: 'central-control'
    },
    {
        id: '3',
        name: 'Orvibo Compact Hub C2',
        price: 720000,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd65?w=400&h=300&fit=crop',
        category: 'central-control'
    },
    {
        id: '4',
        name: 'Orvibo Panorama Console P5',
        price: 1380000,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd66?w=400&h=300&fit=crop',
        category: 'central-control'
    },
    {
        id: '5',
        name: 'Orvibo Vertical Control Bar V1',
        price: 860000,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd67?w=400&h=300&fit=crop',
        category: 'central-control'
    },
    {
        id: '6',
        name: 'Orvibo Dual Screen Panel D4',
        price: 1260000,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd68?w=400&h=300&fit=crop',
        category: 'central-control'
    },
    {
        id: '7',
        name: 'Orvibo Halo Control Node H2',
        price: 640000,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd69?w=400&h=300&fit=crop',
        category: 'central-control'
    },
    {
        id: '8',
        name: 'Orvibo Desk Console T1',
        price: 1040000,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd70?w=400&h=300&fit=crop',
        category: 'central-control'
    }
]

const ProductCatalogue = () => {
    const [visibleCount, setVisibleCount] = useState(8)

    const visibleProducts = mockProducts.slice(0, visibleCount)
    const hasMore = visibleCount < mockProducts.length

    const handleLoadMore = () => {
        setVisibleCount(prev => prev + 8)
    }

    return (
        <div className='flex-1'>
            <div className='flex flex-col gap-3 md:gap-4 mb-8 md:mb-12'>
                <p className='font-medium text-[#A8A8A8] text-xs md:text-sm tracking-wider uppercase'>
                    Orvibo Smart Home Catalogue
                </p>
                <h1 className='font-bold text-[#EDEDED] text-2xl md:text-4xl'>
                    Smart Central Control Panels
                </h1>
                <p className='text-[#A8A8A8] text-sm md:text-base max-w-2xl'>
                    Explore Orvibo-designed central control panels distributed by Gerar Smart Homes for premium Nigerian residences and developments.
                </p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mb-8'>
                {visibleProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

            {hasMore && (
                <div className='flex justify-center pb-12'>
                    <Button onClick={handleLoadMore}>Load More</Button>
                </div>
            )}
        </div>
    )
}

export default ProductCatalogue