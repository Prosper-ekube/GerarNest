import { useEffect, useRef, useState } from 'react'
import { HiSearch } from 'react-icons/hi'
import AdminLayout from '../../components/layout/AdminLayout'
import Button from '../../components/ui/Button'
import ProductTable from './sections/ProductTable'
import ProductForm from './sections/ProductForm'

export type AdminProduct = {
    id: string
    name: string
    sku: string
    category: string
    price: number
    image: string
}

const mockProducts: AdminProduct[] = [
    {
        id: '1',
        name: 'MixPad S All-in-One Panel',
        sku: 'ORV-MXP-S',
        category: 'Smart Central Control Panels',
        price: 345000,
        image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=400&h=300&fit=crop'
    },
    {
        id: '2',
        name: 'Smart Switch 50 Gold Series',
        sku: 'ORV-SW-G3',
        category: 'Smart Switches',
        price: 45000,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop'
    },
    {
        id: '3',
        name: 'Smart Door Lock C1',
        sku: 'ORV-SDL-C1',
        category: 'Home Security & Sensors',
        price: 180000,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd65?w=400&h=300&fit=crop'
    },
    {
        id: '4',
        name: 'ZigBee Smart Hub',
        sku: 'ORV-HUB-Z1',
        category: 'Connectivity',
        price: 25000,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd66?w=400&h=300&fit=crop'
    }
]

const AdminProducts = () => {
    const [products, setProducts] = useState<AdminProduct[]>(mockProducts)
    const [searchQuery, setSearchQuery] = useState('')
    const [editingProduct, setEditingProduct] = useState<AdminProduct | null>(null)
    const formRef = useRef<HTMLDivElement>(null)

    const filteredProducts = products.filter(
        (product) =>
            product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.sku.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.category.toLowerCase().includes(searchQuery.toLowerCase())
    )

    const handleAddProduct = (productData: Omit<AdminProduct, 'id'>) => {
        console.log('API Call: POST /api/products', productData)
        const newProduct: AdminProduct = {
            ...productData,
            id: Date.now().toString()
        }
        setProducts([...products, newProduct])
        setEditingProduct(null)
    }

    const handleUpdateProduct = (productData: Omit<AdminProduct, 'id'>) => {
        if (!editingProduct) return
        console.log('API Call: PUT /api/products/' + editingProduct.id, productData)
        setProducts(
            products.map((p) =>
                p.id === editingProduct.id ? { ...productData, id: p.id } : p
            )
        )
        setEditingProduct(null)
    }

    const handleEditProduct = (product: AdminProduct) => {
        setEditingProduct(product)
        formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    const handleDeleteProduct = (id: string) => {
        console.log('API Call: DELETE /api/products/' + id)
        setProducts(products.filter((p) => p.id !== id))
    }

    const handleCancelEdit = () => {
        setEditingProduct(null)
    }

    useEffect(() => {
        if (editingProduct) {
            formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }, [editingProduct])

    return (
        <AdminLayout>
            <div className='px-6 py-8 md:px-12 md:py-12'>
                <div className='flex flex-col gap-8 max-w-7xl mx-auto'>
                    <div className='flex flex-col gap-6 md:flex-row md:items-center md:justify-between'>
                        <div className='flex flex-col gap-2'>
                            <h2 className='font-bold text-[#EDEDED] text-2xl md:text-3xl'>
                                Products
                            </h2>
                            <p className='text-[#A8A8A8] text-sm md:text-base'>
                                Manage Orvibo smart home products in your Nigerian catalogue.
                            </p>
                        </div>
                        <div className='flex flex-col gap-4 sm:flex-row sm:items-center'>
                            <div className='relative'>
                                <HiSearch className='absolute left-3 text-[#A8A8A8] top-1/2 -translate-y-1/2' size={20} />
                                <input
                                    className='bg-[#1A1D24] border border-[#2A2D34] duration-200 focus:border-[#6F4CCF] focus:outline-none pl-10 pr-4 py-3 rounded-md text-[#EDEDED] text-sm transition-colors w-full sm:w-64 placeholder:text-[#A8A8A8]'
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder='Search products...'
                                    type='text'
                                    value={searchQuery}
                                />
                            </div>
                            <Button
                                className='max-w-none'
                                onClick={() => {
                                    setEditingProduct(null)
                                    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                                }}
                            >
                                Add Product
                            </Button>
                        </div>
                    </div>

                    <ProductTable
                        onDelete={handleDeleteProduct}
                        onEdit={handleEditProduct}
                        products={filteredProducts}
                    />

                    <div ref={formRef}>
                        <ProductForm
                            editingProduct={editingProduct}
                            onCancel={handleCancelEdit}
                            onSubmit={editingProduct ? handleUpdateProduct : handleAddProduct}
                        />
                    </div>
                </div>
            </div>
        </AdminLayout>
    )
}

export default AdminProducts