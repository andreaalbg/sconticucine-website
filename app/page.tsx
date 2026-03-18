'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { FaFacebookF, FaInstagram, FaPinterestP, FaStar } from 'react-icons/fa'
import ShowroomForm from '@/components/home/ShowroomForm'

// URL-encoded image paths
const IMG = {
  c1:  '/images/foto%20cucine%20AI/cucina%201%2016-9.png',
  c2:  '/images/foto%20cucine%20AI/Cucina%202%2016_9.png',
  c3:  '/images/foto%20cucine%20AI/Cucina%203%2016_9.png',
  c4l: '/images/foto%20cucine%20AI/Cucina%204%2016_9.png',
  c8:  '/images/foto%20cucine%20AI/Cucina%208.png',
  c4s: '/images/foto%20cucine%20AI/cucina%204.png',
  c5:  '/images/foto%20cucine%20AI/cucina%205.png',
  c2s: '/images/foto%20cucine%20AI/Cucina%202%201_1%20bis.jpg',
  c3s: '/images/foto%20cucine%20AI/Cucina%203%201_1.png',
}

const navLinks = [
  { href: '#chi-siamo', label: 'Chi Siamo' },
  { href: '#cucine', label: 'Cucine' },
  { href: '#servizi', label: 'Servizi' },
  { href: '#showroom', label: 'Showroom' },
  { href: '#contatti', label: 'Contatti' },
]

