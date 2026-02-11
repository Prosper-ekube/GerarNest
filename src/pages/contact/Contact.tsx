import Footer from '../../components/layout/Footer'
import Navbar from '../../components/layout/Navbar'
import ContactForm from './sections/ContactForm'
import ContactInfo from './sections/ContactInfo'

const Contact = () => {
    return (
        <>
            <Navbar />
            <main>
                <div className='bg-[#0F1115] min-h-screen pt-24 md:pt-36 px-4 md:px-12 pb-12'>
                    <div className='max-w-7xl mx-auto'>
                        <div className='flex flex-col gap-3 md:gap-4 mb-8 md:mb-12'>
                            <p className='font-medium text-[#6F4CCF] text-xs md:text-sm tracking-wider uppercase'>
                                Contact Gerar Smart Homes
                            </p>
                            <h1 className='font-bold text-[#EDEDED] text-2xl md:text-4xl lg:text-5xl max-w-2xl'>
                                Talk to an Orvibo smart home specialist.
                            </h1>
                            <p className='text-[#A8A8A8] text-sm md:text-base lg:text-lg max-w-2xl'>
                                Share your project details and our Nigerian Orvibo partner team will help you design, specify, and deploy the right smart home solution for your residence or development.
                            </p>
                        </div>

                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12'>
                            <ContactForm />
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