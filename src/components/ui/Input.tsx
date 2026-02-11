import type { InputHTMLAttributes } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    label: string
}

const Input = ({ label, className = '', ...props }: InputProps) => {
    return (
        <div className='flex flex-col gap-2'>
            <label className='font-medium text-[#EDEDED] text-sm md:text-base'>
                {label}
            </label>
            <input
                className={`bg-[#1A1D24] border border-[#2A2D34] duration-200 focus:border-[#6F4CCF] focus:outline-none px-4 py-3 rounded-md text-[#EDEDED] text-sm md:text-base transition-colors placeholder:text-[#A8A8A8] ${className}`}
                {...props}
            />
        </div>
    )
}

export default Input