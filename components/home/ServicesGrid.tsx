'use client'

import { motion } from 'framer-motion'
import { FaFlag, FaGift, FaBolt, FaClock, FaCalendarCheck, FaShieldAlt } from 'react-icons/fa'

const services = [
  {
    icon: FaFlag,
    title: 'Made in Italy',
    description: 'Design e produzione italiana. Ogni pezzo è realizzato con cura artigianale da maestranze specializzate, garantendo qualità e stile inconfondibile.',
  },
  {
    icon: FaGift,
    title: 'Buono Sconto 1000€',
    description: 'Richiedi il catalogo gratuito e ricevi immediatamente un buono sconto di 1000€ per l\'acquisto del tuo nuovo soggiorno.',
  },
  {
    icon: FaBolt,
    title: 'Progettazione 3D',
    description: 'Visualizza il tuo soggiorno prima di acquistarlo. Offriamo progettazione 3D gratuita per aiutarti a immaginare il risultato finale.',
  },
  {
    icon: FaClock,
    title: 'Showroom Aperti 7/7',
    description: 'I nostri showroom sono aperti tutti i giorni per offrirti la massima flessibilità. Vieni quando è più comodo per te.',
  },
  {
    icon: FaCalendarCheck,
    title: 'Consulenza Personalizzata',
    description: 'Prenota una consulenza gratuita con un nostro designer. Ti seguiremo in ogni fase del progetto, dal concept alla realizzazione.',
  },
  {
    icon: FaShieldAlt,
    title: 'Garanzia 5 Anni',
    description: "Tutti i nostri soggiorni sono coperti da garanzia completa di 5 anni. Acquista con la massima tranquillità e sicurezza.",
  },
]

const ServicesGrid = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-gray-800">I Nostri Servizi</h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card p-8 text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 text-secondary mb-6">
                <service.icon className="text-3xl" />
              </div>
              <h3 className="text-lg font-normal text-gray-800 mb-4 tracking-wide">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed font-light">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesGrid

