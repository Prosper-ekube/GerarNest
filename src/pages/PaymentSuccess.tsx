import { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { FaCheck } from 'react-icons/fa'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

type Order = {
    order_id: number
    amount: number
    email: string
    status: string
}

const PaymentSuccess: React.FC = () => {
    const navigate = useNavigate()
    const { clearCart } = useCart()
    const [searchParams] = useSearchParams()
    const reference = searchParams.get('reference')

    const [order, setOrder] = useState<Order | null>(null)
    const [loading, setLoading] = useState(true)

    const currentDate = new Date().toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })

    useEffect(() => {
        if (!reference) return

        const verifyPayment = async () => {
            try {
                const res = await fetch(
                    `http://127.0.0.1:8000/api/payments/verify/?reference=${reference}`
                )

                const data = await res.json()
                console.log('VERIFY SUCCESS:', data)

                if (data.status === 'paid') {
                    setOrder(data)

                    if (localStorage.getItem('cart')) {
                        clearCart()
                    }
                } else {
                    navigate('/payment-failed')
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
        <div className='min-h-screen'>
            <Navbar />
            <div className='bg-[#1a1a1a] flex items-center justify-center [@media(min-height:1024px)_and_(min-width:768px)]:min-h-screen p-6 pt-32 min-[1280px]:pt-40 pb-12'>
                <div className='bg-[#0a0a0a] max-w-md max-h-[580px] w-full rounded-md text-center pb-10 pt-12 px-6'>

                    {/* Icon */}
                    <div className='flex justify-center mb-4'>
                        <div className='w-14 h-14 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center'>
                            <FaCheck className='text-3xl text-white' />
                        </div>
                    </div>

                    {/* Title */}
                    <h1 className='text-2xl font-bold text-white mb-3'>
                        Payment Successful
                    </h1>

                    <p className='text-[#a8a8a8] mb-8 text-sm'>
                        Thank you for your purchase. Your order for premium Orvibo smart home products has been successfully processed.
                    </p>

                    {/* Order Info */}
                    <div className='bg-[#1a1a1a] p-6 rounded-xl mb-8 text-sm'>

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
                                    <span className='text-[#a8a8a8]'>Date</span>
                                    <span className='text-white font-semibold'>
                                        {currentDate}
                                    </span>
                                </div>

                                <div className='flex justify-between mb-8'>
                                    <span className='text-[#a8a8a8]'>Status</span>
                                    <span className='text-green-400 font-semibold'>
                                        {order?.status}
                                    </span>
                                </div>

                                <div className='flex justify-between'>
                                    <span className='text-[#a8a8a8]'>Amount</span>
                                    <span className='text-white font-semibold'>
                                            ₦{order?.amount?.toLocaleString()}
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
            <Footer />
        </div>
    )
}

export default PaymentSuccess