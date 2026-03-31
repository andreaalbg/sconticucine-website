'use client'

import { motion } from 'framer-motion'
import {
  FaBolt,
  FaCertificate,
  FaCheckCircle,
  FaClipboardCheck,
  FaCouch,
  FaHandHoldingUsd,
  FaLeaf,
  FaRecycle,
  FaRulerCombined,
  FaShieldAlt,
  FaTruck,
} from 'react-icons/fa'

const services = [
  {
    icon: FaBolt,
    title: 'Consulenza & Progettazione 3D Gratuita',
    description: 'Consulenza dedicata e progettazione 3D gratuita per visualizzare la tua cucina nel tuo ambiente prima di decidere.',
  },
  {
    icon: FaRulerCombined,
    title: 'Rilievo Misure Gratuito',
    description: 'Un tecnico effettua il rilievo misure a domicilio (gratuito) per progettare una cucina perfettamente su misura.',
  },
  {
    icon: FaShieldAlt,
    title: 'Garanzia 5 Anni',
    description: 'Garanzia completa di 5 anni per acquistare con tranquillità.',
  },
  {
    icon: FaCertificate,
    title: 'Certificato ISO 9001',
    description: 'Processi e standard di qualità certificati ISO 9001.',
  },
  {
    icon: FaRecycle,
    title: 'Ritiro & Smaltimento dell’Usato',
    description: 'Servizio disponibile su richiesta per smaltire la tua vecchia cucina in modo semplice.',
  },
  {
    icon: FaLeaf,
    title: 'Ecosostenibilità',
    description: 'Materiali e infrastrutture ecosostenibili, con attenzione all’impatto ambientale.',
  },
  {
    icon: FaCouch,
    title: 'Realizzazione Cucine su Misura',
    description: 'Progettiamo e realizziamo cucine su misura per ogni esigenza di spazio e stile.',
  },
  {
    icon: FaCheckCircle,
    title: 'Pronta Consegna',
    description: 'Soluzioni selezionate disponibili anche in pronta consegna.',
  },
  {
    icon: FaTruck,
    title: 'Consegna & Montaggio Specializzati',
    description: 'Su richiesta, consegna e montaggio effettuati da falegnami esperti specializzati. Trasporto e montaggio non sono inclusi nel prezzo.',
  },
  {
    icon: FaHandHoldingUsd,
    title: 'Finanziamento Interessi Zero',
    description: 'Possibilità di finanziamento a interessi zero per rendere l’acquisto più semplice.',
  },
  {
    icon: FaClipboardCheck,
    title: 'Extra Sconto fino a 5.000€',
    description: 'Richiedi il catalogo gratuito e ricevi un extra sconto fino a 5.000€ sulla tua nuova cucina.',
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
