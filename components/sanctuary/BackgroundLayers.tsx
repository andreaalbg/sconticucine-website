'use client'

import { useEffect, useRef } from 'react'

export default function BackgroundLayers() {
  const blurLayerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const blurLayer = blurLayerRef.current
    if (!blurLayer) return

    let mouseX = window.innerWidth / 2
    let mouseY = window.innerHeight / 2
    let cursorX = window.innerWidth / 2
    let cursorY = window.innerHeight / 2

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const animate = () => {
      const ease = 0.1
      
      cursorX += (mouseX - cursorX) * ease
      cursorY += (mouseY - cursorY) * ease

      const xPercent = (cursorX / window.innerWidth) * 100
      const yPercent = (cursorY / window.innerHeight) * 100

      blurLayer.style.setProperty('--x', `${xPercent}%`)
      blurLayer.style.setProperty('--y', `${yPercent}%`)

      requestAnimationFrame(animate)
    }

    document.addEventListener('mousemove', handleMouseMove)
    animate()

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <>
      <div className="layer-sharp" />
      <div ref={blurLayerRef} className="layer-blur" />
      <div className="noise-overlay" />
    </>
  )
}
