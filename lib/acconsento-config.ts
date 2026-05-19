/** Cookie policy ospitata su Acconsento (dominio ateliercucinemoderne.it). */
export const ACCONSENTO_COOKIE_POLICY_URL =
  'https://accesso.acconsento.click/cookies/page/it/11093'

/** Chiave script CMP; override con NEXT_PUBLIC_ACCONSENTO_SCRIPT_KEY in produzione. */
export const ACCONSENTO_SCRIPT_KEY =
  process.env.NEXT_PUBLIC_ACCONSENTO_SCRIPT_KEY ??
  'PJDMdkLTAl5QGOEUyM8BF4f7vW0m1METrggKiTRy04ec0b6b'

export const ACCONSENTO_SCRIPT_SRC = 'https://acconsento.click/script-gtm.js'
