'use client'

import { motion } from 'framer-motion'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'

const testimonials = [
  {
    id: 1,
    name: 'Francesca Bianchi',
    city: 'Milano',
    text: 'Esperienza fantastica! Il consulente è stato pazientissimo e mi ha aiutata a trovare la cucina perfetta per il mio appartamento. La consegna è stata puntuale e il montaggio impeccabile. Consigliatissimo!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Marco Verdi',
    city: 'Roma',
    text: 'Ho apprezzato molto il servizio di rilievo misure a domicilio e la progettazione 3D. Vedere la cucina nel mio ambiente prima dell\'acquisto mi ha tolto ogni dubbio. Qualità eccellente e prezzo competitivo.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Anna Colombo',
    city: 'Torino',
    text: 'Terzo acquisto in questo showroom e sempre soddisfatta. Il ritiro della vecchia cucina è stato comodo e veloce. La nuova cucina è ancora più bella di come appariva nel rendering 3D. Top!',
    rating: 5,
  },
]

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-gray-800">Cosa Dicono di Noi</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-xl p-8 relative"
            >
              <div className="absolute top-6 right-6 text-accent">
                <FaQuoteLeft className="text-5xl" />
              </div>

              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-sage text-xl" />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed mb-6 relative z-10 font-light">
                {testimonial.text}
              </p>

              <div className="border-t border-gray-200 pt-4">
                <p className="font-normal text-gray-800 text-lg">
                  {testimonial.name}
                </p>
                <p className="text-sm text-gray-500">{testimonial.city}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="#stores"
            className="inline-block bg-secondary hover:bg-secondary-dark text-white font-normal py-4 px-10 rounded-lg text-lg shadow-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            Visita i Nostri Showroom
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
