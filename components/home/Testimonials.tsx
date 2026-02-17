'use client'

import { motion } from 'framer-motion'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'

const testimonials = [
  {
    id: 1,
    name: 'Marco Rossi',
    text: 'Soggiorno straordinario! La qualità dei materiali e l\'attenzione ai dettagli sono evidenti. Il designer ci ha seguito passo dopo passo, creando uno spazio che rispecchia perfettamente il nostro stile di vita. Montaggio impeccabile.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Laura Bianchi',
    text: 'Esperienza eccellente dall\'inizio alla fine. Il team di AreaLivingDesign è stato professionale e disponibile. Hanno trasformato il nostro living in uno spazio elegante e funzionale. Consigliatissimo per chi cerca qualità italiana e servizio impeccabile.',
    rating: 5,
  },
]

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-gray-800">Cosa Dicono i Nostri Clienti</h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-xl p-8 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-accent">
                <FaQuoteLeft className="text-5xl" />
              </div>

              {/* Rating */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-primary text-xl" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 leading-relaxed mb-6 relative z-10 font-light">
                {testimonial.text}
              </p>

              {/* Author */}
              <div className="border-t border-gray-200 pt-4">
                <p className="font-normal text-gray-800 text-lg">
                  {testimonial.name}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
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

