import Navbar from '../../components/layout/Navbar'
import Hero from './sections/Hero'
import Partnership from './sections/Partnership'
import Footer from '../../components/layout/Footer'

const Home = () => {
	return (
		<>
			<Navbar />
			<main>
				<Hero />
				<Partnership />
			</main>
			<Footer />
		</>
	)
}

export default Home