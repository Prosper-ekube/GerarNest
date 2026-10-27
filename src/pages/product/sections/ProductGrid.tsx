import React from 'react'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
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

    const location = useLocation()

    const [selectedCategory, setSelectedCategory] =
        useState<CategoryValue>('all')

    const [currentPage, setCurrentPage] = useState(1)

    const [maxVisiblePages, setMaxVisiblePages] = useState(() =>
        window.innerWidth < 768 ? 2 : window.innerWidth < 1024 ? 3 : 8
    )

    const itemsPerPage = 6

    useEffect(() => {
        const updateVisiblePages = () => {
            if (window.innerWidth < 768) {
                setMaxVisiblePages(2)
            } else if (window.innerWidth < 1024) {
                setMaxVisiblePages(3)
            } else {
                setMaxVisiblePages(8)
            }
        }

        window.addEventListener('resize', updateVisiblePages)

        return () => window.removeEventListener('resize', updateVisiblePages)
    }, [])

    useEffect(() => {
        const hash = window.location.hash.replace('#', '') as CategoryValue

        if (categories.some(cat => cat.value === hash)) {
            setSelectedCategory(hash)
            setCurrentPage(1)
        }
    }, [location.hash])

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

    const visiblePages = (() => {
        if (totalPages <= maxVisiblePages + 1) {
            return Array.from({ length: totalPages }, (_, i) => i + 1)
        }

        if (currentPage <= maxVisiblePages) {
            return [
                ...Array.from(
                    { length: maxVisiblePages },
                    (_, i) => i + 1
                ),
                totalPages
            ]
        }

        const startPage = Math.min(
            currentPage - 1,
            totalPages - maxVisiblePages
        )

        return [
            ...Array.from(
                { length: maxVisiblePages },
                (_, i) => startPage + i
            ),
            totalPages
        ]
    })()

    const handleCategoryChange = (category: CategoryValue) => {
        setSelectedCategory(category)
        setCurrentPage(1)
        window.scrollTo({ top: 0, behavior: 'smooth' })

        // Update URL hash
        window.history.pushState(null, '', `#${category}`)
    }

    return (
        <section className='py-20 px-6 lg:px-8 bg-[#0a0a0a] overflow-hidden'>
            <div className='max-w-6xl mx-auto'>
                <div className='grid grid-cols-1 min-[744px]:grid-cols-[280px_minmax(0,1fr)] min-[1204px]:grid-cols-[280px_minmax(0,1fr)] gap-8'>
                    {/* Sidebar */}
                    <aside className='w-full space-y-6 min-[744px]:sticky min-[744px]:top-8 min-[744px]:self-start'>
                        <div className='border border-[#6f4ccf]/20 rounded-2xl overflow-hidden bg-[#1a1a2e]'>
                            <div className='p-4'>
                                <h3 className='font-bold text-base text-white'>
                                    Category
                                </h3>
                            </div>

                            <ul className='p-4 pt-0 space-y-3'>
                                {categories.map(cat => (
                                    <li key={cat.value}>
                                        <button
                                            onClick={() => {
                                                handleCategoryChange(cat.value)
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
                                {visiblePages.map((page, index) => (
                                    <React.Fragment key={page}>
                                        {index > 0 && page - visiblePages[index - 1] > 1 && (
                                            <span className='text-white/60'>...</span>
                                        )}

                                        <button
                                            onClick={() => setCurrentPage(page)}
                                            className={`w-10 h-10 rounded-lg font-medium transition-colors ${currentPage === page
                                                    ? 'bg-[#6f4ccf] text-white'
                                                    : 'text-white hover:bg-[#6f4ccf]/20 border border-[#6f4ccf]/20'
                                                }`}
                                        >
                                            {page}
                                        </button>
                                    </React.Fragment>
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