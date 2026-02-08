import { NavLink } from 'react-router-dom'

const Navbar: React.FC = () => {
    return (
        <nav className='border-b border-gray-800 bg-[#0a0a0a] px-6 py-4 md:px-12'>
            <div className='mx-auto flex max-w-7xl items-center justify-between'>
                {/* Logo */}
                <div className='flex flex-col'>
                    <h1 className='text-xl font-bold md:text-2xl'>
                        Gerar Smart Homes
                    </h1>
                    <p className='text-xs text-gray-400 md:text-sm'>
                        Official Orvibo Partner
                    </p>
                </div>

                {/* Links */}
                <ul className='flex gap-6 md:gap-8'>
                    <NavItem to='/'>Home</NavItem>
                    <NavItem to='/products'>Products</NavItem>
                    <NavItem to='/contact'>Contact</NavItem>
                </ul>
            </div>
        </nav>
    )
}

type NavItemProps = {
    children: string
    to: string
}

const NavItem = ({ children, to }: NavItemProps) => {
    return (
        <li>
            <NavLink
                to={to}
                className={({ isActive }) =>
                    [
                        'text-sm transition-colors md:text-base',
                        isActive ? 'text-white' : 'text-gray-400 hover:text-gray-300'
                    ].join(' ')
                }
            >
                {children}
            </NavLink>
        </li>
    )
}

export default Navbar