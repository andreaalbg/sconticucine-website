'use client'

import { useEffect, useMemo, useState } from 'react'

type ComuneRecord = {
  nome: string
  sigla: string
  provincia: {
    codice: string
    nome: string
  }
}

type ProvinceOption = {
  sigla: string
  nome: string
}

const SHOWROOM_DATA_URL = '/comuni.json'

const showroomInterests = [
  'Cucine Moderne',
  'Cucine Classiche',
  'Cucine Componibili',
  'Cucine Su Misura',
  'Cucine ad Angolo',
  'Altro',
]

const ShowroomForm = () => {
  const [comuni, setComuni] = useState<ComuneRecord[]>([])
  const [loadingComuni, setLoadingComuni] = useState(false)
  const [loadError, setLoadError] = useState<string | null>(null)

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    provincia: '',
    comune: '',
    interesse: '',
    marketingConsent: false,
    privacyConsent: false,
  })

  useEffect(() => {
    const loadComuni = async () => {
      try {
        setLoadingComuni(true)
        setLoadError(null)
        const res = await fetch(SHOWROOM_DATA_URL)
        if (!res.ok) {
          throw new Error('Impossibile caricare i dati dei comuni')
        }
        const data = (await res.json()) as ComuneRecord[]
        setComuni(data)
      } catch (error) {
        console.error(error)
        setLoadError('Non è stato possibile caricare l’elenco dei comuni.')
      } finally {
        setLoadingComuni(false)
      }
    }

    loadComuni()
  }, [])

  const provinceOptions: ProvinceOption[] = useMemo(() => {
    const map = new Map<string, string>()
    comuni.forEach(c => {
      if (!map.has(c.sigla)) {
        map.set(c.sigla, c.provincia.nome)
      }
    })
    return Array.from(map.entries())
      .map(([sigla, nome]) => ({ sigla, nome }))
      .sort((a, b) => a.nome.localeCompare(b.nome, 'it'))
  }, [comuni])

  const comuniForProvincia = useMemo(() => {
    if (!formData.provincia) return []
    return comuni
      .filter(c => c.sigla === formData.provincia)
      .map(c => c.nome)
      .sort((a, b) => a.localeCompare(b, 'it'))
  }, [comuni, formData.provincia])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
      ...(name === 'provincia' ? { comune: '' } : null),
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Showroom form submitted:', formData)
    alert(
      'Grazie! Ti contatteremo per indicarti lo showroom più vicino alla tua zona.',
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-10 rounded-2xl border border-[#e0d6ca] bg-white p-8 md:p-10 shadow-xl"
    >
      <h3 className="font-serif text-2xl text-[#1a1a1a]">
        Trova lo showroom più vicino
      </h3>
      <p className="mt-2 text-sm text-[#666]">
        Compila il form e ti indicheremo il punto vendita più comodo per te.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div>
          <label
            htmlFor="firstName"
            className="mb-1.5 block text-[10px] uppercase tracking-[0.14em] text-[#888]"
          >
            Nome *
          </label>
          <input
            id="firstName"
            type="text"
            name="firstName"
            required
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Il tuo nome"
            className="w-full rounded-md border border-[#ddd] bg-white px-4 py-3 text-sm text-[#1a1a1a] outline-none transition-all placeholder:text-[#bbb] focus:border-[#2a7a6e]"
          />
        </div>

        <div>
          <label
            htmlFor="lastName"
            className="mb-1.5 block text-[10px] uppercase tracking-[0.14em] text-[#888]"
          >
            Cognome *
          </label>
          <input
            id="lastName"
            type="text"
            name="lastName"
            required
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Il tuo cognome"
            className="w-full rounded-md border border-[#ddd] bg-white px-4 py-3 text-sm text-[#1a1a1a] outline-none transition-all placeholder:text-[#bbb] focus:border-[#2a7a6e]"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="mb-1.5 block text-[10px] uppercase tracking-[0.14em] text-[#888]"
          >
            Telefono *
          </label>
          <input
            id="phone"
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="+39 000 000 0000"
            className="w-full rounded-md border border-[#ddd] bg-white px-4 py-3 text-sm text-[#1a1a1a] outline-none transition-all placeholder:text-[#bbb] focus:border-[#2a7a6e]"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-1.5 block text-[10px] uppercase tracking-[0.14em] text-[#888]"
          >
            Email *
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="tua@email.com"
            className="w-full rounded-md border border-[#ddd] bg-white px-4 py-3 text-sm text-[#1a1a1a] outline-none transition-all placeholder:text-[#bbb] focus:border-[#2a7a6e]"
          />
        </div>

        <div>
          <label
            htmlFor="provincia"
            className="mb-1.5 block text-[10px] uppercase tracking-[0.14em] text-[#888]"
          >
            Provincia *
          </label>
          <select
            id="provincia"
            name="provincia"
            required
            value={formData.provincia}
            onChange={handleChange}
            className="w-full rounded-md border border-[#ddd] bg-white px-4 py-3 text-sm text-[#1a1a1a] outline-none transition-all focus:border-[#2a7a6e]"
          >
            <option value="" disabled>
              Seleziona la provincia
            </option>
            {provinceOptions.map(p => (
              <option key={p.sigla} value={p.sigla}>
                {p.sigla} - {p.nome}
              </option>
            ))}
          </select>
          {loadingComuni && (
            <p className="mt-1 text-xs text-[#999]">
              Caricamento elenco province in corso...
            </p>
          )}
          {loadError && (
            <p className="mt-1 text-xs text-red-600">{loadError}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="comune"
            className="mb-1.5 block text-[10px] uppercase tracking-[0.14em] text-[#888]"
          >
            Città (Comune) *
          </label>
          <select
            id="comune"
            name="comune"
            required
            value={formData.comune}
            onChange={handleChange}
            disabled={!formData.provincia || comuniForProvincia.length === 0}
            className="w-full rounded-md border border-[#ddd] bg-white px-4 py-3 text-sm text-[#1a1a1a] outline-none transition-all disabled:bg-gray-100 disabled:text-[#aaa] focus:border-[#2a7a6e]"
          >
            <option value="" disabled>
              {formData.provincia
                ? 'Seleziona il comune'
                : 'Seleziona prima la provincia'}
            </option>
            {comuniForProvincia.map(nomeComune => (
              <option key={nomeComune} value={nomeComune}>
                {nomeComune}
              </option>
            ))}
          </select>
        </div>

        <div className="md:col-span-2">
          <label
            htmlFor="interesse"
            className="mb-1.5 block text-[10px] uppercase tracking-[0.14em] text-[#888]"
          >
            Interesse (opzionale)
          </label>
          <select
            id="interesse"
            name="interesse"
            value={formData.interesse}
            onChange={handleChange}
            className="w-full rounded-md border border-[#ddd] bg-white px-4 py-3 text-sm text-[#1a1a1a] outline-none transition-all focus:border-[#2a7a6e]"
          >
            <option value="">Seleziona…</option>
            {showroomInterests.map(option => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-5 space-y-3">
        <label className="flex cursor-pointer items-start gap-3 text-xs text-[#777]">
          <input
            type="checkbox"
            name="marketingConsent"
            checked={formData.marketingConsent}
            onChange={handleChange}
            className="mt-0.5 h-4 w-4 rounded border-[#ccc] accent-[#2a7a6e]"
          />
          <span>
            Esprimo il consenso ad essere ricontattato per comunicazioni
            commerciali e pubblicitarie con modalità di contatto automatizzate o
            tradizionali via sms, telefono, email, newsletter.
          </span>
        </label>

        <label className="flex cursor-pointer items-start gap-3 text-xs text-[#777]">
          <input
            type="checkbox"
            name="privacyConsent"
            required
            checked={formData.privacyConsent}
            onChange={handleChange}
            className="mt-0.5 h-4 w-4 rounded border-[#ccc] accent-[#2a7a6e]"
          />
          <span>
            Esprimo il consenso al trattamento dell&apos;informativa{' '}
            <a
              href="/privacy"
              className="underline decoration-[#2a7a6e] underline-offset-2 hover:text-[#2a7a6e]"
            >
              privacy
            </a>
            . *
          </span>
        </label>
      </div>

      <button
        type="submit"
        className="luxury-button mt-7 w-full rounded-md bg-[#1a1a1a] px-6 py-4 text-[11px] uppercase tracking-[0.2em] text-white transition-all hover:bg-[#2a7a6e]"
      >
        Trova lo showroom
      </button>

      <p className="mt-3 text-center text-xs text-[#999]">
        * Campo obbligatorio
      </p>
    </form>
  )
}

export default ShowroomForm

