import Link from 'next/link'

const privacyLinkClass =
  'underline decoration-[#2a7a6e] underline-offset-2 hover:text-[#2a7a6e]'

/** Flag 1 — facoltativo, marketing */
export function MarketingConsentLabel() {
  return (
    <>
      Esprimo il consenso ad essere ricontattato per comunicazioni commerciali e
      pubblicitarie, come descritto nell&apos;
      <Link href="/privacy" className={privacyLinkClass}>
        informativa sulla privacy
      </Link>
    </>
  )
}

/** Flag 2 — obbligatorio, gestione richiesta */
export function PrivacyConsentLabel() {
  return (
    <>
      Esprimo il consenso al trattamento dei miei dati secondo{' '}
      <Link href="/privacy" className={privacyLinkClass}>
        informativa sulla privacy
      </Link>
    </>
  )
}
