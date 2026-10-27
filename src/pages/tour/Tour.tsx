import Footer from '../../components/layout/Footer'
import Navbar from '../../components/layout/Navbar'
import PageTransition from '../../components/ui/PageTransition'
import Climate from './sections/Climate'
import Hero from './sections/Hero'
import Lighting from './sections/Lighting'
import NarrativeSectionContainer from './sections/NarrativeSectionContainer'
import ScenesAutomation from './sections/ScenesAutomation'
import Security from './sections/Security'
import Shade from './sections/Shade'

const Tour: React.FC = () => {
    return (
        <div className='bg-[#0a0a0a]'>
            <Navbar />
            <PageTransition>
                <main className='bg-[#0a0a0a]' id='tour'>
                    <Hero />
                    <NarrativeSectionContainer />
                    <section className='bg-[#0f0f1a] px-8 py-24 lg:py-28 text-center'>
                        <h2 className='font-bold mb-6 text-4xl lg:text-4xl text-white'>Explore<span className='text-[#6f4ccf]'> Features</span></h2>
                        <p className='mx-auto text-[#a8a8a8] text-base'>
                            Explore the capabilities that bring complete control, comfort, and security to your residence.
                        </p>
                    </section>
                    <Lighting />
                    <Shade />
                    <Climate />
                    <Security />
                    <ScenesAutomation />
                </main>
            </PageTransition>
            <Footer />
        </div>
    )
}

export default Tour