import type { Product } from '../../../../../types/Product'

type Props = {
    product: Product
}

const Breadcrumb = ({ product }: Props) => {
    return (
        <div className='mb-8 text-sm text-[#A8A8A8]'>
            Products / {product.category_display} /
            <span className='text-white'> {product.name}</span>
        </div>
    )
}

export default Breadcrumb