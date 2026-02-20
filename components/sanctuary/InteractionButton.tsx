'use client'

import { useRef } from 'react'
import { useRouter } from 'next/navigation'

export default function InteractionButton() {
  const router = useRouter()
  const pressTimerRef = useRef<NodeJS.Timeout>()
  const mainTextRef = useRef<HTMLHeadingElement>(null)
  const subTextRef = useRef<HTMLParagraphElement>(null)

  const handleMouseDown = () => {
    if (mainTextRef.current && subTextRef.current) {
      mainTextRef.current.style.transition = 'opacity 1s ease'
      mainTextRef.current.style.opacity = '0'
      subTextRef.current.style.transition = 'opacity 1s ease'
      subTextRef.current.style.opacity = '0'
    }
    
    pressTimerRef.current = setTimeout(() => {
      router.push('/collezioni')
    }, 1500)
  }

  const handleMouseUp = () => {
    if (pressTimerRef.current) {
      clearTimeout(pressTimerRef.current)
    }
    
    if (mainTextRef.current && subTextRef.current) {
      mainTextRef.current.style.opacity = '1'
      subTextRef.current.style.opacity = '1'
    }
  }

  return (
    <>
      <main className="hero-text">
        <h1 ref={mainTextRef} className="prompt-main">
          <i>silenzio</i> è un lusso
        </h1>
        <p ref={subTextRef} className="prompt-sub">
          Dove vuoi andare?
        </p>
      </main>

      <div className="interaction-anchor">
        <button 
          className="orb-btn" 
          aria-label="Entra in Sanctuary"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        />
        <span className="label-enter">Tieni premuto per entrare</span>
      </div>
    </>
  )
}
