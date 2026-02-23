import { useEffect, useRef } from 'react'

import image01 from '../assets/images/carousel/01.png'
import image02 from '../assets/images/carousel/02.png'
import image03 from '../assets/images/carousel/03.png'

type VelocityRowProps = {
  label: string
  imageSrc: string
  imageAlt: string
  baseSpeed: number
}

function VelocityRow({ label, imageSrc, imageAlt, baseSpeed }: VelocityRowProps) {
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
      offset -= baseSpeed * (1 + boost) * delta

      if (segmentWidth > 0) {
        // Robust wrap to avoid visible jumps when one frame moves > one segment.
        while (offset <= -segmentWidth) offset += segmentWidth
        while (offset > 0) offset -= segmentWidth
      }

      track.style.transform = `translate3d(${offset}px,0,0)`
      frame = requestAnimationFrame(animate)
    }

    const images = Array.from(segment.querySelectorAll('img'))
    images.forEach((img) => {
      if (!img.complete) {
        img.addEventListener('load', measure)
      }
    })

    window.addEventListener('resize', measure)
    window.addEventListener('scroll', onScroll, { passive: true })
    measure()
    frame = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', measure)
      window.removeEventListener('scroll', onScroll)
      images.forEach((img) => img.removeEventListener('load', measure))
    }
  }, [baseSpeed])

  return (
    <div className="w-full overflow-x-clip">
      <div ref={trackRef} className="flex will-change-transform">
        <div ref={segmentRef} className="flex shrink-0 items-center px-3">
          <span className="font-serif text-[44px] md:text-[80px] lg:text-[112px] 2xl:text-[150px] leading-none text-text">
            {label}{' '}
          </span>
          <span className="font-serif text-[69px] md:text-[125px] lg:text-[175px] 2xl:text-[235px] leading-none text-text">(</span>
          <img src={imageSrc} alt={imageAlt} className="h-[60px] md:h-[110px] lg:h-[140px] 2xl:h-[200px] w-auto object-contain" />
          <span className="font-serif text-[69px] md:text-[125px] lg:text-[175px] 2xl:text-[235px] leading-none text-text">)</span>
        </div>
        <div aria-hidden="true" className="flex shrink-0 items-center px-3">
          <span className="font-serif text-[44px] md:text-[80px] lg:text-[112px] 2xl:text-[150px] leading-none text-text">
            {label}{' '}
          </span>
          <span className="font-serif text-[69px] md:text-[125px] lg:text-[175px] 2xl:text-[235px] leading-none text-text">(</span>
          <img src={imageSrc} alt="" className="h-[60px] md:h-[110px] lg:h-[140px] 2xl:h-[200px] w-auto object-contain" />
          <span className="font-serif text-[69px] md:text-[125px] lg:text-[175px] 2xl:text-[235px] leading-none text-text">)</span>
        </div>
        <div aria-hidden="true" className="flex shrink-0 items-center px-3">
          <span className="font-serif text-[44px] md:text-[80px] lg:text-[112px] 2xl:text-[150px] leading-none text-text">
            {label}{' '}
          </span>
          <span className="font-serif text-[69px] md:text-[125px] lg:text-[175px] 2xl:text-[235px] leading-none text-text">(</span>
          <img src={imageSrc} alt="" className="h-[60px] md:h-[110px] lg:h-[140px] 2xl:h-[200px] w-auto object-contain" />
          <span className="font-serif text-[69px] md:text-[125px] lg:text-[175px] 2xl:text-[235px] leading-none text-text">)</span>
        </div>
      </div>
    </div>
  )
}

function Carousels() {
  return (
    <section className="mx-[calc(50%-50dvw)] mt-16 md:mt-50 lg:mt-38 xl:mt-60 space-y-4 md:space-y-8 lg:space-y-10 2xl:space-y-16 overflow-x-clip">
      <VelocityRow
        label="Sane Materials"
        imageSrc={image01}
        imageAlt="Sane Materials"
        baseSpeed={75}
      />
      <VelocityRow
        label="Fair manufacturing"
        imageSrc={image02}
        imageAlt="Fair manufacturing"
        baseSpeed={-65}
      />
      <VelocityRow
        label="Made for durability"
        imageSrc={image03}
        imageAlt="Made for durability"
        baseSpeed={90}
      />
    </section>
  )
}

export default Carousels
