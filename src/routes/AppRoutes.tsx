import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from '../pages/home/Home';
import Product from '../pages/product/Product';
import ProductDetails from '../pages/product/sections/details/ProductDetails';
import PaymentSuccess from '../pages/PaymentSuccess';
import Contact from "../pages/contact/Contact";
import Tour from '../pages/tour/Tour';
import PaymentFailed from '../pages/PaymentFailed';
import { CartProvider } from '../context/CartContext';
import ScrollToTop from '../components/ui/ScrollToTop';

const AppRoutesWithTransition = () => {
    const location = useLocation();
    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<Home />} />
                <Route path='/product' element={<Product />} />
                <Route path='/products/:id' element={<ProductDetails />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/tour' element={<Tour />} />
                <Route path='/payment-success' element={<PaymentSuccess />} />
                <Route path='/payment-failed' element={<PaymentFailed />} />
            </Routes>
        </AnimatePresence>
    );
};

const AppRoutes = () => {
    return (
        <CartProvider>
            <BrowserRouter>
                <ScrollToTop />
                <AppRoutesWithTransition />
            </BrowserRouter>
        </CartProvider>
    );
};

export default AppRoutes;