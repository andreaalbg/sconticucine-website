'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface CatalogFormProps {
  variant?: 'top' | 'bottom'
}

const CatalogForm = ({ variant = 'top' }: CatalogFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    privacy: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert("Grazie! Riceverai il catalogo e l'extra sconto all'indirizzo email fornito.")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const title = variant === 'top' 
    ? 'Richiedi il Catalogo Gratuito'
    : 'Progettazione Gratuita della Tua Cucina'

  return (
    <section id="catalog" className={`py-20 ${variant === 'top' ? 'bg-gray-50' : 'bg-primary/5'}`}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="section-title text-gray-800 mb-12">{title}</h2>

          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Nome e Cognome *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="Il tuo nome completo"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="tua@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Telefono *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="Il tuo numero di telefono"
                />
              </div>

              <div>
                <label htmlFor="city" className="block text-sm font-semibold text-gray-700 mb-2">
                  Città *
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  required
                  value={formData.city}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="La tua città"
                />
              </div>
            </div>

            <div className="mb-8">
              <label className="flex items-start space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="privacy"
                  required
                  checked={formData.privacy}
                  onChange={handleChange}
                  className="mt-1 w-5 h-5 text-primary border-gray-300 rounded focus:ring-primary"
                />
                <span className="text-sm text-gray-700">
                  <strong>Ho letto l&apos;informativa privacy</strong> e acconsento al trattamento dei miei dati personali *
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full btn-primary text-lg py-4"
            >
              Richiedi il Catalogo Gratuito
            </button>

            <p className="text-center text-sm text-gray-500 mt-4">
              * Campi obbligatori
            </p>
          </form>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-8"
          >
            <p className="text-lg text-gray-600 font-light">
              Catalogo completo via email<br />
              Extra sconto fino a <span className="text-sage-dark font-semibold">5.000€</span> incluso
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default CatalogForm
