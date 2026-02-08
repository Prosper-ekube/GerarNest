import type { ReactNode } from 'react'

type ButtonProps = {
    children: ReactNode
    className?: string
    onClick?: () => void
}

const Button = ({ children, className = '', onClick }: ButtonProps) => {
    return (
        <button
            className={`bg-indigo-600 font-medium hover:bg-indigo-700 px-6 py-3 rounded-md text-white transition-colors ${className}`}
            onClick={onClick}
            type='button'
        >
            {children}
        </button>
    )
}

export default Button