const serviceCards = [
  {
    title: 'Progettazione 3D',
    subtitle: 'Visualizza la tua cucina prima dell\'acquisto',
    gradient: 'from-[#b39a7d] via-[#94755f] to-[#5e4b3f]',
    className: 'md:col-span-2',
  },
  {
    title: 'Rilievo Misure',
    subtitle: 'Tecnico a domicilio gratuito',
    gradient: 'from-[#bea88f] via-[#9d866a] to-[#66503f]',
    className: '',
  },
  {
    title: 'Consegna e Montaggio',
    subtitle: 'Squadra specializzata, tutto incluso',
    image: null,
    gradient: 'from-[#4c857b] via-[#2a7a6e] to-[#1d6b60]',
    className: 'md:row-span-2',
  },
  {
    title: 'Ritiro dell\'Usato',
    subtitle: 'Smaltimento senza pensieri',
    gradient: 'from-[#c4b19a] via-[#a18d73] to-[#6f5a45]',
    className: '',
  },
  {
    title: 'Garanzia 5 Anni',
    subtitle: 'Qualità certificata ISO 9001',
    gradient: 'from-[#ab967e] via-[#8c7358] to-[#5d4d39]',
    className: '',
  },
]

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -5% 0px' },
    )
    document.querySelectorAll('.reveal-on-scroll').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="bg-[#f5f0ea] text-[#1a1a1a]">

      {/* ─── Header ──────────────────────────────────────────── */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'border-b border-white/10 bg-[#0d0d0d]/92 py-4 backdrop-blur-md'
            : 'bg-transparent py-7'
        }`}
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 md:px-10">
          <a href="#home" className="font-serif text-lg tracking-[0.5em] text-white transition-opacity hover:opacity-70">
            SCONTI CUCINE
          </a>
          <nav className="hidden items-center gap-9 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[11px] uppercase tracking-[0.18em] text-white/80 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#catalogo"
              className="luxury-button rounded-sm border border-[#c4a87a] px-5 py-2 text-[11px] uppercase tracking-[0.18em] text-[#c4a87a] transition-all hover:bg-[#c4a87a] hover:text-[#0d0d0d]"
            >
              Catalogo
            </a>
          </nav>
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((o) => !o)}
            className="luxury-button rounded-sm border border-white/40 px-4 py-2 text-[10px] uppercase tracking-[0.22em] text-white md:hidden"
            aria-label="Toggle menu"
          >
            Menu
          </button>
        </div>
        {isMobileMenuOpen && (
          <div className="mx-6 mt-4 rounded-xl border border-white/10 bg-[#0d0d0d]/96 p-5 md:hidden">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-xs uppercase tracking-[0.18em] text-white/80 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* ─── Hero ─────────────────────────────────────────────── */}
      <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
        <Image
          src={IMG.c1}
          alt="Cucina moderna con isola in marmo e pareti vetrate"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        {/* Left dark scrim for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/10" />
        {/* Subtle bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/40 to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-28 pb-24 md:px-10">
          <p className="mb-5 text-[11px] uppercase tracking-[0.32em] text-[#c4a87a]">
            Made in Italy · Showroom in tutta Italia
          </p>
          <h1 className="font-serif text-5xl leading-[1.08] text-white md:text-7xl xl:text-8xl">
            La Cucina<br />dei Tuoi<br />Sogni
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-white/75 md:text-lg">
            Progettiamo cucine su misura che rispecchiano il tuo stile.
            Con showroom in tutta Italia, siamo al tuo fianco in ogni passo.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#catalogo"
              className="luxury-button inline-flex rounded-sm bg-white px-8 py-3.5 text-[11px] uppercase tracking-[0.2em] text-[#1a1a1a] transition-all hover:bg-[#c4a87a] hover:text-white"
            >
              Richiedi il Catalogo
            </a>
            <a
              href="#cucine"
              className="luxury-button inline-flex rounded-sm border border-white/50 px-8 py-3.5 text-[11px] uppercase tracking-[0.2em] text-white/90 transition-all hover:border-white hover:text-white"
            >
              Scopri le Cucine
            </a>
          </div>

          {/* Stats strip */}
          <div className="mt-20 flex flex-wrap items-center gap-x-10 gap-y-4">
            {[
              { num: '', label: 'Showroom in tutta Italia' },
              { num: '5', label: 'Anni Garanzia' },
              { num: '100+', label: 'Finiture' },
              { num: 'ISO', label: '9001 Certificato' },
            ].map((s, i) => (
              <div key={i} className="flex items-baseline gap-2.5">
                {s.num && (
                  <span className="font-serif text-2xl text-white">{s.num}</span>
                )}
                <span className="text-[10px] uppercase tracking-[0.16em] text-white/55">
                  {s.label}
                </span>
                {i < 3 && <span className="ml-6 hidden h-4 w-px bg-white/25 sm:block" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Chi Siamo ────────────────────────────────────────── */}
      <section id="chi-siamo" className="section-space bg-white">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-6 md:px-10 lg:grid-cols-2 lg:gap-20">
          {/* Content */}
          <div className="reveal-on-scroll order-2 lg:order-1">
            <p className="section-eyebrow">Chi Siamo</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
              Su Misura<br />è di Casa
            </h2>
            <p className="mt-6 text-base leading-relaxed text-[#555]">
              Con showroom distribuiti in tutta Italia, siamo il punto di riferimento per chi
              cerca cucine di qualità a prezzi accessibili. Selezioniamo le migliori materie prime e
              accompagniamo ogni cliente dalla progettazione alla consegna, con cura artigianale e
              tecnologia italiana.
            </p>

            {/* Stats row */}
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-[#e8e0d6] pt-8">
              {[
                { num: '', label: 'Showroom in Italia' },
                { num: '5', label: 'Anni Garanzia' },
                { num: '100+', label: 'Finiture' },
              ].map((s) => (
                <div key={s.label}>
                  {s.num && (
                    <p className="font-serif text-3xl text-[#1a1a1a]">{s.num}</p>
                  )}
                  <p className="mt-1 text-[11px] uppercase tracking-[0.14em] text-[#999]">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            <a
              href="#cucine"
              className="luxury-button mt-8 inline-flex rounded-sm border border-[#1a1a1a] px-7 py-3 text-[11px] uppercase tracking-[0.18em] text-[#1a1a1a] transition-all hover:bg-[#1a1a1a] hover:text-white"
            >
              Scopri le Cucine
            </a>
          </div>

          {/* Image */}
          <div className="reveal-on-scroll order-1 lg:order-2">
            <div className="relative h-[440px] overflow-hidden rounded-2xl shadow-[0_24px_80px_rgba(0,0,0,0.15)] md:h-[560px]">
              <Image src={IMG.c4s} alt="Cucina con frontali in marmo e dettagli in bronzo" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              {/* Subtle corner label */}
              <div className="absolute bottom-5 left-5 rounded-sm bg-white/90 px-4 py-2 backdrop-blur-sm">
                <p className="text-[10px] uppercase tracking-[0.18em] text-[#1a1a1a]">Made in Italy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Collections ──────────────────────────────────────── */}
      <section id="cucine" className="section-space bg-[#f5f0ea]">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
          <div className="reveal-on-scroll mb-12 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="section-eyebrow">Le Nostre Collezioni</p>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl">Lasciati Ispirare</h2>
            </div>
            <a
              href="#catalogo"
              className="luxury-button self-start rounded-sm border border-[#1a1a1a] px-6 py-2.5 text-[11px] uppercase tracking-[0.18em] text-[#1a1a1a] transition-all hover:bg-[#1a1a1a] hover:text-white md:self-auto"
            >
              Vedi Tutto
            </a>
          </div>

          {/* Editorial grid: tall left + 2 stacked right */}
          <div className="grid gap-5 lg:grid-cols-3 lg:grid-rows-2 lg:h-[680px]">
            {/* Featured — Moderna */}
            <article className="reveal-on-scroll group relative min-h-[340px] cursor-pointer overflow-hidden rounded-2xl lg:row-span-2">
              <Image src={IMG.c2} alt="Cucina Moderna" fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 1024px) 100vw, 33vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7 text-white">
                <p className="text-[10px] uppercase tracking-[0.24em] text-[#c4a87a]">Moderna</p>
                <h3 className="mt-2 font-serif text-3xl leading-tight">Cucina<br />Moderna</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">Linee essenziali · Design contemporaneo · Finiture premium</p>
                <a
                  href="#catalogo"
                  className="luxury-button mt-5 inline-flex items-center gap-2 border-b border-white/40 pb-0.5 text-[11px] uppercase tracking-[0.16em] text-white/80 transition-all hover:border-white hover:text-white"
                >
                  Richiedi Informazioni →
                </a>
              </div>
            </article>

            {/* Classica */}
            <article className="reveal-on-scroll group relative min-h-[240px] cursor-pointer overflow-hidden rounded-2xl lg:col-span-2">
              <Image src={IMG.c8} alt="Cucina Classica" fill className="object-cover object-center transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 1024px) 100vw, 66vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 text-white">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.24em] text-[#c4a87a]">Classica</p>
                  <h3 className="mt-1.5 font-serif text-2xl">Cucina Classica</h3>
                  <p className="mt-1 text-sm text-white/65">Eleganza senza tempo · Legno massello</p>
                </div>
                <a href="#catalogo" className="luxury-button shrink-0 rounded-sm border border-white/50 px-4 py-2 text-[10px] uppercase tracking-[0.16em] text-white transition-all hover:bg-white hover:text-[#1a1a1a]">
                  Scopri
                </a>
              </div>
            </article>

            {/* Su Misura */}
            <article className="reveal-on-scroll group relative min-h-[240px] cursor-pointer overflow-hidden rounded-2xl lg:col-span-2">
              <Image src={IMG.c5} alt="Cucina Su Misura" fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 1024px) 100vw, 66vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 text-white">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.24em] text-[#c4a87a]">Su Misura</p>
                  <h3 className="mt-1.5 font-serif text-2xl">Cucina Su Misura</h3>
                  <p className="mt-1 text-sm text-white/65">Configurazione libera · Oltre 100 finiture</p>
                </div>
                <a href="#catalogo" className="luxury-button shrink-0 rounded-sm border border-white/50 px-4 py-2 text-[10px] uppercase tracking-[0.16em] text-white transition-all hover:bg-white hover:text-[#1a1a1a]">
                  Scopri
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ─── Fullbleed Statement ──────────────────────────────── */}
      <section className="relative h-[500px] overflow-hidden md:h-[620px]">
        <Image src={IMG.c3} alt="Cucina minimalista con isola in marmo scuro e vista giardino" fill className="object-cover object-center" quality={90} />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
          <p className="text-[11px] uppercase tracking-[0.32em] text-[#c4a87a]">La Qualità si Vede</p>
          <h2 className="mx-auto mt-5 max-w-2xl font-serif text-4xl leading-tight md:text-5xl lg:text-6xl">
            Ogni dettaglio racconta<br />una storia di stile
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-base text-white/70">
            Materiali di prima scelta, finiture ricercate, progettazione su misura.<br />
            Questo è il nostro standard, non l&apos;eccezione.
          </p>
          <a
            href="#catalogo"
            className="luxury-button mt-9 inline-flex rounded-sm border border-white/70 px-9 py-3.5 text-[11px] uppercase tracking-[0.22em] text-white transition-all hover:bg-white hover:text-[#1a1a1a]"
          >
            Richiedi il Catalogo Gratuito
          </a>
        </div>
      </section>

      {/* ─── Gallery ──────────────────────────────────────────── */}
      <section id="galleria" className="section-space bg-white">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
          <div className="reveal-on-scroll mb-12">
            <p className="section-eyebrow">I Nostri Progetti</p>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl">Galleria Realizzazioni</h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-[#666]">
              Lasciati ispirare dalle nostre cucine realizzate su misura. Ogni progetto nasce
              dall&apos;ascolto del cliente e prende forma con materiali di prima scelta.
            </p>
          </div>

          {/* Row 1: large left (2/3) + stacked right (1/3) */}
          <div className="grid grid-cols-12 gap-4">
            <div className="reveal-on-scroll col-span-12 row-span-2 md:col-span-8">
              <div className="relative h-[380px] overflow-hidden rounded-2xl md:h-[560px]">
                <Image src={IMG.c1} alt="Cucina aperta con isola in marmo bianco" fill className="object-cover" sizes="(max-width: 768px) 100vw, 66vw" />
              </div>
            </div>
            <div className="reveal-on-scroll col-span-6 md:col-span-4">
              <div className="relative h-[180px] overflow-hidden rounded-2xl md:h-[272px]">
                <Image src={IMG.c3s} alt="Isola in marmo scuro con piano sinuoso" fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
              </div>
            </div>
            <div className="reveal-on-scroll col-span-6 md:col-span-4">
              <div className="relative h-[180px] overflow-hidden rounded-2xl md:h-[272px]">
                <Image src={IMG.c4s} alt="Cucina con frontali in marmo e open shelf bronzo" fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
              </div>
            </div>
          </div>

          {/* Row 2: 3 equal columns */}
          <div className="mt-4 grid grid-cols-3 gap-4">
            <div className="reveal-on-scroll col-span-3 sm:col-span-1">
              <div className="relative h-[220px] overflow-hidden rounded-2xl md:h-[260px]">
                <Image src={IMG.c2s} alt="Cucina grigio antracite con top in legno" fill className="object-cover" sizes="(max-width: 640px) 100vw, 33vw" />
              </div>
            </div>
            <div className="reveal-on-scroll col-span-3 sm:col-span-1">
              <div className="relative h-[220px] overflow-hidden rounded-2xl md:h-[260px]">
                <Image src={IMG.c4l} alt="Cucina bianca moderna con isola in marmo Calacatta" fill className="object-cover" sizes="(max-width: 640px) 100vw, 33vw" />
              </div>
            </div>
            <div className="reveal-on-scroll col-span-3 sm:col-span-1">
              <div className="relative h-[220px] overflow-hidden rounded-2xl md:h-[260px]">
                <Image src={IMG.c8} alt="Cucina classica avorio con piano cottura in ghisa" fill className="object-cover object-top" sizes="(max-width: 640px) 100vw, 33vw" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Servizi ──────────────────────────────────────────── */}
      <section id="servizi" className="section-space bg-[#f5f0ea]">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
          <div className="reveal-on-scroll mb-12 max-w-3xl">
            <p className="section-eyebrow">I Nostri Servizi</p>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl">Sempre al Tuo Fianco</h2>
            <p className="mt-5 text-base leading-relaxed text-[#555]">
              Dall&apos;ideazione alla consegna, ti accompagniamo in ogni fase con servizi pensati
              per rendere l&apos;acquisto della tua cucina semplice e senza pensieri.
            </p>
          </div>

          <div className="grid auto-rows-[190px] gap-4 md:grid-cols-3">
            {serviceCards.map((card) => (
              <article
                key={card.title}
                className={`reveal-on-scroll bento-card group relative overflow-hidden ${card.className}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient}`} />
                <div className="absolute inset-0 bg-black/25 transition-all duration-300 group-hover:bg-black/10" />
                <div className="relative z-10 flex h-full flex-col justify-end p-6 text-[#f5f0ea]">
                  <h3 className="font-serif text-2xl">{card.title}</h3>
                  <p className="mt-1.5 text-sm text-[#e8dfd5]/80">{card.subtitle}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Catalogo Form ────────────────────────────────────── */}
      <section id="catalogo" className="section-space bg-white">
        <div className="mx-auto grid w-full max-w-7xl gap-16 px-6 md:px-10 lg:grid-cols-2 lg:items-start">
          {/* Left: copy + benefits */}
          <div className="reveal-on-scroll">
            <p className="section-eyebrow">Catalogo Gratuito</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
              Richiedi il Catalogo<br />e Ottieni lo Sconto
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[#555]">
              Sfoglia le nostre collezioni e lasciati ispirare. Compila il modulo e ricevi subito il
              catalogo digitale con un extra sconto esclusivo fino a <strong>1.000€</strong> su tutto l&apos;arredo.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                'Extra sconto fino a 1.000€',
                'Finanziamento a interessi zero',
                'Rilievo misure gratuito a domicilio',
                'Progettazione 3D inclusa',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-[#444]">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#2a7a6e]/15 text-[#2a7a6e]">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            {/* Small image accent */}
            <div className="mt-10 relative h-[220px] overflow-hidden rounded-xl">
              <Image src={IMG.c2} alt="Cucina moderna showroom" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-5 font-serif text-lg text-white">
                Showroom in tutta Italia
              </p>
            </div>
          </div>

          {/* Right: form */}
          <div className="reveal-on-scroll">
            <form className="rounded-2xl border border-[#e8e0d6] bg-[#faf7f4] p-8 md:p-10">
              <h3 className="font-serif text-2xl text-[#1a1a1a]">Compila il Modulo</h3>
              <p className="mt-2 text-sm text-[#888]">Risposta garantita entro 24 ore</p>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {[
                  { id: 'nome', label: 'Nome e Cognome', type: 'text', placeholder: 'Il tuo nome completo' },
                  { id: 'telefono', label: 'Telefono', type: 'tel', placeholder: '+39 000 000 0000' },
                  { id: 'email', label: 'Email', type: 'email', placeholder: 'tua@email.com' },
                  { id: 'citta', label: 'Città', type: 'text', placeholder: 'La tua città' },
                ].map((f) => (
                  <div key={f.id}>
                    <label htmlFor={f.id} className="mb-1.5 block text-[10px] uppercase tracking-[0.14em] text-[#888]">{f.label}</label>
                    <input
                      id={f.id}
                      type={f.type}
                      required
                      placeholder={f.placeholder}
                      className="w-full rounded-md border border-[#ddd] bg-white px-4 py-3 text-sm text-[#1a1a1a] outline-none transition-all placeholder:text-[#ccc] focus:border-[#2a7a6e]"
                    />
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <label htmlFor="interesse" className="mb-1.5 block text-[10px] uppercase tracking-[0.14em] text-[#888]">Tipo di Cucina</label>
                <select
                  id="interesse"
                  defaultValue=""
                  className="w-full rounded-md border border-[#ddd] bg-white px-4 py-3 text-sm text-[#1a1a1a] outline-none transition-all focus:border-[#2a7a6e]"
                >
                  <option value="" disabled>Seleziona…</option>
                  <option value="moderne">Cucine Moderne</option>
                  <option value="classiche">Cucine Classiche</option>
                  <option value="componibili">Cucine Componibili</option>
                  <option value="su-misura">Cucine Su Misura</option>
                  <option value="angolo">Cucine ad Angolo</option>
                  <option value="altro">Altro</option>
                </select>
              </div>

              <label className="mt-5 flex cursor-pointer items-start gap-3">
                <input
                  type="checkbox"
                  required
                  className="mt-0.5 h-4 w-4 rounded border-[#ddd] accent-[#2a7a6e]"
                />
                <span className="text-xs leading-relaxed text-[#999]">
                  Ho letto e accetto l&apos;informativa privacy e acconsento al trattamento dei miei dati personali
                </span>
              </label>

              <button
                type="submit"
                className="luxury-button mt-7 w-full rounded-md bg-[#1a1a1a] px-6 py-4 text-[11px] uppercase tracking-[0.2em] text-white transition-all hover:bg-[#2a7a6e]"
              >
                Richiedi il Catalogo Gratuito
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ─── Testimonial ──────────────────────────────────────── */}
      <section className="bg-[#1a1a1a] px-6 py-24 text-center text-[#f5f0ea] md:px-10">
        <div className="reveal-on-scroll mx-auto max-w-3xl">
          <p className="font-serif text-5xl text-[#c4a87a]">&ldquo;</p>
          <blockquote className="mt-2 font-serif text-2xl italic leading-relaxed md:text-3xl">
            Esperienza fantastica! Il consulente è stato pazientissimo e mi ha aiutata a trovare
            la cucina perfetta. La consegna è stata puntuale e il montaggio impeccabile.
          </blockquote>
          <div className="mt-6 flex items-center justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-[#c4a87a]" size={14} />
            ))}
          </div>
          <p className="mt-4 text-xs uppercase tracking-[0.22em] text-[#d4c8b8]">Francesca Bianchi · Milano</p>
        </div>
      </section>

      {/* ─── Showroom ─────────────────────────────────────────── */}
      <section id="showroom" className="section-space bg-[#f5f0ea]">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
          <div className="reveal-on-scroll mb-12 text-center">
            <p className="section-eyebrow">Vieni a Trovarci</p>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl">I Nostri Showroom</h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-[#555]">
              Ci trovi in molte zone d&apos;Italia! Compila il form per trovare lo showroom più
              vicino a te.
            </p>
          </div>

          <div className="reveal-on-scroll max-w-3xl mx-auto">
            <ShowroomForm />
          </div>
        </div>
      </section>

      {/* ─── CTA Banner ───────────────────────────────────────── */}
      <section className="bg-[#2a7a6e] px-6 py-12 text-center text-white md:px-10">
        <p className="mx-auto max-w-xl text-base md:text-lg">
          Richiedi il catalogo e ottieni un <strong>extra sconto fino a 1.000€</strong> su tutto l&apos;arredo
        </p>
        <a
          href="#catalogo"
          className="luxury-button mt-6 inline-flex rounded-sm border border-white/80 px-9 py-3.5 text-[11px] uppercase tracking-[0.2em] text-white transition-all hover:bg-white hover:text-[#2a7a6e]"
        >
          Richiedi Ora
        </a>
      </section>

      {/* ─── Footer ───────────────────────────────────────────── */}
      <footer id="contatti" className="bg-[#0d0d0d] px-6 pb-8 pt-20 text-[#f5f0ea] md:px-10">
        <div className="mx-auto grid w-full max-w-7xl gap-10 md:grid-cols-2 xl:grid-cols-4">
          <div>
            <h3 className="font-serif text-2xl tracking-[0.22em]">SCONTI CUCINE</h3>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#b8aea2]">
              Cucine di qualità Made in Italy. Con showroom in tutta Italia, ti accompagniamo
              nella scelta della cucina perfetta con consulenza personalizzata e progettazione 3D.
            </p>
          </div>
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.26em] text-[#c4a87a]">Prodotti</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-[#ddd1c4]">
              {['Cucine Moderne', 'Cucine Classiche', 'Cucine Componibili', 'Cucine Su Misura', 'Cucine ad Angolo'].map((item) => (
                <li key={item}>
                  <a href="#cucine" className="luxury-button hover:text-white">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.26em] text-[#c4a87a]">Servizi</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-[#ddd1c4]">
              {['Progettazione 3D', 'Rilievo Misure', 'Consegna e Montaggio', 'Ritiro Usato', 'Finanziamenti'].map((item) => (
                <li key={item}>
                  <a href="#servizi" className="luxury-button hover:text-white">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.26em] text-[#c4a87a]">Contatti</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-[#ddd1c4]">
              <li>Showroom in tutta Italia</li>
              <li>+39 02 1234 5678</li>
              <li>info@sconticucine.it</li>
            </ul>
            <h4 className="mt-8 text-[10px] uppercase tracking-[0.26em] text-[#c4a87a]">Newsletter</h4>
            <p className="mt-3 text-sm text-[#b8aea2]">Ricevi offerte esclusive e promozioni riservate.</p>
            <form className="mt-3 flex flex-col gap-3">
              <input
                type="email"
                placeholder="La tua email"
                className="rounded-md border border-[#c4a87a]/30 bg-transparent px-4 py-3 text-sm text-white outline-none transition-all placeholder:text-[#9d9388] focus:border-[#c4a87a]"
              />
              <button
                type="submit"
                className="luxury-button rounded-md border border-[#c4a87a] px-4 py-3 text-[10px] uppercase tracking-[0.2em] text-[#c4a87a] transition-all hover:bg-[#c4a87a] hover:text-[#1a1a1a]"
              >
                Iscriviti
              </button>
            </form>
          </div>
        </div>

        <div className="mx-auto mt-14 flex w-full max-w-7xl flex-col items-start justify-between gap-5 border-t border-white/10 pt-6 text-xs text-[#9d9388] md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Sconti Cucine. Tutti i diritti riservati. P.IVA 04914800265</p>
          <div className="flex items-center gap-5">
            <a href="/privacy" className="luxury-button hover:text-white">Privacy Policy</a>
            <a href="/cookie-policy" className="luxury-button hover:text-white">Cookie Policy</a>
            <a href="/terms" className="luxury-button hover:text-white">Condizioni di Vendita</a>
          </div>
          <div className="flex items-center gap-3">
            {[
              { label: 'Instagram', icon: <FaInstagram /> },
              { label: 'Facebook', icon: <FaFacebookF /> },
              { label: 'Pinterest', icon: <FaPinterestP /> },
            ].map(({ label, icon }) => (
              <a
                key={label}
                href="#home"
                aria-label={label}
                className="luxury-button rounded-sm border border-white/15 p-2 text-[#ddd1c4] transition-all hover:border-[#c4a87a] hover:text-white"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}
