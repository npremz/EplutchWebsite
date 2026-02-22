import { useEffect, useRef } from 'react'

function PlushVelocity() {
  const segmentRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const segment = segmentRef.current
    const track = trackRef.current
    if (!segment || !track) return

    let frame = 0
    let lastFrameTime = performance.now()
    let lastScrollTime = performance.now()
    let lastScrollY = window.scrollY
    let offset = 0
    let boost = 0
    let targetBoost = 0
    let segmentWidth = segment.getBoundingClientRect().width

    const clamp = (value: number, min: number, max: number) =>
      Math.min(max, Math.max(min, value))

    const measure = () => {
      segmentWidth = segment.getBoundingClientRect().width
    }

    const onScroll = () => {
      const now = performance.now()
      const scrollY = window.scrollY
      const dy = scrollY - lastScrollY
      const dt = Math.max((now - lastScrollTime) / 1000, 0.016)
      const scrollVelocity = dy / dt

      targetBoost = clamp(scrollVelocity / 1500, -0.9, 1.8)
      lastScrollY = scrollY
      lastScrollTime = now
    }

    const animate = (now: number) => {
      const delta = Math.min((now - lastFrameTime) / 1000, 0.05)
      lastFrameTime = now

      boost += (targetBoost - boost) * 0.09
      offset -= 70 * (1 + boost) * delta

      if (segmentWidth > 0) {
        while (offset <= -segmentWidth) offset += segmentWidth
        while (offset > 0) offset -= segmentWidth
      }

      track.style.transform = `translate3d(${offset}px,0,0)`
      frame = requestAnimationFrame(animate)
    }

    window.addEventListener('resize', measure)
    window.addEventListener('scroll', onScroll, { passive: true })
    measure()
    frame = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', measure)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <div className="overflow-x-clip py-8">
      <div ref={trackRef} className="flex will-change-transform">
        <div ref={segmentRef} className="flex shrink-0 items-center gap-4 px-3">
          <span className="font-serif text-[112px] leading-none text-text">
            Froggy • Piou • Teddi •
          </span>
        </div>
        <div aria-hidden="true" className="flex shrink-0 items-center gap-4 px-3">
          <span className="font-serif text-[112px] leading-none text-text">
            Froggy • Piou • Teddi •
          </span>
        </div>
        <div aria-hidden="true" className="flex shrink-0 items-center gap-4 px-3">
          <span className="font-serif text-[112px] leading-none text-text">
            Froggy • Piou • Teddi •
          </span>
        </div>
      </div>
    </div>
  )
}

function Footer() {
  return (
    <footer className="mt-16 rounded-[10px] bg-blue px-2 pb-8">
      <div className="flex justify-center py-16">
        <img src="/logo.svg" alt="Eplutch logo" className="h-10 w-auto" />
      </div>

      <hr className="dashed-divider-horizontal" />

      <PlushVelocity />

      <hr className="dashed-divider-horizontal" />

      <div className="flex flex-col items-center mt-8 gap-5">
        <p className="font-mono text-sm uppercase text-text">
          Copyright {new Date().getFullYear()}
        </p>
        <p className="font-mono text-sm uppercase text-text">Made with &lt;3 By horde agence</p>
      </div>
    </footer>
  )
}

export default Footer
