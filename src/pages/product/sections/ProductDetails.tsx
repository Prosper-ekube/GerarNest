import { useParams } from 'react-router-dom'
import useProducts from '../../../hooks/useProducts'
import ProductGallery from './ProductGallery'
import ProductInfo from './ProductInfo'

const ProductDetails = () => {
    const { id } = useParams()
    const { products, loading } = useProducts()

    if (loading) return <p className='text-white'>Loading...</p>

    const product = products.find(p => p.id === Number(id))

    if (!product) return <p className='text-white'>Product not found</p>

    return (
        <section className='bg-[#0a0a0a] min-h-screen px-5 py-16 sm:px-8 lg:px-10'>
            <div className='gap-10 grid grid-cols-1 items-start max-w-6xl mx-auto lg:gap-16 lg:grid-cols-2'>
                <ProductGallery mainImage={product.image} images={product.images} name={product.name} />
                <ProductInfo product={product} />
            </div>
        </section>
    )
}

export default ProductDetails