'use client'

import { motion } from 'framer-motion'
import { FaFlag, FaGift, FaBolt, FaClock, FaCalendarCheck, FaShieldAlt, FaLeaf, FaCertificate } from 'react-icons/fa'

const services = [
  {
    icon: FaFlag,
    title: 'Made in Italy',
    description: 'Design e produzione italiana. Ogni cucina è realizzata con cura artigianale da maestranze specializzate, garantendo qualità e stile inconfondibile.',
  },
  {
    icon: FaGift,
    title: 'Extra Sconto fino a 1.000€',
    description: 'Richiedi il catalogo gratuito e ricevi immediatamente un extra sconto fino a 1.000€ per l\'acquisto della tua nuova cucina.',
  },
  {
    icon: FaBolt,
    title: 'Progettazione 3D',
    description: 'Visualizza la tua cucina prima di acquistarla. Offriamo progettazione 3D gratuita per aiutarti a immaginare il risultato finale nel tuo ambiente.',
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
    description: 'Tutte le nostre cucine sono coperte da garanzia completa di 5 anni. Acquista con la massima tranquillità e sicurezza.',
  },
  {
    icon: FaLeaf,
    title: 'Impegno Ecologico',
    description: 'Sono molte le azioni che mettiamo in campo ogni giorno per tutelare l\'ambiente e il tuo benessere, dai materiali eco-friendly ai processi sostenibili.',
  },
  {
    icon: FaCertificate,
    title: 'Certificazione ISO 9001',
    description: 'Abbiamo ottenuto la certificazione di qualità ISO 9001, garanzia di processi e standard elevati in ogni fase della produzione.',
  },
]

const ServicesGrid = () => {
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
          <h2 className="section-title text-gray-800">I Nostri Servizi</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card p-8 text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent text-secondary mb-6">
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
