'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const products = [
  {
    id: 1,
    title: 'Cucine Moderne',
    discount: '-35%',
    image: '/images/hero-1.jpg',
    alt: 'Cucina Moderna - Design contemporaneo con linee pulite e materiali premium',
  },
  {
    id: 2,
    title: 'Cucine Classiche',
    discount: '-30%',
    image: '/images/hero-2.jpg',
    alt: 'Cucina Classica - Eleganza senza tempo e finiture ricercate',
  },
  {
    id: 3,
    title: 'Cucine Su Misura',
    discount: '-40%',
    image: '/images/hero-3.jpg',
    alt: 'Cucina Su Misura - Configurazione libera con oltre 100 finiture',
  },
]

const ProductShowcase = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-gray-800">Le Nostre Cucine</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card group cursor-pointer"
            >
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                <div className="absolute top-4 right-4 bg-sage text-white font-normal text-xl py-2 px-5 rounded-lg shadow-md z-10">
                  {product.discount}
                </div>

                <div className="absolute inset-0 bg-gray-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                  <button className="bg-white text-secondary font-normal py-3 px-8 rounded-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-lg">
                    Scopri di Più
                  </button>
                </div>
              </div>

              <div className="p-6 bg-white">
                <h3 className="text-xl font-normal text-gray-800 tracking-wide text-center">
                  {product.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductShowcase
