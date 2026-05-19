import { WEB3FORMS_ACCESS_KEY_DEFAULT } from '@/lib/web3forms-config'

const WEB3FORMS_SUBMIT_URL = 'https://api.web3forms.com/submit'

export function getWeb3FormsAccessKey(): string {
  const fromEnv = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY?.trim()
  if (fromEnv) return fromEnv
  return WEB3FORMS_ACCESS_KEY_DEFAULT
}

/** Subject diverso per origine del lead (unica variazione rispetto allo schema JSON). */
export const WEB3FORMS_SUBJECTS = {
  homeCatalogo: 'Nuovo lead - Atelier Cucine Moderne · Home catalogo',
  homeShowroom: 'Nuovo lead - Atelier Cucine Moderne · Home showroom',
  collezioniCatalogo: 'Nuovo lead - Atelier Cucine Moderne · Collezioni catalogo',
  collezioniProgettazione:
    'Nuovo lead - Atelier Cucine Moderne · Collezioni progettazione',
} as const

/** @deprecated Usare WEB3FORMS_SUBJECTS */
export const WEB3FORMS_LEAD_SUBJECT = WEB3FORMS_SUBJECTS.homeCatalogo

export function consentSiNo(value: boolean): 'Sì' | 'No' {
  return value ? 'Sì' : 'No'
}

/** Campi lead inviati a Web3Forms (stesso schema JSON su tutti i form). */
export type Web3FormsLeadInput = {
  subject: string
  nome: string
  cognome: string
  email: string
  telefono: string
  provincia?: string
  comune?: string
  gclid?: string
  fbclid?: string
  fonte?: string
  campaign?: string
  marketingConsent: boolean
  privacyConsent: boolean
  botcheck?: string
  interesse?: string
}

/**
 * Costruisce FormData con le chiavi attese da Web3Forms.
 * `access_key` viene aggiunto in `submitWeb3Forms`.
 */
export function buildLeadFormData(fields: Web3FormsLeadInput): FormData {
  const nome = fields.nome.trim()
  const cognome = fields.cognome.trim()
  const email = fields.email.trim()

  const fd = new FormData()
  fd.set('subject', fields.subject)
  fd.set('from_name', `${nome} ${cognome}`.trim())
  fd.set('replyto', email)
  fd.set('email', email)
  fd.set('Nome', nome)
  fd.set('Cognome', cognome)
  fd.set('Email', email)
  fd.set('Telefono', fields.telefono.trim())
  fd.set('Provincia', (fields.provincia ?? '').trim())
  fd.set('Comune', (fields.comune ?? '').trim())
  fd.set('Gclid', (fields.gclid ?? '').trim())
  fd.set('Fbclid', (fields.fbclid ?? '').trim())
  fd.set('Fonte', (fields.fonte ?? '').trim())
  fd.set('Campaign', (fields.campaign ?? '').trim())
  fd.set('MarketingConsent', consentSiNo(fields.marketingConsent))
  fd.set('PrivacyConsent', consentSiNo(fields.privacyConsent))
  fd.set('botcheck', (fields.botcheck ?? '').trim())

  const interesse = (fields.interesse ?? '').trim()
  if (interesse) {
    fd.set('Interesse', interesse)
  }

  return fd
}

export async function submitWeb3Forms(formData: FormData): Promise<void> {
  formData.set('access_key', getWeb3FormsAccessKey())
  const res = await fetch(WEB3FORMS_SUBMIT_URL, {
    method: 'POST',
    body: formData,
  })
  if (!res.ok) {
    throw new Error('Invio non riuscito')
  }
  const json = (await res.json()) as { success?: boolean; message?: string }
  if (!json.success) {
    throw new Error(json.message ?? 'Invio non riuscito')
  }
}
