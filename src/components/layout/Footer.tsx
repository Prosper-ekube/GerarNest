// Footer.tsx (Modular Version)
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MdEmail, MdPhone } from 'react-icons/md';

import Gerar_Nest_Logo from '../../assets/images/Gerar-Nest-Logo.png'

// Types
interface FooterLink {
    label: string;
    href: string;
}

interface FooterSection {
    title: string;
    links: FooterLink[];
    onLinkClick?: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

const Footer: React.FC = () => {

    const navigate = useNavigate()

    const solutions: FooterLink[] = [
        { label: 'Smart Central Control Panels', href: '/product#smart_panels' },
        { label: 'Smart Lighting', href: '/product#smart_lighting' },
        { label: 'Smart Switches', href: '/product#smart_switches' },
        { label: 'Home & Security Sensors', href: '/product#home_security' }
    ];

    const company: FooterLink[] = [
        { label: 'About Us', href: '/' },
        { label: 'Partnership', href: 'https://url-shortener.me/NLCE' },
        { label: 'Contact', href: '/contact' },
    ];

    const legal: FooterLink[] = [
        { label: 'Privacy Policy', href: '#' },
        { label: 'Terms of Service', href: '#' },
        { label: 'Cookies Settings', href: '#' },
    ];

    const currentYear = new Date().getFullYear();

    const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        navigate(href);
    };

    return (
        <footer className="bg-[#0a0a0a] border-t border-[#2a2a2a]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">

                {/* Main Footer Content */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">

                    {/* Column 1: Brand Identity */}
                    <div className="lg:col-span-1">
                        <div className='flex'>
                            <img className='w-40' src={Gerar_Nest_Logo} />
                        </div>
                        <p className="text-[#a8a8a8] text-sm leading-relaxed mt-4 mb-3">
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
                                    href="mailto:gerarnest@gmail.com"
                                    className="text-white text-sm hover:text-white hover:-translate-y-1 duration-1000 ease-in-out flex items-center gap-2 group"
                                >
                                    <MdEmail className="w-4 h-4 flex-shrink-0 text-[#a8a8a8] group-hover:text-white transition-colors duration-200" />
                                    gerarnest@gmail.com
                                </a>
                            </li>
                            <li>
                                <a
                                    href="tel:+2347055239376"
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
                    <FooterSection title="Company" links={company} onLinkClick={handleNavigation} />

                </div>

                {/* Copyright & Legal */}
                <div className="border-t border-[#2a2a2a] mt-10 pt-6 flex flex-col lg:flex-row justify-between items-center gap-4">
                    <p className="text-white text-sm">
                        &copy; {currentYear} GerarNest. All rights reserved.
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
const FooterSection: React.FC<FooterSection> = ({
    title,
    links,
    onLinkClick
}) => {
    return (
        <div>
            <h3 className="text-sm font-semibold text-[#a8a8a8] uppercase tracking-wider mb-4">
                {title}
            </h3>
            <ul className="space-y-2">
                {links.map((link) => {
                    const isExternal = link.href.startsWith('http://') || link.href.startsWith('https://');

                    return (
                        <li key={link.label}>
                            <a
                                href={link.href}
                                onClick={(e) => {
                                    if (!isExternal) {
                                        onLinkClick?.(e, link.href);
                                    }
                                }}
                                target={isExternal ? "_blank" : undefined}
                                rel={isExternal ? "noopener noreferrer" : undefined}
                                className="inline-block text-white text-sm transform transition-transform duration-300 ease-in-out hover:-translate-y-1"
                            >
                                {link.label}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Footer;