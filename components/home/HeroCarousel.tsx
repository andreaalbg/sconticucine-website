'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const slides = [
  {
    id: 1,
    title: 'Design Contemporaneo per il Tuo Living',
    description: 'Scopri i nostri soggiorni Made in Italy, dove eleganza e funzionalità si incontrano. Oltre 40 showroom pronti ad accoglierti con un designer dedicato al tuo progetto',
    cta: 'Esplora le Collezioni',
    image: '/images/hero-1.jpg',
    bgGradient: 'from-white/70 to-gray-100/80',
  },
  {
    id: 2,
    title: 'Arredamento su Misura per Te',
    description: 'Crea il soggiorno dei tuoi sogni con i nostri arredi personalizzabili. Design italiano, materiali di alta qualità e attenzione ai dettagli in ogni elemento',
    cta: 'Scopri di Più',
    image: '/images/hero-2.jpg',
    bgGradient: 'from-gray-50/75 to-white/85',
  },
  {
    id: 3,
    title: 'Eleganza Senza Tempo',
    description: 'Soggiorni che riflettono il tuo stile di vita. Dal minimalismo moderno al comfort elegante, trova la soluzione perfetta per il tuo spazio abitativo',
    cta: 'Richiedi Consulenza',
    image: '/images/hero-3.jpg',
    bgGradient: 'from-gray-100/70 to-gray-50/80',
  },
  {
    id: 4,
    title: 'Offerta Speciale: Buono Sconto 1000€',
    description: "Richiedi il catalogo gratuito e ricevi subito un buono sconto di 1000€ per l'acquisto del tuo nuovo soggiorno. Progettazione gratuita inclusa",
    cta: 'Richiedi Ora',
    image: '/images/hero-1.jpg',
    bgGradient: 'from-white/75 to-gray-100/85',
  },
]

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section className="relative h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden mt-16">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <Image
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            fill
            className="object-cover"
            priority={currentSlide === 0}
            quality={90}
          />
          
          {/* Overlay Gradient */}
          <div className={`absolute inset-0 bg-gradient-to-br ${slides[currentSlide].bgGradient}`} />

          {/* Content */}
          <div className="relative container-custom h-full flex items-center">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-4xl"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-gray-800 mb-6 leading-tight font-heading tracking-wide">
                {slides[currentSlide].title}
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-8 max-w-3xl leading-relaxed font-light">
                {slides[currentSlide].description}
              </p>
              <Link href="#catalog">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-secondary text-white hover:bg-secondary-dark font-normal py-4 px-10 rounded-lg text-lg shadow-lg transition-all duration-300"
                >
                  {slides[currentSlide].cta}
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? 'bg-white w-10'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute bottom-8 right-8 text-gray-700 font-light text-lg z-10">
        <span className="text-2xl">{currentSlide + 1}</span> / {slides.length}
      </div>
    </section>
  )
}

export default HeroCarousel

