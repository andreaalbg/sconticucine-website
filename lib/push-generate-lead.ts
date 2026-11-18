/** Push conversion event for GTM (AJAX forms do not always emit native form_submit). */
export function pushGenerateLead(formId: 'richiesta_catalogo' | 'richiesta_showroom') {
  if (typeof window === 'undefined') return
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({ event: 'generate_lead', form_id: formId })
}

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[]
  }
}
