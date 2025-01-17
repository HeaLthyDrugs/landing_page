'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

type Destination = {
    title: string;
    description: string;
    image: string;
    size: string;
    accent: string;
}

const destinations = [
    {
        title: 'Exotic Beaches',
        description: 'Discover pristine shorelines and crystal-clear waters.',
        image: 'https://images.unsplash.com/photo-1695411560235-595738c0dbda?q=80&w=1974&auto=format&fit=crop',
        size: 'hero',
        accent: 'blue'
    },
    {
        title: 'Mountain Escapes',
        description: 'Experience high-altitude adventures.',
        image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop',
        size: 'tall',
        accent: 'green'
    },
    {
        title: 'Cultural Immersion',
        description: 'Immerse in authentic experiences.',
        image: 'https://images.unsplash.com/photo-1533669955142-6a73332af4db?q=80&w=800&auto=format&fit=crop',
        size: 'wide',
        accent: 'orange'
    },
    {
        title: 'Desert Safari',
        description: 'Adventure through golden dunes.',
        image: 'https://images.unsplash.com/photo-1451440063999-77a8b2960d2b?q=80&w=800&auto=format&fit=crop',
        size: 'medium',
        accent: 'yellow'
    },
    {
        title: 'Island Paradise',
        description: 'Escape to tropical getaways.',
        image: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=800&auto=format&fit=crop',
        size: 'medium',
        accent: 'teal'
    },
    {
        title: 'Urban Adventures',
        description: 'Explore vibrant city life.',
        image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=800&auto=format&fit=crop',
        size: 'small',
        accent: 'purple'
    },
    {
        title: 'Ancient Wonders',
        description: 'Discover historical marvels.',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=800&auto=format&fit=crop',
        size: 'large',
        accent: 'red'
    },
    {
        title: 'Forest Retreats',
        description: 'Find peace in nature.',
        image: 'https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=800&auto=format&fit=crop',
        size: 'medium',
        accent: 'emerald'
    }
]

export default function Content() {
    return (
        <div className="relative">
            <div className="absolute inset-x-0 -top-40 h-40 bg-gradient-to-b from-transparent to-[#0a0a0a]" />

            <div className="bg-[#0a0a0a] px-4 py-20">
                <div className="container mx-auto">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-16 text-center font-fancy text-6xl font-light text-white"
                    >
                        Popular Destinations
                    </motion.h2>

                    {/* Creative Bento Grid */}
                    <div className="grid auto-rows-[20rem] grid-cols-1 gap-6 p-10 md:grid-cols-6 lg:grid-cols-12">
                        {/* Hero Section - Spans 8 columns and 2 rows */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="group relative col-span-full overflow-hidden rounded-3xl bg-[#1a1a1a] md:col-span-8 md:row-span-2"
                        >
                            <div className="relative h-full">
                                <Image
                                    src={destinations[0].image}
                                    alt={destinations[0].title}
                                    fill
                                    className="object-cover transition-all duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80 transition-all duration-300 group-hover:via-black/40 group-hover:to-black/90" />
                                <BentoContent destination={destinations[0]} isHero />
                            </div>
                        </motion.div>

                        {/* Tall Card - Spans 4 columns and 2 rows */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="group relative col-span-full overflow-hidden rounded-3xl bg-[#1a1a1a] md:col-span-4 md:row-span-2"
                        >
                            <div className="relative h-full">
                                <Image
                                    src={destinations[1].image}
                                    alt={destinations[1].title}
                                    fill
                                    className="object-cover transition-all duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80 transition-all duration-300 group-hover:via-black/40 group-hover:to-black/90" />
                                <BentoContent destination={destinations[1]} />
                            </div>
                        </motion.div>

                        {/* Wide Cards Row - Each spans 4 columns */}
                        {destinations.slice(2, 5).map((destination, index) => (
                            <motion.div
                                key={destination.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: (index + 2) * 0.1 }}
                                className="group relative col-span-full overflow-hidden rounded-3xl bg-[#1a1a1a] md:col-span-4"
                            >
                                <div className="relative h-full">
                                    <Image
                                        src={destination.image}
                                        alt={destination.title}
                                        fill
                                        className="object-cover transition-all duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80 transition-all duration-300 group-hover:via-black/40 group-hover:to-black/90" />
                                    <BentoContent destination={destination} />
                                </div>
                            </motion.div>
                        ))}

                        {/* Small Cards Row - Each spans 3 columns */}
                        {destinations.slice(5).map((destination, index) => (
                            <motion.div
                                key={destination.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: (index + 5) * 0.1 }}
                                className="group relative col-span-full overflow-hidden rounded-3xl bg-[#1a1a1a] md:col-span-3"
                            >
                                <div className="relative h-full">
                                    <Image
                                        src={destination.image}
                                        alt={destination.title}
                                        fill
                                        className="object-cover transition-all duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80 transition-all duration-300 group-hover:via-black/40 group-hover:to-black/90" />
                                    <BentoContent destination={destination} />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

// Extracted card content component for reusability
const BentoContent = ({ destination, isHero = false }: { destination: Destination; isHero?: boolean }) => (
    <div className="absolute bottom-0 left-0 right-0 p-8 transition-transform duration-300 group-hover:translate-y-[-8px]">
        <motion.h3 
            className={`mb-3 font-playfair tracking-wide text-white ${isHero ? 'text-4xl' : 'text-2xl'} font-light`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
        >
            {destination.title}
        </motion.h3>
        <motion.p 
            className={`font-source ${isHero ? 'text-lg' : 'text-base'} text-gray-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 0, y: 0 }}
            transition={{ duration: 0.3 }}
        >
            {destination.description}
        </motion.p>
        
        <motion.button
            className={`mt-6 rounded-full bg-white/10 px-6 py-2.5 font-source text-sm font-light tracking-wider text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 ${
                isHero ? 'text-base px-8 py-3' : ''
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 0, y: 0 }}
            transition={{ duration: 0.3 }}
        >
            Explore →
        </motion.button>
    </div>
)