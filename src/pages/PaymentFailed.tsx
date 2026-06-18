import { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { RiCloseLine } from 'react-icons/ri'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

type Order = {
    order_id: number
    amount: number
    status: string
}

const PaymentFailed: React.FC = () => {
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const reference = searchParams.get('reference')

    const [order, setOrder] = useState<Order | null>(null)

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
                console.log('VERIFY FAILED:', data)

                if (data.status === 'failed') {
                    setOrder(data)
                }

            } catch (err) {
                console.error(err)
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
                        <div className='w-14 h-14 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center'>
                            <RiCloseLine className='text-3xl text-white' />
                        </div>
                    </div>

                    {/* Title */}
                    <h1 className='text-2xl font-bold text-white mb-3'>
                        Payment Failed
                    </h1>

                    <p className='text-[#a8a8a8] mb-8 text-sm'>
                        We couldn't process your payment. Please try again or try a different payment method.,
                    </p>

                    {/* Info */}
                    <div className='bg-[#1a1a1a] p-6 rounded-xl mb-8 text-sm'>

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
                            <span className='text-red-400 font-semibold'>
                                Failed
                            </span>
                        </div>

                        <div className='flex justify-between'>
                            <span className='text-[#a8a8a8]'>Amount Due</span>
                            <span className='text-red-400 font-semibold'>
                                ₦{order?.amount ?? '0'}
                            </span>
                        </div>                        

                    </div>

                    {/* Actions */}
                    <button
                        onClick={() => navigate('/')}
                        className='px-8 py-4 bg-[#6f4ccf] text-white rounded-full font-semibold text-sm'
                    >
                        Try Payment Again
                    </button>

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default PaymentFailed