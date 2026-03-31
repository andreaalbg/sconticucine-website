'use client'

import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaPhone, FaClock } from 'react-icons/fa'
import ShowroomForm from './ShowroomForm'

const StoreLocator = () => {
  return (
    <section id="showroom" className="py-20 bg-secondary-dark text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-light mb-6 font-heading tracking-wide">
            Vieni a Trovarci
          </h2>

          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Ci trovi in molte zone d&apos;Italia! Compila il form per trovare lo showroom più vicino
            a te.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <FaMapMarkerAlt className="text-5xl text-white/80 mb-4" />
              <h3 className="text-xl font-normal mb-2">Showroom in Italia</h3>
              <p className="text-white/70 font-light">In molte zone del Paese</p>
            </div>

            <div className="flex flex-col items-center">
              <FaClock className="text-5xl text-white/80 mb-4" />
              <h3 className="text-xl font-normal mb-2">Aperti 7/7</h3>
              <p className="text-white/70 font-light">Quando vuoi</p>
            </div>

            <div className="flex flex-col items-center">
              <FaPhone className="text-5xl text-white/80 mb-4" />
              <h3 className="text-xl font-normal mb-2">Consulenza</h3>
              <p className="text-white/70 font-light">Gratuita e personalizzata</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
            <a
              href="#showroom"
              className="bg-white text-secondary hover:bg-gray-100 font-normal py-4 px-10 rounded-lg text-lg shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Trova Showroom
            </a>
            <a
              href="#showroom"
              className="bg-sage hover:bg-sage-dark text-white font-normal py-4 px-10 rounded-lg text-lg shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Voglio essere ricontattato
            </a>
          </div>

          <div className="max-w-2xl mx-auto">
            <ShowroomForm />
          </div>

          <div className="mt-12 pt-12 border-t border-white/20">
            <p className="text-lg text-white/90 font-light">
              Extra sconto fino a{' '}
              <span className="text-sage-light font-semibold">5.000€</span> richiedendo il catalogo
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default StoreLocator
