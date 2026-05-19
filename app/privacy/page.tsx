import type { Metadata } from 'next'
import Link from 'next/link'
import PrivacyPolicyBody from '@/components/legal/PrivacyPolicyBody'

export const metadata: Metadata = {
  title: 'Privacy Policy | Atelier Cucine Moderne',
  description:
    'Informativa privacy ex artt. 13-14 del Regolamento UE 2016/679 (GDPR) per il trattamento dei dati personali — G.A. SRL.',
  alternates: {
    canonical: '/privacy',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#f5f0ea] text-[#1a1a1a]">
      <header className="border-b border-[#e8e0d6] bg-white/95 px-6 py-5 backdrop-blur-md md:px-10">
        <div className="mx-auto flex w-full max-w-4xl items-center justify-between gap-6">
          <Link
            href="/"
            className="font-serif text-sm tracking-[0.35em] text-[#1a1a1a] transition-opacity hover:opacity-70 md:text-base"
          >
            ATELIER CUCINE MODERNE
          </Link>
          <Link
            href="/"
            className="text-[11px] uppercase tracking-[0.18em] text-[#666] transition-colors hover:text-[#1a1a1a]"
          >
            ← Torna al sito
          </Link>
        </div>
      </header>

      <main className="mx-auto w-full max-w-4xl px-6 py-14 md:px-10 md:py-20">
        <p className="text-[11px] uppercase tracking-[0.28em] text-[#2a7a6e]">
          Privacy policy
        </p>
        <h1 className="mt-3 font-serif text-4xl leading-tight text-[#1a1a1a] md:text-5xl">
          Informativa sulla privacy
        </h1>
        <p className="mt-4 text-sm text-[#666]">
          Ultimo aggiornamento: 05 maggio 2026
        </p>

        <div className="mt-12">
          <PrivacyPolicyBody />
        </div>
      </main>

      <footer className="border-t border-[#e8e0d6] bg-[#0d0d0d] px-6 py-8 text-center text-xs text-[#9d9388] md:px-10">
        <p>© {new Date().getFullYear()} Atelier Cucine Moderne · G.A. SRL</p>
        <p className="mt-3">
          <Link href="/" className="text-[#c4a87a] hover:text-white">
            Torna alla home
          </Link>
        </p>
      </footer>
    </div>
  )
}

