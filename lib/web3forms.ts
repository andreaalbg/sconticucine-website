const WEB3FORMS_SUBMIT_URL = 'https://api.web3forms.com/submit'

export const WEB3FORMS_ACCESS_KEY = '541a4e69-84ff-406d-b32b-52a087483a8c'

/** Oggetto unificato per tutte le notifiche lead su Web3Forms */
export const WEB3FORMS_LEAD_SUBJECT = 'Nuovo lead - Atelier Cucine Moderne'

/** Imposta `access_key`, invia a Web3Forms; lancia in caso di errore di rete o risposta API. */
export async function submitWeb3Forms(formData: FormData): Promise<void> {
  formData.set('access_key', WEB3FORMS_ACCESS_KEY)
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
