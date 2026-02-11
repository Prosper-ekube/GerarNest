type Product = {
    id: string
    name: string
    price: number
    image: string
    category: string
}

type ProductCardProps = {
    product: Product
}

const ProductCard = ({ product }: ProductCardProps) => {
    const formatPrice = (price: number) => {
        return `₦ ${price.toLocaleString('en-NG')}`
    }

    return (
        <div className='bg-[#1A1D24] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'>
            <div className='aspect-[4/3] overflow-hidden'>
                <img
                    alt={product.name}
                    className='h-full w-full object-cover'
                    src={product.image}
                />
            </div>
            <div className='flex flex-col gap-2 p-4'>
                <h3 className='font-medium text-[#EDEDED] text-base md:text-lg'>
                    {product.name}
                </h3>
                <p className='font-semibold text-[#6F4CCF] text-sm md:text-base'>
                    {formatPrice(product.price)}
                </p>
            </div>
        </div>
    )
}

export default ProductCard