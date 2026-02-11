import Navbar from '../../components/layout/Navbar'
import CategorySidebar from './sections/CategorySidebar'
import ProductCatalogue from './sections/ProductCatalogue'
import Footer from '../../components/layout/Footer'

const Product = () => {
    return (
        <>
            <Navbar />
            <main>
                <div className='bg-[#0F1115] min-h-screen pt-24 md:pt-36 px-4 md:px-12'>
                    <div className='flex gap-8 max-w-7xl mx-auto'>
                        <CategorySidebar />
                        <ProductCatalogue />
                    </div>
                </div>
            </main >
            <Footer />
        </>
    )
}

export default Product