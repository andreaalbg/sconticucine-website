'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import {
  MarketingConsentLabel,
  PrivacyConsentLabel,
} from '@/components/legal/ConsentLabels'
import {
  buildLeadFormData,
  submitWeb3Forms,
  WEB3FORMS_SUBJECTS,
} from '@/lib/web3forms'

interface CatalogFormProps {
  variant?: 'top' | 'bottom'
}

const CatalogForm = ({ variant = 'top' }: CatalogFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const botCheckRef = useRef<HTMLInputElement>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    marketingConsent: false,
    privacyConsent: false,
    campaign: '',
    gclid: '',
    fbclid: '',
    fonte: '',
    interesse: '',
  })

  useEffect(() => {
    if (typeof window === 'undefined') return
    const params = new URLSearchParams(window.location.search)
    const urlInteresse = (params.get('interesse') ?? '').trim()
    setFormData(prev => ({
      ...prev,
      campaign: params.get('utm_campaign') ?? params.get('campaign') ?? '',
      gclid: params.get('gclid') ?? '',
      fbclid: params.get('fbclid') ?? '',
      fonte: params.get('utm_source') ?? '',
      interesse: urlInteresse || prev.interesse,
    }))
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const run = async () => {
      if ((botCheckRef.current?.value ?? '').trim() !== '') {
        return
      }
      try {
        setIsSubmitting(true)
        const full = formData.name.trim()
        const parts = full.split(/\s+/).filter(Boolean)
        const nome = parts[0] ?? ''
        const cognome = parts.slice(1).join(' ')

        const fd = buildLeadFormData({
          subject:
            variant === 'bottom'
              ? WEB3FORMS_SUBJECTS.collezioniProgettazione
              : WEB3FORMS_SUBJECTS.collezioniCatalogo,
          nome,
          cognome,
          email: formData.email,
          telefono: formData.phone,
          provincia: '',
          comune: formData.city,
          gclid: formData.gclid,
          fbclid: formData.fbclid,
          fonte: formData.fonte,
          campaign: formData.campaign,
          marketingConsent: formData.marketingConsent,
          privacyConsent: formData.privacyConsent,
          botcheck: botCheckRef.current?.value ?? '',
          interesse: formData.interesse,
        })

        await submitWeb3Forms(fd)
        alert(
          variant === 'bottom'
            ? 'Grazie! Ti contatteremo per la progettazione gratuita.'
            : "Grazie! Riceverai il catalogo e l'extra sconto all'indirizzo email fornito.",
        )
        setFormData(prev => ({
          ...prev,
          name: '',
          email: '',
          phone: '',
          city: '',
          marketingConsent: false,
          privacyConsent: false,
        }))
      } catch (error) {
        console.error(error)
        alert('Si è verificato un errore durante l’invio. Riprova tra poco.')
      } finally {
        setIsSubmitting(false)
      }
    }
    void run()
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const title =
    variant === 'top'
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
            <input
              ref={botCheckRef}
              type="text"
              name="botcheck"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden
              defaultValue=""
              className="absolute h-px w-px overflow-hidden opacity-0"
            />
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

            <div className="mb-8 space-y-4">
              <label className="flex cursor-pointer items-start gap-3">
                <input
                  type="checkbox"
                  name="marketingConsent"
                  checked={formData.marketingConsent}
                  onChange={handleChange}
                  className="mt-1 h-5 w-5 rounded border-gray-300 text-primary focus:ring-primary"
                />
                <span className="text-sm text-gray-700">
                  <MarketingConsentLabel />
                </span>
              </label>
              <label className="flex cursor-pointer items-start gap-3">
                <input
                  type="checkbox"
                  name="privacyConsent"
                  required
                  checked={formData.privacyConsent}
                  onChange={handleChange}
                  className="mt-1 h-5 w-5 rounded border-gray-300 text-primary focus:ring-primary"
                />
                <span className="text-sm text-gray-700">
                  <PrivacyConsentLabel /> *
                </span>
              </label>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn-primary text-lg py-4 disabled:opacity-60 disabled:pointer-events-none"
            >
              {isSubmitting
                ? 'Invio in corso…'
                : variant === 'bottom'
                  ? 'Richiedi progettazione gratuita'
                  : 'Richiedi il Catalogo Gratuito'}
            </button>

            <p className="text-center text-sm text-gray-500 mt-4">* Campi obbligatori</p>
          </form>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-8"
          >
            <p className="text-lg text-gray-600 font-light">
              Catalogo completo via email
              <br />
              Extra sconto fino a <span className="text-sage-dark font-semibold">5.000€</span> incluso
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default CatalogForm
