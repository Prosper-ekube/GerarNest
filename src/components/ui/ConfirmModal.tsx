import type { ReactNode } from 'react'
import Button from './Button'

type ConfirmModalProps = {
    isOpen: boolean
    title: string
    message: string | ReactNode
    confirmText?: string
    cancelText?: string
    onConfirm: () => void
    onCancel: () => void
    variant?: 'danger' | 'default'
}

const ConfirmModal = ({
    isOpen,
    title,
    message,
    confirmText = 'Confirm',
    cancelText = 'Cancel',
    onConfirm,
    onCancel,
    variant = 'default'
}: ConfirmModalProps) => {
    if (!isOpen) return null

    return (
        <div className='bg-black/50 backdrop-blur-sm fixed inset-0 flex items-center justify-center px-4 z-50'>
            <div className='bg-[#1A1D24] border border-[#2A2D34] max-w-md rounded-lg shadow-xl w-full'>
                <div className='flex flex-col gap-4 p-6'>
                    <h3 className='font-semibold text-[#EDEDED] text-lg md:text-xl'>
                        {title}
                    </h3>
                    <div className='text-[#A8A8A8] text-sm md:text-base'>
                        {message}
                    </div>
                </div>
                <div className='border-t border-[#2A2D34] flex gap-3 justify-end p-6'>
                    <button
                        className='duration-200 font-medium px-6 py-3 rounded-md text-[#A8A8A8] text-sm md:text-base transition-colors hover:text-[#EDEDED]'
                        onClick={onCancel}
                        type='button'
                    >
                        {cancelText}
                    </button>
                    <Button
                        className={[
                            'max-w-none',
                            variant === 'danger' ? 'bg-red-600 hover:bg-red-700' : ''
                        ].join(' ')}
                        onClick={onConfirm}
                    >
                        {confirmText}
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ConfirmModal