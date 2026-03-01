'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function SanctuaryHeader() {
  const [soundOn, setSoundOn] = useState(false)

  return (
    <header className="header-top">
      <Link href="/" className="nav-text brand">
        ScontiCucine
      </Link>
      <div style={{ display: 'flex', gap: '3rem' }}>
        <Link href="/catalogo" className="nav-text">
          Catalogo
        </Link>
        <button
          onClick={() => setSoundOn(!soundOn)}
          className="nav-text"
          style={{ background: 'none', border: 'none' }}
        >
          {soundOn ? 'Sound On' : 'Sound Off'}
        </button>
      </div>
    </header>
  )
}
