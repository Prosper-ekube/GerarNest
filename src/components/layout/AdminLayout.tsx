import { NavLink } from 'react-router-dom'
import type { ReactNode } from 'react'

type AdminLayoutProps = {
    children: ReactNode
}

type TabItemProps = {
    to: string
    children: string
}

const TabItem = ({ to, children }: TabItemProps) => {
    return (
        <NavLink
            className={({ isActive }) =>
                [
                    'border-b-2 duration-200 pb-3 text-sm md:text-base transition-colors',
                    isActive
                        ? 'border-[#6F4CCF] text-[#EDEDED]'
                        : 'border-transparent text-[#A8A8A8] hover:text-[#EDEDED]'
                ].join(' ')
            }
            to={to}
        >
            {children}
        </NavLink>
    )
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
    return (
        <div className='bg-[#0F1115] min-h-screen'>
            <header className='border-b border-[#2A2D34] px-6 py-6 md:px-12'>
                <div className='flex items-center justify-between max-w-7xl mx-auto'>
                    <h1 className='font-bold text-[#EDEDED] text-xl md:text-2xl'>
                        Gerar Smart Home Admin
                    </h1>
                    <div className='flex items-center gap-3'>
                        <div className='bg-[#6F4CCF] flex font-semibold h-10 items-center justify-center rounded-full text-black text-sm w-10'>
                            AU
                        </div>
                        <div className='flex flex-col'>
                            <span className='font-medium text-[#EDEDED] text-sm'>Admin User</span>
                            <span className='text-[#A8A8A8] text-xs'>Orvibo Product Admin</span>
                        </div>
                    </div>
                </div>
            </header>

            <nav className='border-b border-[#2A2D34] px-6 md:px-12'>
                <div className='flex gap-8 max-w-7xl mx-auto'>
                    <TabItem to='/admin/products'>Products</TabItem>
                    <TabItem to='/admin/categories'>Categories</TabItem>
                    <TabItem to='/admin/settings'>Settings</TabItem>
                </div>
            </nav>

            <main>{children}</main>
        </div>
    )
}

export default AdminLayout