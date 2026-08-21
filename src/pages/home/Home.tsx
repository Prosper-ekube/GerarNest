import { Helmet } from 'react-helmet-async'

import Footer from '../../components/layout/Footer'
import Navbar from '../../components/layout/Navbar'

import Hero from './sections/Hero'
import Features from './sections/Features'
import Products from './sections/Products'
import HowItWorks from './sections/HowItWorks'
import Testimonials from './sections/Testimonials'
import CTA from './sections/CTA'

const Home: React.FC = () => {
	return (
		<>
			<Helmet>
				<title>GerarNest | Smart Home Solutions in Nigeria</title>

				<meta
					name='description'
					content='Explore smart home products from GerarNest, an official Orvibo partner and distributor in Nigeria. Discover smart lighting, switches, panels, and home security solutions.'
				/>

				<meta property='og:title' content='GerarNest | Smart Home Solutions in Nigeria' />

				<meta
					property='og:description'
					content='Explore smart home products from GerarNest, an official Orvibo partner and distributor in Nigeria.'
				/>

				<meta property='og:type' content='website' />

				<meta property='og:site_name' content='GerarNest' />

				<meta
					property='og:image'
					content='https://gerarnest.vercel.app/og-image.jpg'
				/>

				<meta name='twitter:card' content='summary_large_image' />

				<meta
					name='twitter:title'
					content='GerarNest | Smart Home Solutions in Nigeria'
				/>
				<meta
					name='twitter:description'
					content='Smart home products and solutions from GerarNest, an official Orvibo partner and distributor in Nigeria.'
				/>
			</Helmet>
			<Navbar />
			<main className='bg-[#0a0a0a]'>
				<Hero />
				<Features />
				<Products />
				<HowItWorks />
				<Testimonials />
				<CTA />
			</main>
			<Footer />
		</>
	)
}

export default Home