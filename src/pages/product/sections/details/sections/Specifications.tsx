import type { Product } from '../../../../../types/Product'

type Props = {
    product: Product
}

const Specifications = ({ product }: Props) => {

    return (
        <section className='mb-24'>
            <h2 className='text-white text-4xl font-bold mb-8'>
                Specifications
            </h2>

            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {product.specs.map((spec, index) => {
                    const [title, value] = spec.split(':')

                    return (
                        <div
                            className='bg-[#0E1013] rounded-2xl p-6'
                            key={index}
                        >
                            <p className='text-[#A8A8A8] text-xl'>{title}</p>

                            <p className='text-white text-sm font-semibold mt-2'>
                                {value}
                            </p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Specifications