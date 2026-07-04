import { useEffect, useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import { NavLink } from 'react-router-dom'
import { FiShoppingCart } from 'react-icons/fi';

import { useCart } from '../../context/CartContext';
import CartDrawer from '../../pages/cart/CartDrawer';

import Gerar_Nest_Logo from '../../assets/images/Gerar-Nest-Logo.png'

type NavItemProps = {
    children: React.ReactNode
    onClick?: () => void
    to: string
}

const NavItem = ({ children, onClick, to }: NavItemProps) => {
    const baseClasses = 'duration-1000 text-4xl md:text-sm transition-all hover:-translate-y-1 ease-in-out'
    const activeClasses = 'text-white'
    const inactiveClasses = 'hover:text-gray-300 text-[#A8A8A8]'

    return (
        <li className='list-none'>
            <NavLink className={({ isActive }) => [baseClasses, isActive ? activeClasses : inactiveClasses].join(' ')} onClick={onClick} to={to}>
                {children}
            </NavLink>
        </li>
    )
}

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false)

    const { cartCount } = useCart();

    const [isCartOpen, setIsCartOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'auto'
        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [isOpen])

    return (
        <nav className='bg-[#0f0f1a] fixed left-0 px-6 lg:px-8 py-4 md:py-6 top-0 w-full z-50'>
            <div className='flex items-center justify-between mx-auto max-w-7xl'>
                {/* Logo */}
                <NavItem to='/'>
                    <img className='w-40' src={Gerar_Nest_Logo} />
                </NavItem>
                {/* Desktop Menu */}
                <ul className='lg:flex items-center hidden gap-8'>
                    <NavItem to='/'>Home</NavItem>
                    <NavItem to='/product'>Products</NavItem>
                    <NavItem to='/contact'>Contact</NavItem>
                    <button
                        onClick={() => setIsCartOpen(true)}
                        className='relative rounded-full p-2 transition-all duration-300 hover:bg-white/10'
                    >
                        <FiShoppingCart className='h-6 w-6 text-white' />

                        {cartCount > 0 && (
                            <span className='absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#6f4ccf] text-[11px] font-semibold text-white'>
                                {cartCount}
                            </span>
                        )}
                    </button>
                </ul>
                {/* Mobile Actions */}
                <div className='flex items-center gap-3 lg:hidden'>
                    <button
                        onClick={() => {
                            setIsOpen(false);
                            setIsCartOpen(true);
                        }}
                        className='relative rounded-full p-2 transition hover:bg-white/10'
                    >
                        <FiShoppingCart className='h-6 w-6 text-white' />

                        {cartCount > 0 && (
                            <span className='absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#6f4ccf] text-[11px] font-semibold text-white'>
                                {cartCount}
                            </span>
                        )}
                    </button>

                    <button
                        className='text-white'
                        onClick={() => setIsOpen(prev => !prev)}
                    >
                        {isOpen ? <HiX size={26} /> : <HiMenu size={26} />}
                    </button>
                </div>
            </div>
            {/* Mobile Menu */}
            <div className={['duration-1000 h-0 lg:hidden opacity-0 overflow-hidden transition-all', isOpen && 'h-screen opacity-100'].join(' ')}>
                <ul className='flex flex-col gap-8 pl-2 pt-6'>
                    <NavItem onClick={() => setIsOpen(false)} to='/'>Home</NavItem>
                    <NavItem onClick={() => setIsOpen(false)} to='/product'>Products</NavItem>
                    <NavItem onClick={() => setIsOpen(false)} to='/contact'>Contact</NavItem>
                </ul>
            </div>
            <CartDrawer
                isOpen={isCartOpen}
                onClose={() => setIsCartOpen(false)}
            />
        </nav>
    )
}

export default Navbar