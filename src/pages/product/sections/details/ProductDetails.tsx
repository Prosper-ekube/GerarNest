import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import type { Product } from '../../../../types/Product'

import Footer from '../../../../components/layout/Footer'
import Navbar from '../../../../components/layout/Navbar'

import Applications from './sections/Applications'
import Breadcrumb from './sections/BreadCrumb'
import FeatureHighlights from './sections/FeatureHighlights'
import LifestyleBanner from './sections/LifestyleBanner'
import ProductHero from './sections/ProductHero'
import RelatedProducts from './sections/RelatedProducts'
import Specifications from './sections/Specifications'
import TrustSection from './sections/TrustSection'
import ReviewsSection from './sections/ReviewsSection'

const ProductDetails = () => {
    const { id } = useParams()
    console.log('ROUTE ID:', id)
    const [product, setProduct] = useState<Product | null>(null)

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await fetch(`http://127.0.0.1:8000/api/products/${id}/`)
                const data = await res.json()
                setProduct(data)
            } catch (err) {
                console.error('Failed to load product', err)
            }
        }

        if (id) fetchProduct()
    }, [id])

    if (!product) {
        return (
            <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center">
                Loading product...
            </div>
        )
    }

    return (
        <>

            <Navbar />

            <main className='bg-[#0a0a0a] min-h-screen pt-24 md:pt-36'>
                <div className='max-w-7xl mx-auto px-6 md:px-8 lg:px-12'>

                    <Breadcrumb product={product}/>

                    <ProductHero product={product}/>

                    <FeatureHighlights />

                    <LifestyleBanner />

                    <Specifications product={product} />

                    <Applications />

                    <ReviewsSection product={product} />

                    <TrustSection />

                    <RelatedProducts category={product?.category ?? ''} currentProductId={product?.id ?? 0} />

                </div>
            </main>

            <Footer />
        </>
    )
}

export default ProductDetails