import type { Product } from '../../../../../types/Product'
import { useNavigate } from 'react-router-dom'

type Props = {
    product: Product
}

const Breadcrumb = ({ product }: Props) => {
    const navigate = useNavigate()

    const handleCategoryClick = () => {
        navigate(`/product#${product.category}`)
    }

    return (
        <div className='mb-8 text-sm text-[#A8A8A8]'>
            <button
                onClick={() => navigate('/product')}
                className='duration-1000 transition-all hover:-translate-y-1 ease-in-out hover:text-white'
            >
                Products
            </button>

            <span className='mx-2'>/</span>

            <button
                onClick={handleCategoryClick}
                className='duration-1000 transition-all hover:-translate-y-1 ease-in-out hover:text-white'
            >
                {product.category_display}
            </button>

            <span className='mx-2'>/</span>

            <span className='text-white'>
                {product.name}
            </span>
        </div>
    )
}

export default Breadcrumb