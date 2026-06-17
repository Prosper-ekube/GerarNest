// Footer.tsx (Modular Version)
import React from 'react';
import { MdEmail, MdPhone } from 'react-icons/md';

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
        { label: 'Smart Lighting', href: '#' },
        { label: 'Security & Surveillance', href: '#' },
        { label: 'Climate Control', href: '#' },
        { label: 'Smart Curtains & Blinds', href: '#' },
        { label: 'Voice-Controlled Systems', href: '#' },
    ];

    const company: FooterLink[] = [
        { label: 'About Us', href: '#' },
        { label: 'Projects', href: '#' },
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
                        <h2 className="text-xl font-bold text-white mb-3">
                            Gerar Smart Homes
                        </h2>
                        <p className="text-gray-400 text-sm leading-relaxed mb-3">
                            Premium smart home design, installation and support for high-end
                            residences and developments across Nigeria.
                        </p>
                        <p className="text-gray-500 text-xs tracking-wide">
                            Official Orvibo Partner &amp; Distributor
                        </p>
                    </div>

                    {/* Column 2: Contact */}
                    <div>
                        <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
                            Contact
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="mailto:info@gerarsmarthomes.ng"
                                    className="text-gray-300 text-sm hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                                >
                                    <MdEmail className="w-4 h-4 flex-shrink-0 text-gray-400 group-hover:text-white transition-colors duration-200" />
                                    info@gerarsmarthomes.ng
                                </a>
                            </li>
                            <li>
                                <a
                                    href="tel:+2348000000000"
                                    className="text-gray-300 text-sm hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                                >
                                    <MdPhone className="w-4 h-4 flex-shrink-0 text-gray-400 group-hover:text-white transition-colors duration-200" />
                                    +234 (0) 800 000 0000
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
                <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-xs">
                        &copy; {currentYear} Gerar Smart Homes. All rights reserved.
                    </p>

                    <div className="flex items-center gap-4 text-xs">
                        {legal.map((link, index) => (
                            <React.Fragment key={link.label}>
                                <a
                                    href={link.href}
                                    className="text-gray-500 hover:text-gray-300 transition-colors duration-200"
                                >
                                    {link.label}
                                </a>
                                {index < legal.length - 1 && (
                                    <span className="text-gray-700">|</span>
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
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
                {title}
            </h3>
            <ul className="space-y-2">
                {links.map((link) => (
                    <li key={link.label}>
                        <a
                            href={link.href}
                            className="text-gray-300 text-sm hover:text-white transition-colors duration-200"
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