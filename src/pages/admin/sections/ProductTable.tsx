import { useState } from 'react'
import ConfirmModal from '../../../components/ui/ConfirmModal'
import type { AdminProduct } from '../AdminProducts'

type ProductTableProps = {
    products: AdminProduct[]
    onEdit: (product: AdminProduct) => void
    onDelete: (id: string) => void
}

const ProductTable = ({ products, onEdit, onDelete }: ProductTableProps) => {
    const [deleteModal, setDeleteModal] = useState<{
        isOpen: boolean
        productId: string
        productName: string
    }>({
        isOpen: false,
        productId: '',
        productName: ''
    })

    const formatPrice = (price: number) => {
        return price.toLocaleString('en-NG', { minimumFractionDigits: 3 })
    }

    const handleDeleteClick = (product: AdminProduct) => {
        setDeleteModal({
            isOpen: true,
            productId: product.id,
            productName: product.name
        })
    }

    const handleConfirmDelete = () => {
        onDelete(deleteModal.productId)
        setDeleteModal({
            isOpen: false,
            productId: '',
            productName: ''
        })
    }

    const handleCancelDelete = () => {
        setDeleteModal({
            isOpen: false,
            productId: '',
            productName: ''
        })
    }

    return (
        <>
            <div className='bg-[#1A1D24] border border-[#2A2D34] rounded-lg overflow-hidden'>
                <div className='flex flex-col gap-3 p-6'>
                    <h3 className='font-semibold text-[#EDEDED] text-lg md:text-xl'>
                        Orvibo Product Catalogue
                    </h3>
                    <p className='text-[#A8A8A8] text-sm'>
                        Internal view for Gerar Smart Home Admin only.
                    </p>
                </div>

                <div className='overflow-x-auto'>
                    <table className='w-full'>
                        <thead className='bg-[#0F1115] border-t border-[#2A2D34]'>
                            <tr>
                                <th className='font-medium px-6 py-4 text-[#A8A8A8] text-left text-xs md:text-sm'>
                                    Product
                                </th>
                                <th className='font-medium px-6 py-4 text-[#A8A8A8] text-left text-xs md:text-sm'>
                                    Category
                                </th>
                                <th className='font-medium px-6 py-4 text-[#A8A8A8] text-left text-xs md:text-sm'>
                                    Price (NGN)
                                </th>
                                <th className='font-medium px-6 py-4 text-[#A8A8A8] text-left text-xs md:text-sm'>
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className='divide-y divide-[#2A2D34]'>
                            {products.map((product) => (
                                <tr key={product.id} className='hover:bg-[#1A1D24]/50 transition-colors'>
                                    <td className='px-6 py-4'>
                                        <div className='flex gap-3 items-center'>
                                            <img
                                                alt={product.name}
                                                className='bg-[#0F1115] h-12 object-cover rounded w-12'
                                                src={product.image}
                                            />
                                            <div className='flex flex-col gap-1'>
                                                <span className='font-medium text-[#EDEDED] text-sm md:text-base'>
                                                    {product.name}
                                                </span>
                                                <span className='text-[#A8A8A8] text-xs'>
                                                    SKU: {product.sku}
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className='px-6 py-4 text-[#EDEDED] text-sm md:text-base'>
                                        {product.category}
                                    </td>
                                    <td className='px-6 py-4 font-medium text-[#EDEDED] text-sm md:text-base'>
                                        {formatPrice(product.price)}
                                    </td>
                                    <td className='px-6 py-4'>
                                        <div className='flex gap-4 items-center'>
                                            <button
                                                className='duration-200 font-medium text-[#6F4CCF] text-sm transition-colors hover:text-[#8B6DE8]'
                                                onClick={() => onEdit(product)}
                                                type='button'
                                            >
                                                Edit
                                            </button>
                                            <button
                                                className='duration-200 font-medium text-red-500 text-sm transition-colors hover:text-red-400'
                                                onClick={() => handleDeleteClick(product)}
                                                type='button'
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <ConfirmModal
                cancelText='Cancel'
                confirmText='Delete Product'
                isOpen={deleteModal.isOpen}
                message={
                    <>
                        <p>Are you sure you want to delete <span className='font-semibold text-[#EDEDED]'>{deleteModal.productName}</span>?</p>
                        <p className='mt-2'>This action cannot be undone.</p>
                    </>
                }
                onCancel={handleCancelDelete}
                onConfirm={handleConfirmDelete}
                title='Delete Product'
                variant='danger'
            />
        </>
    )
}

export default ProductTable