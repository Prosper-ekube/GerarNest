import React from 'react'
import type { Product } from '../../types/Product'
import ProductCard from './ProductCard'

type ProductGridProps = {
    products: Product[]
    cols?: 2 | 3 | 4 | 5 | 6
}

const ProductSection: React.FC<ProductGridProps> = ({ products, cols }) => {
    const gridColsMap = {
        2: 'lg:grid-cols-2',
        3: 'lg:grid-cols-3',
        4: 'lg:grid-cols-4',
        5: 'lg:grid-cols-5',
        6: 'lg:grid-cols-6'
    }

    return (
        <div
            className={`grid gap-6 md:grid-cols-2 ${cols ? gridColsMap[cols] : 'lg:grid-cols-3'
                }`}
        >
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )
}

export default ProductSection