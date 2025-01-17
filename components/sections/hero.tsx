'use client'
import { useEffect, useState } from 'react'

const images = [
    // Santorini, Greece - Beautiful white architecture with sea view
    
    // Bali Rice Terraces - Lush green landscape
    'https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=2070&auto=format&fit=crop',
    
    // Maldives - Luxury overwater bungalows
    'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=2070&auto=format&fit=crop',
    
    // Swiss Alps - Mountain landscape
    'https://images.unsplash.com/photo-1527668752968-14dc70a27c95?q=80&w=2070&auto=format&fit=crop',
    
    // Venice, Italy - Romantic canal view
    'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=2070&auto=format&fit=crop',
    
    // Safari in Africa - Wildlife experience
    'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2070&auto=format&fit=crop',
    
    // Amalfi Coast, Italy - Coastal beauty
    'https://images.unsplash.com/photo-1633321088355-d0f81134ca3b?q=80&w=2070&auto=format&fit=crop',
    
    // Dubai - Modern cityscape
    'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop'
]

export default function Hero() {
    const [currentImage, setCurrentImage] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length)
        }, 6000) // Change image every 6 seconds for a good balance

        return () => clearInterval(interval)
    }, [])

    return (
        <div className="relative h-screen w-screen overflow-hidden">
            {/* Image Slider */}
            <div className="absolute inset-0">
                {images.map((img, index) => (
                    <div
                        key={img}
                        className={`absolute inset-0 h-full w-full transition-opacity duration-1000 ease-in-out ${
                            index === currentImage ? 'opacity-100' : 'opacity-0'
                        }`}
                    >
                        <img
                            src={img}
                            alt={`Travel scene ${index + 1}`}
                            className="h-full w-full object-cover"
                            style={{
                                width: '100vw',
                                height: '100vh',
                                objectFit: 'cover',
                                objectPosition: 'center',
                            }}
                        />
                    </div>
                ))}
                {/* Enhanced gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0a0a0a]" />
                {/* Additional vignette effect */}
                <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/30 to-black/70" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex h-full items-center justify-center text-center">
                <div className="max-w-3xl px-4">
                    <h1 className="mb-6 font-fancy text-7xl font-normal text-white">
                        Discover the World's Beauty
                    </h1>
                    <p className="mb-8 text-xl font-light text-gray-200">
                        Experience unforgettable adventures and create lasting memories with our curated travel experiences
                    </p>
                    <button className="rounded-full bg-white px-8 py-3 font-medium text-gray-900 transition hover:bg-gray-100">
                        Start Your Journey
                    </button>
                </div>
            </div>
        </div>
    )
}