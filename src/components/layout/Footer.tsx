import type { FC } from 'react'
import { MdEmail, MdPhone } from 'react-icons/md'

const Footer: FC = () => {
    return (
        <footer className='bg-[#0a0a0a] border-gray-800 border-t px-6 py-12 md:px-12'>
            <div className='max-w-7xl mx-auto'>
                {/* Main footer content */}
                <div className='gap-8 grid grid-cols-1 md:grid-cols-2 pb-8'>
                    {/* Company info */}
                    <div className='space-y-4'>
                        <h4 className='font-bold text-xl'>Gerar Smart Homes</h4>

                        <p className='leading-relaxed text-gray-400'>
                            Premium smart home design, installation and support for high-end
                            residences and developments across Nigeria.
                        </p>

                        <p className='text-gray-500 text-sm'>
                            Official Orvibo Partner & Distributor
                        </p>
                    </div>

                    {/* Contact */}
                    <div className='space-y-4'>
                        <h5 className='font-semibold text-lg tracking-wider uppercase'>
                            Contact
                        </h5>

                        <div className='space-y-3'>
                            <a
                                className='flex gap-3 items-center text-gray-400 transition-colors hover:text-gray-300'
                                href='mailto:info@gerarsmarthomes.ng'
                            >
                                <MdEmail className='text-xl' />
                                <span>info@gerarsmarthomes.ng</span>
                            </a>

                            <a
                                className='flex gap-3 items-center text-gray-400 transition-colors hover:text-gray-300'
                                href='tel:+2348000000000'
                            >
                                <MdPhone className='text-xl' />
                                <span>+234 (0) 800 000 0000</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className='border-gray-800 border-t pt-6 text-center'>
                    <p className='text-gray-500 text-sm'>
                        © 2026 Gerar Smart Homes. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer