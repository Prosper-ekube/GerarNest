// Footer.tsx (Modular Version)
import React from 'react';
import { MdEmail, MdPhone } from 'react-icons/md';

import GH_Logo from '../../assets/images/GH_Logo.png'

// Types
interface FooterLink {
    label: string;
    href: string;
}

interface FooterSection {
    title: string;
    links: FooterLink[];
}

const Footer: React.FC = () => {
    const solutions: FooterLink[] = [
        { label: 'Smart Central Control Panels', href: '#' },
        { label: 'Smart Lighting', href: '#' },
        { label: 'Smart Switches', href: '#' },
        { label: 'Home & Security Sensors', href: '#' }
    ];

    const company: FooterLink[] = [
        { label: 'About Us', href: '#' },
        { label: 'Partnership', href: '#' },
        { label: 'Contact', href: '#' },
    ];

    const legal: FooterLink[] = [
        { label: 'Privacy Policy', href: '#' },
        { label: 'Terms of Service', href: '#' },
        { label: 'Cookies Settings', href: '#' },
    ];

    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#0a0a0a] border-t border-[#2a2a2a]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">

                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">

                    {/* Column 1: Brand Identity */}
                    <div className="lg:col-span-1">
                        <div className='flex'>
                            <div className='flex flex-col items-center '>
                                <img className='w-10' src={GH_Logo} />
                                <h1 className='font-bold md:text-sm text-xs text-white'>Gerar Smart Homes</h1>
                            </div>
                        </div>                    
                        <p className="text-[#a8a8a8] text-sm leading-relaxed mt-8 mb-3">
                            Premium smart home design, installation and support for high-end
                            residences and developments across Nigeria.
                        </p>
                        <p className="text-[#a8a8a8] text-xs tracking-wide">
                            Official Orvibo Partner &amp; Distributor
                        </p>
                    </div>

                    {/* Column 2: Contact */}
                    <div>
                        <h3 className="text-sm font-semibold text-[#a8a8a8] uppercase tracking-wider mb-4">
                            Contact
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="mailto:info@gerarsmarthomes.ng"
                                    className="text-white text-sm hover:text-white hover:-translate-y-1 duration-1000 ease-in-out flex items-center gap-2 group"
                                >
                                    <MdEmail className="w-4 h-4 flex-shrink-0 text-[#a8a8a8] group-hover:text-white transition-colors duration-200" />
                                    gerarsmarthomes@gmail.com
                                </a>
                            </li>
                            <li>
                                <a
                                    href="tel:+2348000000000"
                                    className="text-white text-sm hover:text-white hover:-translate-y-1 duration-1000 ease-in-out flex items-center gap-2 group"
                                >
                                    <MdPhone className="w-4 h-4 flex-shrink-0 text-[#a8a8a8] group-hover:text-white hover:-translate-y-1 duration-1000 ease-in-out" />
                                    +234 70 5523 9376
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Solutions */}
                    <FooterSection title="Solutions" links={solutions} />

                    {/* Column 4: Company */}
                    <FooterSection title="Company" links={company} />

                </div>

                {/* Copyright & Legal */}
                <div className="border-t border-[#2a2a2a] mt-10 pt-6 flex flex-col lg:flex-row justify-between items-center gap-4">
                    <p className="text-white text-sm">
                        &copy; {currentYear} Gerar Smart Homes. All rights reserved.
                    </p>

                    <div className="flex items-center gap-4 text-sm">
                        {legal.map((link, index) => (
                            <React.Fragment key={link.label}>
                                <a
                                    href={link.href}
                                    className="text-white hover:text-white hover:-translate-y-1 duration-1000 ease-in-out"
                                >
                                    {link.label}
                                </a>
                                {index < legal.length - 1 && (
                                    <span className="text-[#2a2a2a]">|</span>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>

            </div>
        </footer>
    );
};

// Reusable Footer Section Component
const FooterSection: React.FC<{ title: string; links: FooterLink[] }> = ({
    title,
    links
}) => {
    return (
        <div>
            <h3 className="text-sm font-semibold text-[#a8a8a8] uppercase tracking-wider mb-4">
                {title}
            </h3>
            <ul className="space-y-2">
                {links.map((link) => (
                    <li key={link.label}>
                        <a
                            href={link.href}
                            className="inline-block text-white text-sm transform transition-transform duration-1000 ease-in-out hover:-translate-y-1"
                        >
                            {link.label}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Footer;