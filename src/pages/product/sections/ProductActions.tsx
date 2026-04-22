import type { Product } from "../../../types/Product"

type ActionButton = {
    label: string
    onClick: () => void
    variant: 'primary' | 'secondary'
}

const ProductActions = ({ product }: { product: Product }) => {
    const handleAddToCart = () => {
        console.log('Added to cart')
    }

    const handleBuyNow = async () => {
        try {
            console.log('CHECKOUT START')

            // 1. Create order
            const orderRes = await fetch('http://127.0.0.1:8000/api/orders/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    full_name: 'Prosper',
                    email: 'test@mail.com',
                    items: [
                        {
                            product: product.id,
                            quantity: 1
                        }
                    ]
                })
            })

            const orderData = await orderRes.json()
            console.log('ORDER CREATED:', orderData)
        
            const orderId = orderData.order_id

            if (!orderId) {
                throw new Error('Order ID missing from response')
            }

            // 2. Initialize payment
            const payRes = await fetch('http://127.0.0.1:8000/api/payments/init/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    order_id: orderId
                })
            })

            console.log('PAYMENT REQUEST SENT')

            const payData = await payRes.json()
            console.log('PAYMENT RESPONSE:', payData)

            if (payData.authorization_url) {
                window.location.href = payData.authorization_url
            } else {
                throw new Error('No authorization URL returned')
            }

        } catch (error) {
            console.error('CHECKOUT ERROR:', error)
        }
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