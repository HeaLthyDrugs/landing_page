'use client'
import Link from 'next/link'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
    return (
        <footer className="relative">
            {/* Deep Ocean Background */}
            <div className="absolute inset-0 overflow-hidden">
                <div 
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1580019542155-247062e19ce4?q=80&w=2070&auto=format&fit=crop')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        filter: 'brightness(0.3)',
                    }}
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[rgba(0,0,20,0.8)]" />
            </div>

            {/* Footer Content */}
            <div className="relative z-10 px-4 pt-20 pb-10">
                <div className="container mx-auto">
                    {/* Footer Grid */}
                    <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
                        {/* Company Info */}
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold text-white">TravelHub</h3>
                            <p className="text-gray-300">
                                Dive into extraordinary adventures and discover the world's hidden gems with us.
                            </p>
                            {/* Social Links */}
                            <div className="flex space-x-4">
                                {[
                                    { icon: FaFacebook, href: '#' },
                                    { icon: FaTwitter, href: '#' },
                                    { icon: FaInstagram, href: '#' },
                                    { icon: FaLinkedin, href: '#' },
                                ].map((social, index) => (
                                    <Link
                                        key={index}
                                        href={social.href}
                                        className="text-gray-400 transition-colors hover:text-blue-400"
                                    >
                                        <social.icon className="h-6 w-6" />
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="mb-4 text-lg font-semibold text-white">Quick Links</h4>
                            <ul className="space-y-2">
                                {['About Us', 'Destinations', 'Tours', 'Contact'].map((item) => (
                                    <li key={item}>
                                        <Link
                                            href="#"
                                            className="text-gray-400 transition-colors hover:text-blue-400"
                                        >
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Popular Destinations */}
                        <div>
                            <h4 className="mb-4 text-lg font-semibold text-white">Popular Destinations</h4>
                            <ul className="space-y-2">
                                {['Maldives', 'Switzerland', 'Santorini', 'Bali', 'Venice'].map((item) => (
                                    <li key={item}>
                                        <Link
                                            href="#"
                                            className="text-gray-400 transition-colors hover:text-blue-400"
                                        >
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Newsletter */}
                        <div>
                            <h4 className="mb-4 text-lg font-semibold text-white">Newsletter</h4>
                            <p className="mb-4 text-gray-400">
                                Subscribe to our newsletter for travel updates and special offers.
                            </p>
                            <form className="space-y-2">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full rounded-lg bg-white/10 px-4 py-2 text-white placeholder-gray-400 backdrop-blur-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                                <button className="w-full rounded-lg bg-blue-500 px-4 py-2 font-semibold text-white transition-colors hover:bg-blue-600">
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="mt-12 border-t border-white/10 pt-8">
                        <div className="flex flex-col items-center justify-between space-y-4 text-center md:flex-row md:space-y-0">
                            <p className="text-gray-400">
                                © 2024 TravelHub. All rights reserved.
                            </p>
                            <div className="flex space-x-6">
                                {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                                    <Link
                                        key={item}
                                        href="#"
                                        className="text-sm text-gray-400 transition-colors hover:text-blue-400"
                                    >
                                        {item}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}