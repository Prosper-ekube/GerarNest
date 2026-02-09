import type { FC } from 'react'
import { MdEmail, MdPhone } from 'react-icons/md'

const Footer: FC = () => {
    return (
        <footer className='bg-[#0F1115] px-4 py-8 md:p-12'>
            <div className='max-w-7xl mx-auto'>
                <div className='gap-6 md:gap-8 flex flex-col md:flex-row justify-between pb-4 lg:pb-8'>
                    {/* Company info */}
                    <div className='space-y-2 md:w-[400px]'>
                        <h4 className='font-bold text-xl lg:text-4xl text-[#EDEDED]'>Gerar Smart Homes</h4>
                        <p className='leading-relaxed text-xs md:text-base lg:text-lg text-[#A8A8A8] md:w-[320px]'>
                            Premium smart home design, installation and support for high-end
                            residences and developments across Nigeria.
                        </p>
                        <p className='text-xs lg:text-lg text-[#A8A8A8]'>Official Orvibo Partner & Distributor</p>
                    </div>
                    {/* Contact */}
                    <div className='space-y-2'>
                        <h5 className='font-semibold text-base lg:text-lg tracking-wider uppercase text-[#EDEDED]'>Contact</h5>
                        <div className='space-y-3 text-[#A8A8A8] text-xs md:text-base'>
                            <a className='flex gap-3 items-center transition-colors hover:text-gray-300' href='mailto:info@gerarsmarthomes.ng'>
                                <MdEmail />
                                <span>gerarsmarthomes@gmail.com</span>
                            </a>
                            <a className='flex gap-3 items-center transition-colors hover:text-gray-300' href='tel:+2348000000000'>
                                <MdPhone />
                                <span>+234 70 5523 9376</span>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Copyright */}
                <div className='pt-6 text-center'>
                    <p className='text-xs md:text-lg text-[#A8A8A8]'>
                        © 2026 Gerar Smart Homes. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer