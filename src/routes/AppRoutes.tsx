import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
// import Product from "../pages/product/Product"
// import Contact from "../pages/contact/Contact"

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                ?
                ?
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes