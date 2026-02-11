import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import Product from '../pages/product/Product'
import Contact from "../pages/contact/Contact"
import AdminProducts from '../pages/admin/AdminProducts'

const AppRoutes = () => {
    return (
        <BrowserRouter>            
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/product' element={<Product />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/admin/products' element={<AdminProducts />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes