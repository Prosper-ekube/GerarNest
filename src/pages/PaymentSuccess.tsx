import { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { FaCheck } from 'react-icons/fa'

type Order = {
    order_id: number
    amount: number
    email: string
    status: string
}

const PaymentSuccess: React.FC = () => {
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const reference = searchParams.get('reference')

    const [order, setOrder] = useState<Order | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (!reference) return

        const verifyPayment = async () => {
            try {
                const res = await fetch(
                    `http://127.0.0.1:8000/api/payments/verify/?reference=${reference}`
                )

                const data = await res.json()
                console.log('VERIFY SUCCESS:', data)

                if (data.status !== 'failed') {
                    setOrder(data)
                }

            } catch (err) {
                console.error(err)
            } finally {
                setLoading(false)
            }
        }

        verifyPayment()
    }, [reference])

    return (
        <div className='min-h-screen bg-[#0a0a0a] flex items-center justify-center px-6'>
            <div className='max-w-2xl w-full text-center'>

                {/* Icon */}
                <div className='flex justify-center mb-8'>
                    <div className='w-24 h-24 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center'>
                        <FaCheck className='text-4xl text-white' />
                    </div>
                </div>

                {/* Title */}
                <h1 className='text-4xl font-bold text-white mb-4'>
                    Payment Successful
                </h1>

                <p className='text-[#a8a8a8] mb-10'>
                    Your order has been confirmed.
                </p>

                {/* Order Info */}
                <div className='bg-[#1a1a2e] p-6 rounded-xl border border-[#6f4ccf]/10 mb-8'>

                    {loading ? (
                        <p className='text-white'>Verifying payment...</p>
                    ) : (
                        <>
                            <div className='flex justify-between mb-3'>
                                <span className='text-[#a8a8a8]'>Order ID</span>
                                <span className='text-white font-semibold'>
                                    {order?.order_id}
                                </span>
                            </div>

                            <div className='flex justify-between mb-3'>
                                <span className='text-[#a8a8a8]'>Amount</span>
                                <span className='text-white font-semibold'>
                                    ₦{order?.amount}
                                </span>
                            </div>

                            <div className='flex justify-between'>
                                <span className='text-[#a8a8a8]'>Status</span>
                                <span className='text-green-400 font-semibold'>
                                    {order?.status}
                                </span>
                            </div>
                        </>
                    )}
                </div>

                {/* Actions */}
                <button
                    onClick={() => navigate('/')}
                    className='px-8 py-4 bg-[#6f4ccf] text-white rounded-full font-semibold'
                >
                    Back to Home
                </button>

            </div>
        </div>
    )
}

export default PaymentSuccess