import { useState } from 'react'

import central_scene_panel from '../../../../../assets/images/central_scene_panel.png'
import glass_touch_console from '../../../../../assets/images/glass_touch_console.png'
import smart_control_panel_s1 from '../../../../../assets/images/smart_control_panel_s1.png'
import smart_switch_1 from '../../../../../assets/images/smart_switch_1.png'

const ProductHero = () => {
    const images = [
        central_scene_panel,
        glass_touch_console,
        smart_control_panel_s1,
        smart_switch_1
    ]

    const [selectedImage, setSelectedImage] = useState(images[0])

    return (
        <section className='grid lg:grid-cols-2 gap-10 mb-24'>

            {/* Gallery */}

            <div>
                <div className='bg-[#0E1013] lg:p-4'>
                    <img
                        alt='product'
                        className='lg:h-[350px] mx-auto rounded-xl object-contain'
                        src={selectedImage}
                    />
                </div>

                <div className='grid grid-cols-4 gap-3 mt-4 lg:mt-20'>
                    {images.map(image => (
                        <button
                            className={`bg-[#0E1013] lg:p-2 rounded-xl lg:border ${selectedImage === image
                                    ? 'border-[#6F4CCF]'
                                    : 'lg:border-transparent'
                                }`}
                            key={image}
                            onClick={() => setSelectedImage(image)}
                        >
                            <img
                                alt='thumb'
                                className='lg:h-auto mx-auto rounded-md object-contain'
                                src={image}
                            />
                        </button>
                    ))}
                </div>
            </div>

            {/* Purchase Panel */}

            <div className='lg:sticky lg:top-32 h-fit'>

                <span className='bg-[#6F4CCF]/10 text-[#6F4CCF] rounded-full px-3 py-1 text-xs'>
                    Smart Control Panel
                </span>

                <h1 className='text-white text-3xl font-bold mt-4'>
                    Orvibo Central Scene Panel
                </h1>

                <p className='text-[#A8A8A8] mt-4 max-w-[500px]'>
                    Premium smart home control panel designed for seamless
                    automation, monitoring and control.
                </p>

                <p className='text-[#6F4CCF] text-4xl font-bold mt-8'>
                    ₦1,150,000
                </p>

                <ul className='space-y-3 mt-8 text-white'>
                    <li>✓ Smart Scene Control</li>
                    <li>✓ Premium Glass Finish</li>
                    <li>✓ Energy Efficient</li>
                    <li>✓ Easy Installation</li>
                </ul>

                <div className='flex gap-4 mt-8'>
                    <button className='w-14 h-14 rounded-full bg-[#0E1013] text-white'>
                        -
                    </button>

                    <div className='w-20 h-14 rounded-full bg-[#0E1013] flex items-center justify-center text-white'>
                        1
                    </div>

                    <button className='w-14 h-14 rounded-full bg-[#0E1013] text-white'>
                        +
                    </button>
                </div>

                <div className='flex flex-col md:flex-row gap-3 mt-8'>
                    <button className='bg-[#6F4CCF] rounded-full py-4 text-white font-semibold w-full'>
                        Add to Cart
                    </button>

                    <button className='border border-[#6F4CCF] text-[#6F4CCF] rounded-full py-4 font-semibold w-full'>
                        Buy Now
                    </button>
                </div>

            </div>

        </section>
    )
}

export default ProductHero