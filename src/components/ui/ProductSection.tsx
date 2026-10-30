import React from 'react'
import type { Product } from '../../types/Product'
import ProductCard from './ProductCard'

type ProductGridProps = {
    products: Product[]
    cols?: 2 | 3 | 4 | 5 | 6
    responsive?: boolean
}

const ProductSection: React.FC<ProductGridProps> = ({
    products,
    cols,
    responsive = false
}) => {
    const gridColsMap = {
        2: 'lg:grid-cols-2',
        3: 'lg:grid-cols-3',
        4: 'lg:grid-cols-4',
        5: 'lg:grid-cols-5',
        6: 'lg:grid-cols-6'
    }

    const gridClasses = responsive
        ? 'grid-cols-1 min-[1024px]:grid-cols-2 min-[1280px]:grid-cols-3'
        : `sm:grid-cols-2 ${cols ? gridColsMap[cols] : 'xl:grid-cols-3'}`

    return (
        <div className={`grid gap-6 ${gridClasses}`}>
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )
}

export default ProductSection