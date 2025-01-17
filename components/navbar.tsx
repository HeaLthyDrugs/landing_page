'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { FaCompass } from 'react-icons/fa' // Using compass as travel icon

const leftNavLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Destinations', href: '#destinations' },
    { name: 'Tours', href: '#tours' },
]

const rightNavLinks = [
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav className={`fixed top-0 z-50 w-full transition-all duration-300 ${
            scrolled ? 'bg-black/80 backdrop-blur-md shadow-md' : 'bg-transparent'
        }`}>
            <div className="mx-auto px-4">
                {/* Desktop Navigation */}
                <div className="relative flex h-20 items-center justify-between">
                    {/* Left Navigation */}
                    <div className="hidden md:flex md:items-center md:space-x-8">
                        {leftNavLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`group relative text-sm font-medium tracking-wide transition-colors ${
                                    scrolled ? 'text-white' : 'text-white'
                                }`}
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-white transition-all group-hover:w-full" />
                            </Link>
                        ))}
                    </div>

                    {/* Center Logo */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
                        <Link 
                            href="/" 
                            className="flex items-center space-x-2 text-white"
                        >
                            <FaCompass className="h-8 w-8 animate-pulse" />
                            <span className="font-fancy text-2xl">TravelHub</span>
                        </Link>
                    </div>

                    {/* Right Navigation */}
                    <div className="hidden md:flex md:items-center md:space-x-8">
                        {rightNavLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`group relative text-sm font-medium tracking-wide transition-colors ${
                                    scrolled ? 'text-white' : 'text-white'
                                }`}
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-white transition-all group-hover:w-full" />
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex md:hidden">
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="text-white"
                        >
                            <div className="space-y-2">
                                <span className={`block h-0.5 w-8 transform bg-current transition duration-300 ${
                                    mobileMenuOpen ? 'translate-y-2.5 rotate-45' : ''
                                }`} />
                                <span className={`block h-0.5 w-8 bg-current transition duration-300 ${
                                    mobileMenuOpen ? 'opacity-0' : ''
                                }`} />
                                <span className={`block h-0.5 w-8 transform bg-current transition duration-300 ${
                                    mobileMenuOpen ? '-translate-y-2.5 -rotate-45' : ''
                                }`} />
                            </div>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`md:hidden transition-all duration-300 ease-in-out ${
                    mobileMenuOpen 
                        ? 'max-h-96 opacity-100' 
                        : 'max-h-0 opacity-0 pointer-events-none'
                }`}>
                    <div className="space-y-4 px-4 pb-6 pt-2">
                        {[...leftNavLinks, ...rightNavLinks].map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="block text-white hover:text-gray-300"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    )
}