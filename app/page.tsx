'use client'

import { useEffect, useState } from 'react'
import { FaFacebookF, FaInstagram, FaPinterestP, FaTripadvisor } from 'react-icons/fa'

const navLinks = [
  { href: '#rooms', label: 'Rooms' },
  { href: '#dining', label: 'Dining' },
  { href: '#experiences', label: 'Experiences' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#contact', label: 'Contact' },
]

const roomShowcase = [
  {
    name: 'Ocean View King Suite',
    details: '52 sqm · 1 King Bed · 2 Guests',
    price: 'from €520 / night',
    gradient: 'from-[#d8c4aa] via-[#b89e80] to-[#7d694e]',
  },
  {
    name: 'Mediterranean Terrace Room',
    details: '42 sqm · 1 Queen Bed · 2 Guests',
    price: 'from €390 / night',
    gradient: 'from-[#e0ceb4] via-[#c8b197] to-[#8d7458]',
  },
  {
    name: 'Garden Family Retreat',
    details: '64 sqm · 2 Queen Beds · 4 Guests',
    price: 'from €610 / night',
    gradient: 'from-[#d8cfbd] via-[#b8ad95] to-[#7f7055]',
  },
]

const experienceCards = [
  {
    title: 'Wellness Spa',
    subtitle: 'Stone therapy suites',
    gradient: 'from-[#b39a7d] via-[#94755f] to-[#5e4b3f]',
    className: 'md:col-span-2',
  },
  {
    title: 'Ocean Dining',
    subtitle: 'Chef-crafted coastal menu',
    gradient: 'from-[#bea88f] via-[#9d866a] to-[#66503f]',
    className: '',
  },
  {
    title: 'Infinity Pool',
    subtitle: 'Sunset horizon deck',
    gradient: 'from-[#4c857b] via-[#2a7a6e] to-[#1d6b60]',
    className: 'md:row-span-2',
  },
  {
    title: 'Private Garden',
    subtitle: 'Quiet aromatic paths',
    gradient: 'from-[#c4b19a] via-[#a18d73] to-[#6f5a45]',
    className: '',
  },
  {
    title: 'Sail Excursions',
    subtitle: 'Curated coastline journeys',
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
      { threshold: 0.2, rootMargin: '0px 0px -10% 0px' },
    )

    const revealElements = document.querySelectorAll('.reveal-on-scroll')
    revealElements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="bg-[#f5f0ea] text-[#1a1a1a]">
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'border-b border-[#c4a87a]/30 bg-[#1a1a1a]/90 py-4 backdrop-blur-md'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 md:px-10">
          <a
            href="#home"
            className="font-serif text-lg tracking-[0.45em] text-[#f5f0ea] transition-opacity duration-300 hover:opacity-80"
          >
            MARIVEN
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm tracking-[0.14em] text-[#f5f0ea] transition-colors duration-300 hover:text-[#d4c8b8]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="luxury-button rounded-md border border-[#c4a87a] px-5 py-2 text-sm uppercase tracking-[0.16em] text-[#f5f0ea] hover:bg-[#c4a87a] hover:text-[#1a1a1a]"
            >
              Book Now
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            className="luxury-button rounded-md border border-[#c4a87a]/70 px-4 py-2 text-xs uppercase tracking-[0.2em] text-[#f5f0ea] md:hidden"
            aria-label="Toggle menu"
          >
            Menu
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="mx-6 mt-4 rounded-xl border border-[#c4a87a]/30 bg-[#1a1a1a]/95 p-4 md:hidden">
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm uppercase tracking-[0.14em] text-[#f5f0ea] transition-colors duration-300 hover:text-[#d4c8b8]"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      <section
        id="home"
        className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 text-center md:px-10"
      >
        <div className="absolute inset-0 bg-[linear-gradient(128deg,_#8b6914_0%,_#745934_33%,_#2a7a6e_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,235,196,0.25),transparent_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(13,13,13,0.25)_0%,rgba(13,13,13,0.45)_55%,rgba(13,13,13,0.8)_100%)]" />

        <div className="relative z-10 mx-auto mt-10 max-w-4xl text-[#f5f0ea]">
          <p className="mb-6 text-xs uppercase tracking-[0.24em] text-[#d4c8b8]">Mariven Hotel & Suites</p>
          <h1 className="font-serif text-5xl leading-tight md:text-6xl lg:text-7xl">Your Home By The Ocean</h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-[#e8dfd5]/90 md:text-lg">
            Experience sun-kissed shores, luxurious stays, and unforgettable memories at Mariven.
          </p>
          <a
            href="#rooms"
            className="luxury-button mt-10 inline-flex rounded-md border border-[#f5f0ea] px-9 py-3 text-sm uppercase tracking-[0.18em] text-[#f5f0ea] hover:border-[#2a7a6e] hover:bg-[#2a7a6e]"
          >
            Explore Rooms
          </a>
        </div>

        <div className="absolute bottom-8 right-6 z-10 w-[220px] rounded-xl border border-white/20 bg-black/30 p-4 text-left text-[#f5f0ea] backdrop-blur-sm md:right-10">
          <div className="mb-2 flex items-center gap-2 text-sm">
            <FaTripadvisor className="text-[#39b05a]" />
            <span className="uppercase tracking-[0.08em] text-[#d4c8b8]">Traveler Choice</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-serif text-2xl">4.9</span>
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#39b05a]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#39b05a]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#39b05a]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#39b05a]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#39b05a]/70" />
            </div>
          </div>
        </div>
      </section>

      <section id="dining" className="section-space bg-[#f5f0ea]">
        <div className="mx-auto grid w-full max-w-7xl gap-5 px-6 md:px-10 xl:grid-cols-[0.8fr_1fr_1.2fr]">
          <article className="reveal-on-scroll bento-card bg-[#f5f0ea] p-7">
            <p className="section-eyebrow">Lobby Ritual</p>
            <h2 className="mt-3 font-serif text-3xl text-[#1a1a1a]">Welcome Cocktail</h2>
            <p className="mt-4 text-sm leading-relaxed text-[#595959]">
              Begin every arrival with a complimentary beachfront cocktail infused with regional citrus, sea herbs,
              and sunset botanicals.
            </p>
            <div className="mt-6 h-24 w-24 rounded-2xl bg-[linear-gradient(145deg,#d7c5ad,#b59d7d)] shadow-[0_12px_30px_rgba(0,0,0,0.15)]" />
          </article>

          <article className="reveal-on-scroll flex flex-col justify-between rounded-xl bg-[#ffffff] p-8 shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
            <div>
              <p className="section-eyebrow">Stay & Unwind</p>
              <h3 className="mt-3 max-w-md font-serif text-4xl leading-tight text-[#1a1a1a]">Curated Coastal Comfort</h3>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-[#555]">
                From cozy beachfront rooms to luxurious oceanfront suites, each space at Mariven is thoughtfully
                designed for comfort, style, and timeless coastal calm.
              </p>
            </div>
            <a
              href="#experiences"
              className="luxury-button mt-8 inline-flex w-fit rounded-md border border-[#1a1a1a] px-6 py-3 text-xs uppercase tracking-[0.16em] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-[#f5f0ea]"
            >
              Explore All Services
            </a>
          </article>

          <div className="grid gap-5 md:grid-cols-2 md:grid-rows-[180px_180px_180px]">
            <article className="reveal-on-scroll bento-card relative overflow-hidden p-6 md:col-span-2">
              <div className="absolute inset-0 bg-[linear-gradient(120deg,#dfcfb7_0%,#b89674_50%,#876948_100%)]" />
              <div className="absolute inset-0 bg-black/20" />
              <div className="relative z-10 flex h-full flex-col justify-between text-[#f5f0ea]">
                <div className="flex items-start justify-between gap-4">
                  <h4 className="font-serif text-2xl">Ocean View King Suite</h4>
                  <span className="rounded-md border border-[#f5f0ea]/80 px-3 py-1 text-[11px] uppercase tracking-[0.16em]">
                    Malibu
                  </span>
                </div>
                <p className="text-sm tracking-[0.06em] text-[#f5f0ea]/90">52 sqm · 1 King Bed · 2 Guests</p>
              </div>
            </article>

            <article className="reveal-on-scroll bento-card relative overflow-hidden md:row-span-2">
              <div className="h-full min-h-[180px] bg-[linear-gradient(155deg,#d7c4ac_10%,#bca081_45%,#8d7151_100%)]" />
            </article>
            <article className="reveal-on-scroll bento-card relative overflow-hidden">
              <div className="h-full min-h-[180px] bg-[linear-gradient(155deg,#d4c8b8_0%,#b89973_45%,#7d6347_100%)]" />
            </article>
            <article className="reveal-on-scroll bento-card relative overflow-hidden">
              <div className="h-full min-h-[180px] bg-[linear-gradient(155deg,#c9b8a0_0%,#ad8d6d_50%,#6f563c_100%)]" />
            </article>
          </div>
        </div>
      </section>

      <section id="experiences" className="section-space bg-[#f9f5f0]">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
          <div className="reveal-on-scroll mb-12 max-w-3xl">
            <p className="section-eyebrow">Services & Amenities</p>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl">Experience Paradise</h2>
            <p className="mt-5 text-base leading-relaxed text-[#555]">
              Every day unfolds with curated luxury experiences, from spa rituals and private dining to ocean-inspired
              adventures designed around your preferred pace.
            </p>
          </div>

          <div className="grid auto-rows-[190px] gap-5 md:grid-cols-3">
            {experienceCards.map((card) => (
              <article
                key={card.title}
                className={`reveal-on-scroll bento-card group relative overflow-hidden ${card.className}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient}`} />
                <div className="absolute inset-0 bg-black/25 transition-all duration-300 group-hover:bg-black/18" />
                <div className="relative z-10 flex h-full flex-col justify-end p-6 text-[#f5f0ea]">
                  <h3 className="font-serif text-2xl">{card.title}</h3>
                  <p className="mt-2 text-sm text-[#e8dfd5]">{card.subtitle}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="section-space bg-[#f5f0ea]">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
          <div className="reveal-on-scroll mb-12 max-w-3xl">
            <p className="section-eyebrow">Visual Story</p>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl">Editorial Gallery</h2>
            <p className="mt-5 text-base leading-relaxed text-[#555]">
              Glimpses of warm stone terraces, ocean-light suites, and curated moments that define the Mariven
              experience.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-4 md:grid-rows-[220px_220px]">
            <article className="reveal-on-scroll bento-card overflow-hidden md:col-span-2 md:row-span-2">
              <div className="h-full w-full bg-[linear-gradient(145deg,#d3bfa5_5%,#a18668_55%,#6f5741_100%)]" />
            </article>
            <article className="reveal-on-scroll bento-card overflow-hidden">
              <div className="h-full w-full bg-[linear-gradient(145deg,#cdb89f_0%,#ad8f6f_60%,#715841_100%)]" />
            </article>
            <article className="reveal-on-scroll bento-card overflow-hidden">
              <div className="h-full w-full bg-[linear-gradient(145deg,#4f877d_5%,#2a7a6e_50%,#1d6b60_100%)]" />
            </article>
            <article className="reveal-on-scroll bento-card overflow-hidden md:col-span-2">
              <div className="h-full w-full bg-[linear-gradient(145deg,#ddcfbb_5%,#b89a7a_45%,#82684b_100%)]" />
            </article>
          </div>
        </div>
      </section>

      <section id="rooms" className="section-space bg-[#f5f0ea]">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
          <div className="reveal-on-scroll mb-12 max-w-2xl">
            <p className="section-eyebrow">Signature Stays</p>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl">Rooms & Suites</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {roomShowcase.map((room) => (
              <article key={room.name} className="reveal-on-scroll room-card overflow-hidden bg-white">
                <div className={`h-64 bg-gradient-to-br ${room.gradient}`} />
                <div className="p-6">
                  <h3 className="font-serif text-2xl">{room.name}</h3>
                  <p className="mt-3 text-sm text-[#666]">{room.details}</p>
                  <p className="mt-5 text-sm uppercase tracking-[0.1em] text-[#c4a87a]">{room.price}</p>
                  <a
                    href="#contact"
                    className="luxury-button mt-6 inline-flex items-center gap-2 text-sm uppercase tracking-[0.12em] text-[#1a1a1a] hover:text-[#2a7a6e]"
                  >
                    View Room <span aria-hidden>→</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-[#1a1a1a] px-6 text-center text-[#f5f0ea] md:px-10">
        <div className="reveal-on-scroll mx-auto max-w-4xl">
          <p className="font-serif text-6xl text-[#c4a87a]">“</p>
          <blockquote className="mt-4 font-serif text-3xl italic leading-snug md:text-4xl">
            A serene retreat where every detail feels considered, elegant, and deeply connected to the sea.
          </blockquote>
          <p className="mt-8 text-sm uppercase tracking-[0.16em] text-[#d4c8b8]">Elena Marceau · Paris, France</p>
        </div>
      </section>

      <footer id="contact" className="bg-[#0d0d0d] px-6 pb-8 pt-24 text-[#f5f0ea] md:px-10">
        <div className="mx-auto grid w-full max-w-7xl gap-10 md:grid-cols-2 xl:grid-cols-4">
          <div>
            <h3 className="font-serif text-2xl tracking-[0.18em]">MARIVEN</h3>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#b8aea2]">
              Mariven Hotel & Suites is an oceanfront sanctuary blending warm stone architecture, refined service,
              and unforgettable Mediterranean evenings.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.22em] text-[#c4a87a]">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm text-[#ddd1c4]">
              {['Suites', 'Dining', 'Spa', 'Private Events', 'Contact Concierge'].map((item) => (
                <li key={item}>
                  <a href="#home" className="luxury-button hover:text-[#f5f0ea]">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.22em] text-[#c4a87a]">Contact</h4>
            <ul className="mt-4 space-y-2 text-sm text-[#ddd1c4]">
              <li>+1 (310) 555-0148</li>
              <li>concierge@marivenhotel.com</li>
              <li>200 Pacific Cliffs Drive</li>
              <li>Malibu, California</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.22em] text-[#c4a87a]">Newsletter</h4>
            <p className="mt-4 text-sm text-[#b8aea2]">Receive seasonal offers and private stay inspiration.</p>
            <form className="mt-4 flex flex-col gap-3">
              <input
                type="email"
                placeholder="Your email"
                className="rounded-md border border-[#c4a87a]/40 bg-transparent px-4 py-3 text-sm text-[#f5f0ea] outline-none transition-all duration-300 placeholder:text-[#9d9388] focus:border-[#c4a87a]"
              />
              <button
                type="submit"
                className="luxury-button rounded-md border border-[#c4a87a] px-4 py-3 text-xs uppercase tracking-[0.16em] hover:bg-[#c4a87a] hover:text-[#1a1a1a]"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mx-auto mt-14 flex w-full max-w-7xl flex-col items-start justify-between gap-5 border-t border-white/10 pt-6 text-sm text-[#9d9388] md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Mariven Hotel & Suites. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a
              href="#home"
              aria-label="Instagram"
              className="luxury-button rounded-md border border-white/15 p-2 text-[#ddd1c4] hover:border-[#c4a87a] hover:text-[#f5f0ea]"
            >
              <FaInstagram />
            </a>
            <a
              href="#home"
              aria-label="Facebook"
              className="luxury-button rounded-md border border-white/15 p-2 text-[#ddd1c4] hover:border-[#c4a87a] hover:text-[#f5f0ea]"
            >
              <FaFacebookF />
            </a>
            <a
              href="#home"
              aria-label="Pinterest"
              className="luxury-button rounded-md border border-white/15 p-2 text-[#ddd1c4] hover:border-[#c4a87a] hover:text-[#f5f0ea]"
            >
              <FaPinterestP />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
