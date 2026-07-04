import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import Product from '../pages/product/Product'
import ProductDetails from '../pages/product/sections/details/ProductDetails'
import PaymentSuccess from '../pages/PaymentSuccess'
import Contact from "../pages/contact/Contact"
import AdminProducts from '../pages/admin/AdminProducts'
import PaymentFailed from '../pages/PaymentFailed'
import { CartProvider } from '../context/CartContext'
import ScrollToTop from '../components/ui/ScrollToTop'

const AppRoutes = () => {
    return (
        <CartProvider>
            <BrowserRouter>
                <ScrollToTop />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/product' element={<Product />} />
                    <Route path='/products/:id' element={<ProductDetails />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/admin/products' element={<AdminProducts />} />
                    <Route path='/payment-success' element={<PaymentSuccess />} />
                    <Route path='/payment-failed' element={<PaymentFailed />} />
                </Routes>
            </BrowserRouter>
        </CartProvider >
    )
}

export default AppRoutes