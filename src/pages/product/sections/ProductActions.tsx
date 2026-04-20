type ActionButton = {
    label: string
    onClick: () => void
    variant: 'primary' | 'secondary'
}

const ProductActions = () => {
    const handleAddToCart = () => {
        console.log('Added to cart')
    }

    const handleBuyNow = () => {
        console.log('Buy now')
    }

    const BUTTONS: ActionButton[] = [
        {
            label: 'Add to Cart',
            onClick: handleAddToCart,
            variant: 'primary'
        },
        {
            label: 'Buy Now',
            onClick: handleBuyNow,
            variant: 'secondary'
        }
    ]

    return (
        <div className='flex flex-wrap gap-3'>
            {BUTTONS.map(button => (
                <button
                    key={button.label}
                    onClick={button.onClick}
                    className={`active:scale-[0.98] cursor-pointer font-medium px-7 py-3.5 rounded-lg text-[14px] transition-all duration-200 ${button.variant === 'primary'
                            ? 'bg-[#6f4ccf] hover:bg-[#5e3dbf] text-white'
                            : 'bg-transparent border border-[#6f4ccf]/40 hover:border-[#6f4ccf] text-white'
                        }`}
                >
                    {button.label}
                </button>
            ))}
        </div>
    )
}

export default ProductActions