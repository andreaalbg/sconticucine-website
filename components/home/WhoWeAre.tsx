'use client'

import { motion } from 'framer-motion'
import { FaUserTie, FaTag, FaTruck } from 'react-icons/fa'

const features = [
  {
    icon: FaUserTie,
    title: 'Designer Dedicato',
    description: 'Un designer professionista dedicato al tuo progetto ti seguirà in ogni fase, dalla progettazione 3D alla realizzazione finale della tua cucina su misura.',
  },
  {
    icon: FaTag,
    title: 'Extra Sconto fino a 5.000€',
    description: 'Richiedi il catalogo gratuito e ricevi un extra sconto fino a 5.000€ sulla tua nuova cucina. Finanziamento a interessi zero e garanzia 5 anni inclusa.',
  },
  {
    icon: FaTruck,
    title: 'Servizio Completo',
    description: 'Trasporto, montaggio e ritiro dell\'usato inclusi nel prezzo. Ci occupiamo di tutto, dalla consegna all\'installazione, con massima cura e attenzione.',
  },
]

const WhoWeAre = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Chi Siamo</h2>
          <p className="section-subtitle">
            Sconti Cucine è il punto di riferimento per chi cerca cucine di qualità Made in Italy 
            a prezzi accessibili. Selezioniamo le migliori materie prime e ti accompagniamo nella scelta 
            della cucina perfetta con consulenza personalizzata e servizi pensati per te
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent text-secondary mb-6 shadow-sm">
                <feature.icon className="text-3xl" />
              </div>
              <h3 className="text-xl font-light mb-4 tracking-wide" style={{fontFamily: 'var(--font-manrope)', color: '#6B655B'}}>
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed font-light" style={{fontFamily: 'var(--font-manrope)'}}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhoWeAre
