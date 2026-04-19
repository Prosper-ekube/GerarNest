type Props = {
    specs: string[]
}

const ProductSpecs: React.FC<Props> = ({ specs }) => {
    return (
        <div className='flex flex-col gap-3'>
            <h3 className='font-medium text-[#555] text-[11px] tracking-[1.2px] uppercase'>
                Key Specifications
            </h3>

            <ul className='flex flex-col gap-2.5'>
                {(specs || []).map((spec, index) => (
                    <li
                        key={index}
                        className='flex gap-3 items-start text-[#ccc] text-[14px]'
                    >
                        <span className='bg-[#6f4ccf] flex-shrink-0 mt-[6px] rounded-full h-1.5 w-1.5' />
                        {spec}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ProductSpecs