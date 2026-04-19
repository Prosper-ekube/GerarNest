import ProductActions from './ProductActions'
import ProductSpecs from './ProductSpecs'
import type { Product } from '../../../types/Product'

type Props = {
    product: Product
}

const ProductInfo: React.FC<Props> = ({ product }) => {
    return (
        <div className='flex flex-col gap-6 w-full'>
            <div className='flex flex-col gap-3'>
                <span className='font-medium text-[#888] text-[11px] tracking-[1.2px] uppercase'>
                    {product.category_display}
                </span>

                <h1 className='font-medium leading-[1.2] text-3xl text-white tracking-tight sm:text-4xl'>
                    {product.name}
                </h1>

                <p className='font-medium text-[#6f4ccf] text-2xl'>
                    ₦{product.price.toLocaleString()}
                </p>
            </div>

            <p className='leading-relaxed text-[#aaa] text-[15px]'>
                {product.description}
            </p>

            <ProductSpecs />
            <ProductActions />

            <p className='border-t border-[#2a2a2a] pt-5 text-[#555] text-[13px]'>
                Distributed in Nigeria exclusively by Gerar Smart Homes as an official Orvibo partner.
            </p>
        </div>
    )
}

export default ProductInfo