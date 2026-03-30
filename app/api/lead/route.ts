import { Resend } from 'resend'
import { NextResponse } from 'next/server'

type LeadPayload = {
  firstName: string
  lastName: string
  email: string
  phone: string
  provincia: string
  comune: string
  interesse?: string
  gclid?: string
  fbclid?: string
  campaign?: string
  fonte: string
  variant?: 'showroom' | 'catalogo'
}

function asNonEmptyString(value: unknown): string | null {
  if (typeof value !== 'string') return null
  const trimmed = value.trim()
  return trimmed.length > 0 ? trimmed : null
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Partial<LeadPayload>

    const firstName = asNonEmptyString(body.firstName)
    const lastName = asNonEmptyString(body.lastName)
    const email = asNonEmptyString(body.email)
    const phone = asNonEmptyString(body.phone)
    const provincia = asNonEmptyString(body.provincia)
    const comune = asNonEmptyString(body.comune)
    const fonte = asNonEmptyString(body.fonte)

    if (!firstName || !lastName || !email || !phone || !provincia || !comune || !fonte) {
      return NextResponse.json(
        { ok: false, error: 'Missing required fields' },
        { status: 400 },
      )
    }

    const resendApiKey = process.env.RESEND_API_KEY
    const to = process.env.LEADS_TO_EMAIL
    const from = process.env.LEADS_FROM_EMAIL

    if (!resendApiKey || !to || !from) {
      return NextResponse.json(
        { ok: false, error: 'Email is not configured' },
        { status: 500 },
      )
    }

    const resend = new Resend(resendApiKey)

    const lines: string[] = [
      `Nome: ${firstName}`,
      `Cognome: ${lastName}`,
      `Email: ${email}`,
      `Telefono: ${phone}`,
      `Provincia: ${provincia}`,
      `Comune: ${comune}`,
      `Gclid: ${body.gclid ?? ''}`,
      `Fbclid: ${body.fbclid ?? ''}`,
      `Fonte: ${fonte}`,
    ]

    const interesse = asNonEmptyString(body.interesse)
    if (interesse) lines.push(`Interesse: ${interesse}`)

    const campaign = asNonEmptyString(body.campaign)
    if (campaign) lines.push(`Campaign: ${campaign}`)

    const variant = body.variant === 'catalogo' ? 'catalogo' : 'showroom'

    const subject =
      variant === 'catalogo'
        ? `Nuova richiesta catalogo — ${firstName} ${lastName}`
        : `Nuova richiesta showroom — ${firstName} ${lastName}`

    const { error } = await resend.emails.send({
      from,
      to,
      subject,
      text: lines.join('\n'),
      replyTo: email,
    })

    if (error) {
      return NextResponse.json({ ok: false, error: error.message }, { status: 502 })
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error'
    return NextResponse.json({ ok: false, error: message }, { status: 500 })
  }
}

