import { WEB3FORMS_ACCESS_KEY_DEFAULT } from '@/lib/web3forms-config'

const WEB3FORMS_SUBMIT_URL = 'https://api.web3forms.com/submit'

export function getWeb3FormsAccessKey(): string {
  const fromEnv = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY?.trim()
  if (fromEnv) return fromEnv
  return WEB3FORMS_ACCESS_KEY_DEFAULT
}

/** Oggetto unificato per tutte le notifiche lead su Web3Forms */
export const WEB3FORMS_LEAD_SUBJECT = 'Nuovo lead - Atelier Cucine Moderne'

export function consentSiNo(value: boolean): 'Sì' | 'No' {
  return value ? 'Sì' : 'No'
}

/** Imposta `access_key`, invia a Web3Forms; lancia in caso di errore di rete o risposta API. */
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
