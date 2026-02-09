import type { ReactNode } from 'react'

type ButtonProps = {
    children: ReactNode
    className?: string
    onClick?: () => void
}

const Button = ({ children, className = '', onClick }: ButtonProps) => {
    return (
        <button
            className={`bg-[#6F4CCF] font-medium hover:bg-indigo-700 max-w-[300px] md:max-w-[420px] mx-auto lg:mx-0 px-6 py-3 rounded-md text-black text-xs md:text-lg transition-colors ${className}`}
            onClick={onClick}
            type='button'
        >
            {children}
        </button>
    )
}

export default Button