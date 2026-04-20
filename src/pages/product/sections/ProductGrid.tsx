import { useState } from 'react'
import useProducts from '../../../hooks/useProducts'
import ProductSection from '../../../components/ui/ProductSection'

type CategoryValue =
    | 'all'
    | 'smart_panels'
    | 'smart_lighting'
    | 'smart_switches'
    | 'home_security'

type ProductGridProps = {
    searchQuery: string
}

const categories: { name: string; value: CategoryValue }[] = [
    { name: 'All Products', value: 'all' },
    { name: 'Smart Central Control Panels', value: 'smart_panels' },
    { name: 'Smart Lighting', value: 'smart_lighting' },
    { name: 'Smart Switches', value: 'smart_switches' },
    { name: 'Home & Security Sensors', value: 'home_security' }
]

const ProductGrid: React.FC<ProductGridProps> = ({ searchQuery }) => {
    const { products, loading } = useProducts()

    const [selectedCategory, setSelectedCategory] =
        useState<CategoryValue>('all')

    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 6

    if (loading) return <p className='text-white'>Loading...</p>

    const filteredProducts = products.filter(product => {
        const matchesCategory =
            selectedCategory === 'all' || product.category === selectedCategory

        const matchesSearch =
            product.name.toLowerCase().includes(searchQuery.toLowerCase())

        return matchesCategory && matchesSearch
    })

    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage)

    const startIndex = (currentPage - 1) * itemsPerPage
    const paginatedProducts = filteredProducts.slice(
        startIndex,
        startIndex + itemsPerPage
    )

    return (
        <section className='py-20 px-6 lg:px-8 bg-[#0a0a0a] overflow-hidden'>
            <div className='max-w-6xl mx-auto'>
                <div className='grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8'>

                    {/* Sidebar */}
                    <aside className='w-full space-y-6'>
                        <div className='border border-[#6f4ccf]/20 rounded-2xl overflow-hidden bg-[#1a1a2e]'>
                            <div className='p-4'>
                                <h3 className='font-bold text-white'>Category</h3>
                            </div>

                            <ul className='p-4 pt-0 space-y-3'>
                                {categories.map(cat => (
                                    <li key={cat.value}>
                                        <button
                                            onClick={() => {
                                                setSelectedCategory(cat.value)
                                                setCurrentPage(1)
                                            }}
                                            className={`w-full flex items-center gap-3 p-2 rounded-lg transition-colors ${selectedCategory === cat.value
                                                    ? 'bg-[#6f4ccf]/20 text-[#6f4ccf]'
                                                    : 'hover:bg-[#6f4ccf]/10 text-white'
                                                }`}
                                        >
                                            <span className='flex-1 text-left font-medium text-sm'>
                                                {cat.name}
                                            </span>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </aside>

                    {/* Product Grid */}
                    <div>
                        <ProductSection
                            products={paginatedProducts}
                            cols={3}
                        />

                        {/* Pagination */}
                        <div className='flex items-center justify-between mt-12 overflow-x-auto gap-2'>
                            <button
                                disabled={currentPage === 1}
                                onClick={() =>
                                    setCurrentPage(prev =>
                                        Math.max(prev - 1, 1)
                                    )
                                }
                                className='flex items-center gap-2 px-6 py-3 text-white font-medium hover:text-[#6f4ccf] transition-colors disabled:opacity-40'
                            >
                                ← Previous
                            </button>

                            <div className='flex items-center gap-2'>
                                {Array.from(
                                    { length: totalPages },
                                    (_, i) => i + 1
                                ).map(page => (
                                    <button
                                        key={page}
                                        onClick={() => setCurrentPage(page)}
                                        className={`w-10 h-10 rounded-lg font-medium transition-colors ${currentPage === page
                                                ? 'bg-[#6f4ccf] text-white'
                                                : 'text-white hover:bg-[#6f4ccf]/20 border border-[#6f4ccf]/20'
                                            }`}
                                    >
                                        {page}
                                    </button>
                                ))}
                            </div>

                            <button
                                disabled={currentPage === totalPages}
                                onClick={() =>
                                    setCurrentPage(prev =>
                                        Math.min(prev + 1, totalPages)
                                    )
                                }
                                className='flex items-center gap-2 px-6 py-3 text-white font-medium hover:text-[#6f4ccf] transition-colors disabled:opacity-40'
                            >
                                Next →
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default ProductGrid