import type { SelectHTMLAttributes } from 'react'

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
    label: string
    options: { value: string; label: string }[]
}

const Select = ({ label, options, className = '', ...props }: SelectProps) => {
    return (
        <div className='flex flex-col gap-2'>
            <label className='font-medium text-[#EDEDED] text-sm md:text-base'>
                {label}
            </label>
            <select
                className={`bg-[#1A1D24] border border-[#2A2D34] duration-200 focus:border-[#6F4CCF] focus:outline-none px-4 py-3 rounded-md text-[#EDEDED] text-sm md:text-base transition-colors ${className}`}
                {...props}
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default Select