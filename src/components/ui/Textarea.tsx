import type { TextareaHTMLAttributes } from 'react'

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
    label: string
}

const Textarea = ({ label, className = '', ...props }: TextareaProps) => {
    return (
        <div className='flex flex-col gap-2'>
            <label className='font-medium text-[#EDEDED] text-sm md:text-base'>
                {label}
            </label>
            <textarea
                className={`bg-[#1A1D24] border border-[#2A2D34] duration-200 focus:border-[#6F4CCF] focus:outline-none min-h-[160px] px-4 py-3 resize-none rounded-md text-[#EDEDED] text-sm md:text-base transition-colors placeholder:text-[#A8A8A8] ${className}`}
                {...props}
            />
        </div>
    )
}

export default Textarea