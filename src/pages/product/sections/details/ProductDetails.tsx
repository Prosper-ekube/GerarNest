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
import ProductDescription from './sections/ProductDescription'
import ReviewsSection from './sections/ReviewsSection'

const ProductDetails = ({ product }: { product: Product }) => {

    return (
        <>
            <Navbar />

            <main className='bg-[#0a0a0a] min-h-screen pt-24 md:pt-36'>
                <div className='max-w-7xl mx-auto px-6 md:px-8 lg:px-12'>

                    <Breadcrumb />

                    <ProductHero />

                    <FeatureHighlights />

                    <LifestyleBanner />

                    <Specifications />

                    <ProductDescription />

                    <Applications />

                    <ReviewsSection />

                    <TrustSection />

                    <RelatedProducts category={product?.category ?? ''} currentProductId={product?.id ?? 0} />

                </div>
            </main>

            <Footer />
        </>
    )
}

export default ProductDetails