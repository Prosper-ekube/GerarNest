import { useEffect, useState } from 'react'

import ProductCard from '../../../../../components/ui/ProductCard'
import type { Product } from '../../../../../types/Product'

type Props = {
    category: string
    currentProductId: number
}

const RelatedProducts = ({
    category,
    currentProductId
}: Props) => {
    const [products, setProducts] = useState<Product[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchRelatedProducts = async () => {
            try {
                const res = await fetch('http://127.0.0.1:8000/api/products/')

                if (!res.ok) {
                    throw new Error('Failed to fetch products')
                }

                const data: Product[] = await res.json()

                console.log('FINAL STEP - DATA LENGTH:', data.length)

                const relatedProducts = data.filter(product => {
                    return product.category_display === category
                })

                setProducts(relatedProducts.slice(0, 4))
            } catch (error) {
                console.error('FETCH ERROR:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchRelatedProducts()
    }, [category, currentProductId])

    if (loading) {
        return (
            <p className='text-white pb-24'>
                Loading related products...
            </p>
        )
    }

    if (loading) {
        return <p className='text-white pb-24'>Loading...</p>
    }

    return (
        <section className='pb-24'>
            <h2 className='mb-8 text-3xl font-bold text-white'>
                Related Products
            </h2>

            <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-4'>
                {products.map(product => (
                    <ProductCard
                        key={product.id}
                        product={product}
                    />
                ))}
            </div>
        </section>
    )
}

export default RelatedProducts