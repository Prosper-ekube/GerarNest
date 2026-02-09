import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { HiMenu, HiX } from 'react-icons/hi'

type NavItemProps = {
    children: string
    to: string
    onClick?: () => void
}

const NavItem = ({ children, to, onClick }: NavItemProps) => {
    return (
        <li>
            <NavLink className={({ isActive }) => ['duration-1000 text-4xl md:text-base transition-colors', isActive ? 'text-[#EDEDED]' :
                'text-[#A8A8A8] hover:text-gray-300'].join(' ')} to={to} onClick={onClick}
            >
                {children}
            </NavLink>
        </li>
    )
}

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto'

    return () => {
        document.body.style.overflow = 'auto'
    }
}, [isOpen])

    return (
        <nav className='fixed left-0 top-0 z-50 w-full bg-[#0F1115] px-6 py-4 md:py-6 md:px-12'>
            <div className='mx-auto flex max-w-7xl items-center justify-between'>
                {/* Logo */}
                <div className='flex flex-col gap-1 md:gap-2'>
                    <h1 className='text-xl font-bold text-[#EDEDED] md:text-4xl'>
                        Gerar Smart Homes
                    </h1>
                    <p className='text-xs text-[#A8A8A8] md:text-sm'>
                        Official Orvibo Partner
                    </p>
                </div>

                {/* Desktop Links */}
                <ul className='hidden gap-8 lg:flex'>
                    <NavItem to='/'>Home</NavItem>
                    <NavItem to='/products'>Products</NavItem>
                    <NavItem to='/contact'>Contact</NavItem>
                </ul>

                {/* Mobile Toggle */}
                <button
                    className='text-[#EDEDED] lg:hidden'
                    onClick={() => setIsOpen(prev => !prev)}
                >
                    {isOpen ? <HiX size={26} /> : <HiMenu size={26} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={[
                    'overflow-hidden transition-all duration-1000 lg:hidden',
                    isOpen ? 'h-screen opacity-100' : 'h-0 opacity-0'
                ].join(' ')}
            >
                <ul className='flex flex-col gap-8 pl-2 pt-6'>
                    <NavItem onClick={() => setIsOpen(false)} to='/'>
                        Home
                    </NavItem>
                    <NavItem onClick={() => setIsOpen(false)} to='/products'>
                        Products
                    </NavItem>
                    <NavItem onClick={() => setIsOpen(false)} to='/contact'>
                        Contact
                    </NavItem>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar