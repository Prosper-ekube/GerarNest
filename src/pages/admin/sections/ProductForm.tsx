import { useEffect, useState } from 'react'
import Button from '../../../components/ui/Button'
import Input from '../../../components/ui/Input'
import Select from '../../../components/ui/Select'
import type { AdminProduct } from '../AdminProducts'

type ProductFormProps = {
    editingProduct: AdminProduct | null
    onSubmit: (product: Omit<AdminProduct, 'id'>) => void
    onCancel: () => void
}

const categoryOptions = [
    { value: '', label: 'Select category' },
    { value: 'Smart Central Control Panels', label: 'Smart Central Control Panels' },
    { value: 'Smart Switches', label: 'Smart Switches' },
    { value: 'Smart Lighting', label: 'Smart Lighting' },
    { value: 'Home Security & Sensors', label: 'Home Security & Sensors' },
    { value: 'Smart Shading', label: 'Smart Shading' },
    { value: 'Smart HVAC', label: 'Smart HVAC' },
    { value: 'Home Entertainment', label: 'Home Entertainment' },
    { value: 'Connectivity', label: 'Connectivity' }
]

const ProductForm = ({ editingProduct, onSubmit, onCancel }: ProductFormProps) => {
    const [formData, setFormData] = useState({
        name: '',
        sku: '',
        category: '',
        price: '',
        image: ''
    })
    const [imagePreview, setImagePreview] = useState<string>('')

    useEffect(() => {
        if (editingProduct) {
            setFormData({
                name: editingProduct.name,
                sku: editingProduct.sku,
                category: editingProduct.category,
                price: editingProduct.price.toString(),
                image: editingProduct.image
            })
            setImagePreview(editingProduct.image)
        } else {
            setFormData({
                name: '',
                sku: '',
                category: '',
                price: '',
                image: ''
            })
            setImagePreview('')
        }
    }, [editingProduct])

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                const result = reader.result as string
                setImagePreview(result)
                setFormData({ ...formData, image: result })
            }
            reader.readAsDataURL(file)
        }
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        onSubmit({
            name: formData.name,
            sku: formData.sku,
            category: formData.category,
            price: parseFloat(formData.price),
            image: formData.image
        })
        setFormData({
            name: '',
            sku: '',
            category: '',
            price: '',
            image: ''
        })
        setImagePreview('')
    }

    return (
        <div className='bg-[#1A1D24] border border-[#2A2D34] p-6 md:p-8 rounded-lg'>
            <div className='flex flex-col gap-3 mb-6'>
                <h3 className='font-semibold text-[#EDEDED] text-lg md:text-xl'>
                    {editingProduct ? 'Edit Product' : 'Add / Edit Product'}
                </h3>
                <p className='text-[#A8A8A8] text-sm'>
                    Use this form to manage Orvibo products in the Nigerian market.
                </p>
            </div>

            <form className='flex flex-col gap-6' onSubmit={handleSubmit}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <Input
                        label='Product Name'
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder='Enter product name'
                        required
                        type='text'
                        value={formData.name}
                    />

                    <Input
                        label='SKU'
                        onChange={(e) => setFormData({ ...formData, sku: e.target.value })}
                        placeholder='Enter SKU code'
                        required
                        type='text'
                        value={formData.sku}
                    />

                    <Select
                        label='Category'
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        options={categoryOptions}
                        required
                        value={formData.category}
                    />

                    <Input
                        label='Price (NGN)'
                        onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                        placeholder='Enter price'
                        required
                        type='number'
                        value={formData.price}
                    />
                </div>

                <div className='flex flex-col gap-2'>
                    <label className='font-medium text-[#EDEDED] text-sm md:text-base'>
                        Product Image
                    </label>
                    <div className='flex flex-col gap-4 md:flex-row md:items-start'>
                        <input
                            accept='image/*'
                            className='bg-[#1A1D24] border border-[#2A2D34] duration-200 file:bg-[#6F4CCF] file:border-0 file:font-medium file:mr-4 file:px-4 file:py-2 file:rounded file:text-black file:text-sm focus:border-[#6F4CCF] focus:outline-none px-4 py-3 rounded-md text-[#EDEDED] text-sm md:text-base transition-colors'
                            onChange={handleImageChange}
                            type='file'
                        />
                        {imagePreview && (
                            <div className='bg-[#0F1115] border border-[#2A2D34] h-32 overflow-hidden rounded-lg w-32'>
                                <img
                                    alt='Product preview'
                                    className='h-full object-cover w-full'
                                    src={imagePreview}
                                />
                            </div>
                        )}
                        {!imagePreview && (
                            <div className='bg-[#0F1115] border border-[#2A2D34] flex h-32 items-center justify-center rounded-lg w-32'>
                                <span className='text-[#A8A8A8] text-xs'>
                                    Orvibo-style product imagery
                                </span>
                            </div>
                        )}
                    </div>
                </div>

                <div className='flex flex-col gap-4 justify-end sm:flex-row'>
                    {editingProduct && (
                        <button
                            className='duration-200 font-medium px-6 py-3 rounded-md text-[#A8A8A8] text-sm md:text-base transition-colors hover:text-[#EDEDED]'
                            onClick={onCancel}
                            type='button'
                        >
                            Cancel
                        </button>
                    )}
                    <Button className='max-w-none' type='submit'>
                        {editingProduct ? 'Update Product' : 'Save Product'}
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default ProductForm