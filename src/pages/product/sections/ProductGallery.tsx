import { useState } from 'react'
import type { ProductImage } from '../../../types/Product'

type Props = {
    mainImage: string
    images: ProductImage[]
    name: string
}

const ProductGallery: React.FC<Props> = ({ mainImage, images, name }) => {
    const allImages = [mainImage, ...images.map(img => img.image)]
    const [activeIndex, setActiveIndex] = useState(0)

    return (
        <div className='flex flex-col gap-4 w-full'>
            {/* Main */}
            <div className='aspect-square bg-[#1a1a1a] overflow-hidden rounded-2xl w-full'>
                <img
                    src={allImages[activeIndex]}
                    alt={name}
                    className='h-full object-contain w-full'
                />
            </div>

            {/* Thumbnails */}
            <div className='flex gap-3 overflow-x-auto pb-1'>
                {allImages.map((img, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`w-20 h-20 rounded-xl overflow-hidden ${activeIndex === index
                                ? 'border-2 border-[#6f4ccf]'
                                : 'opacity-60'
                            }`}
                    >
                        <img
                            src={img}
                            alt={name}
                            className='w-full h-full object-cover'
                        />
                    </button>
                ))}
            </div>
        </div>
    )
}

export default ProductGallery