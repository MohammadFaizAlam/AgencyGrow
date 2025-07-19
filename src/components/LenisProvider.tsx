'use client'

import { ReactNode, useEffect } from 'react'
import Lenis from '@studio-freight/lenis'

export default function LenisProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      lerp: 0.1, // 👈 Optional: Use lerp for better feel on low FPS
      smoothTouch: true, // 👈 Ensures smooth scroll on mobile too
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => lenis.destroy()
  }, [])

  return <>{children}</>
}
