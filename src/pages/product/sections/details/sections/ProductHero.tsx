import { useState } from 'react'
import ProductActions from '../../ProductActions'
import type { Product } from '../../../../../types/Product'

type Props = {
    product: Product
}

const ProductHero = ({ product }: Props) => {
    const [selectedImage, setSelectedImage] = useState(
        product.images?.[0]?.image || product.image
    )

    return (
        <section className='grid lg:grid-cols-2 gap-10 mb-24'>

            {/* Gallery */}
            <div>
                <div className='bg-[#0E1013] lg:p-4 rounded-md'>
                    <img
                        alt={product.name}
                        className='lg:h-[350px] mx-auto object-contain'
                        src={selectedImage}
                    />
                </div>

                {product.images?.length > 0 && (
                    <div className='grid grid-cols-4 gap-3 mt-4'>
                        {product.images.map((img) => (
                            <button
                                key={img.id}
                                onClick={() => setSelectedImage(img.image)}
                                className={`bg-[#0E1013] rounded border ${selectedImage === img.image
                                        ? 'border-[#6F4CCF]'
                                        : 'border-transparent'
                                    }`}
                            >
                                <img
                                    alt='thumb'
                                    className='object-contain'
                                    src={img.image}
                                />
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {/* Purchase Panel stays same */}
            <div className='lg:sticky lg:top-32 h-fit'>
                <span className='bg-[#6F4CCF]/10 text-[#6F4CCF] rounded-full px-3 py-1 text-xs'>
                    {product.category_display}
                </span>

                <h1 className='text-white text-4xl font-bold mt-4'>
                    {product.name}
                </h1>

                <p className='text-[#A8A8A8] text-sm mt-4 max-w-[500px] md:max-w-[704px]'>
                    {product.description}
                </p>

                <p className='text-[#6F4CCF] text-4xl font-bold mt-8'>
                    ₦{Number(product.price).toLocaleString()}
                </p>

                <ul className='space-y-3 mt-8 mb-10 text-white text-sm'>
                    {product.specs?.slice(0, 4).map((spec, index) => (
                        <li key={index}>✓ {spec}</li>
                    ))}
                </ul>
                <ProductActions product={product} />
            </div>

        </section>
    )
}

export default ProductHero