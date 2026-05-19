import Script from 'next/script'
import {
  ACCONSENTO_SCRIPT_KEY,
  ACCONSENTO_SCRIPT_SRC,
} from '@/lib/acconsento-config'

/** Consent Mode v2: default denied fino a scelta utente (prima di GTM / tag). */
export function GoogleConsentModeDefaults() {
  return (
    <Script id="google-consent-default" strategy="beforeInteractive">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('consent', 'default', {
          ad_storage: 'denied',
          ad_user_data: 'denied',
          ad_personalization: 'denied',
          analytics_storage: 'denied',
          functionality_storage: 'granted',
          personalization_storage: 'denied',
          security_storage: 'granted',
          wait_for_update: 500
        });
      `}
    </Script>
  )
}

/** CMP Acconsento + integrazione GTM (carica i tag dopo il consenso). */
export function AcconsentoScript() {
  return (
    <Script
      id="acconsento-script"
      src={ACCONSENTO_SCRIPT_SRC}
      strategy="beforeInteractive"
      data-key={ACCONSENTO_SCRIPT_KEY}
    />
  )
}
