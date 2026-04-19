import React from 'react'
import useProducts from '../../../hooks/useProducts'
import ProductSection from '../../../components/ui/ProductSection'

const Products: React.FC = () => {
    const { products, loading } = useProducts()

    if (loading) return <p>Loading...</p>

    const featuredProducts = products.filter(p => p.featured)

    return (
        <section className='bg-[#0a0a0a] pb-20 pt-10 lg:pt-20 px-6 lg:px-8'>
            <div className='mx-auto max-w-6xl'>
                <div className='mb-16 text-center'>
                    <span className='text-[#6f4ccf] text-sm font-semibold tracking-wider uppercase'>Our Products</span>
                    <h2 className='mt-4 mb-4 text-4xl lg:text-5xl font-bold text-white'>Featured Smart <span className='text-[#6f4ccf]'>Devices</span></h2>
                    <p className='mx-auto max-w-2xl text-[#a8a8a8] text-lg'>Discover our range of cutting-edge smart home devices designed to transform your living space</p>
                </div>
                <ProductSection products={featuredProducts} cols={3} />
            </div>
        </section>
    )
}

export default Products