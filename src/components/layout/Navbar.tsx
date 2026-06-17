import { useEffect, useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import { NavLink } from 'react-router-dom'

import GH_Logo from '../../assets/images/GH_Logo.png'

type NavItemProps = {
    children: string
    onClick?: () => void
    to: string
}

const NavItem = ({ children, onClick, to }: NavItemProps) => {
    const baseClasses = 'duration-1000 text-4xl md:text-base transition-colors'
    const activeClasses = 'text-white'
    const inactiveClasses = 'hover:text-gray-300 text-[#A8A8A8]'

    return (
        <li>
            <NavLink className={({ isActive }) => [baseClasses, isActive ? activeClasses : inactiveClasses].join(' ')} onClick={onClick} to={to}>
                {children}
            </NavLink>
        </li>
    )
}

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'auto'
        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [isOpen])

    return (
        <nav className='bg-[#0f0f1a] fixed left-0 px-6 lg:px-8 py-4 md:py-6 top-0 w-full z-50'>
            <div className='flex items-center justify-between mx-auto max-w-6xl'>
                {/* Logo */}
                <div className='flex flex-col items-center '>
                    <img className='w-10' src={GH_Logo} />
                    <h1 className='font-bold md:text-xl text-xs text-white'>Gerar Smart Homes</h1>
                </div>
                {/* Desktop Menu */}
                <ul className='lg:flex hidden gap-8'>
                    <NavItem to='/'>Home</NavItem>
                    <NavItem to='/product'>Products</NavItem>
                    <NavItem to='/contact'>Contact</NavItem>
                </ul>
                {/* Mobile Toggle */}
                <button className='lg:hidden text-white' onClick={() => setIsOpen(prev => !prev)}>
                    {isOpen ? <HiX size={26} /> : <HiMenu size={26} />}
                </button>
            </div>
            {/* Mobile Menu */}
            <div className={['duration-1000 h-0 lg:hidden opacity-0 overflow-hidden transition-all', isOpen && 'h-screen opacity-100'].join(' ')}>
                <ul className='flex flex-col gap-8 pl-2 pt-6'>
                    <NavItem onClick={() => setIsOpen(false)} to='/'>Home</NavItem>
                    <NavItem onClick={() => setIsOpen(false)} to='/product'>Products</NavItem>
                    <NavItem onClick={() => setIsOpen(false)} to='/contact'>Contact</NavItem>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar