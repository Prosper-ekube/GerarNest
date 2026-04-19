import Footer from '../../components/layout/Footer'
import Navbar from '../../components/layout/Navbar'
import ContactForm from './sections/ContactForm'
import ContactInfo from './sections/ContactInfo'
import TestimonialCard from './sections/TestimonialCard'

const Contact = () => {
    return (
        <>
            <Navbar />
            <main>
                <div className='bg-[#0a0a0a] min-h-screen pt-24 md:pt-36 px-4 md:px-12 pb-12'>
                    <div className='flex flex-col md:flex-row gap-14 lg:gap-12 lg:justify-between max-w-5xl mx-auto'>
                        <div className='flex flex-col md:w-1/2'>
                            <ContactForm />
                        </div>
                        <div className='md:w-1/2 space-y-6'>
                            <TestimonialCard />
                            <ContactInfo />
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Contact