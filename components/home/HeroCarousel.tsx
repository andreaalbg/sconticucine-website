'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const slides = [
  {
    id: 1,
    title: 'Cucine Made in Italy di Qualità',
    description: 'Scopri le nostre cucine Made in Italy, dove eleganza e funzionalità si incontrano. Oltre 40 showroom pronti ad accoglierti con un designer dedicato al tuo progetto',
    cta: 'Esplora le Collezioni',
    image: '/images/hero-1.jpg',
    bgGradient: 'from-white/85 to-sage-light/50',
  },
  {
    id: 2,
    title: 'La Tua Cucina Su Misura',
    description: 'Crea la cucina dei tuoi sogni con i nostri arredi personalizzabili. Design italiano, materiali di alta qualità e attenzione ai dettagli in ogni elemento',
    cta: 'Scopri di Più',
    image: '/images/hero-2.jpg',
    bgGradient: 'from-accent/60 to-sage/30',
  },
  {
    id: 3,
    title: 'Eleganza Senza Tempo',
    description: 'Cucine che riflettono il tuo stile di vita. Dal minimalismo moderno al classico ricercato, trova la soluzione perfetta per il cuore della tua casa',
    cta: 'Richiedi Consulenza',
    image: '/images/hero-3.jpg',
    bgGradient: 'from-sage-light/45 to-primary/35',
  },
  {
    id: 4,
    title: 'Extra Sconto fino a 5.000€',
    description: "Richiedi il catalogo gratuito e ricevi subito un extra sconto fino a 5.000€ per l'acquisto della tua nuova cucina. Progettazione 3D gratuita inclusa",
    cta: 'Richiedi Ora',
    image: '/images/hero-1.jpg',
    bgGradient: 'from-white/80 to-primary/30',
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
          <Image
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            fill
            className="object-cover"
            priority={currentSlide === 0}
            quality={90}
          />
          
          <div className={`absolute inset-0 bg-gradient-to-br ${slides[currentSlide].bgGradient}`} />

          <div className="relative container-custom h-full flex items-center">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-4xl"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-secondary-dark mb-6 leading-tight tracking-wide" style={{fontFamily: 'var(--font-cormorant)'}}>
                {slides[currentSlide].title}
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-secondary mb-8 max-w-3xl leading-relaxed font-light" style={{fontFamily: 'var(--font-manrope)'}}>
                {slides[currentSlide].description}
              </p>
              <Link href="#catalog">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary text-white hover:bg-primary-dark font-normal py-4 px-10 rounded-lg text-lg shadow-lg transition-all duration-300"
                  style={{fontFamily: 'var(--font-manrope)', letterSpacing: '0.05em'}}
                >
                  {slides[currentSlide].cta}
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

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

      <div className="absolute bottom-8 right-8 text-secondary font-light text-lg z-10">
        <span className="text-2xl">{currentSlide + 1}</span> / {slides.length}
      </div>
    </section>
  )
}

export default HeroCarousel
