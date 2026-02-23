import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useRef } from 'react'
import type { Mesh } from 'three'

type FloatingSphereProps = {
  color: string
  position: [number, number, number]
  scale: number
  speed: number
  phase: number
  introDelay: number
}

function FloatingSphere({ color, position, scale, speed, phase, introDelay }: FloatingSphereProps) {
  const meshRef = useRef<Mesh>(null)

  useFrame(({ clock }) => {
    const mesh = meshRef.current
    if (!mesh) return

    const t = clock.getElapsedTime()
    const duration = 1.1
    const p = Math.min(Math.max((t - introDelay) / duration, 0), 1)
    const easeOutElasticSoft = (x: number) => {
      if (x === 0) return 0
      if (x === 1) return 1
      const c5 = (2 * Math.PI) / 5.4
      return Math.pow(2, -10 * x) * Math.sin((x * 10 - 0.6) * c5) + 1
    }
    const introScale = easeOutElasticSoft(p)

    mesh.position.y = position[1] + Math.sin(t * speed + phase) * 0.2
    mesh.position.x = position[0] + Math.cos(t * speed * 0.7 + phase) * 0.15
    mesh.rotation.y = t * speed * 0.45
    mesh.rotation.x = t * speed * 0.22
    mesh.scale.setScalar(scale * introScale)
  })

  return (
    <mesh ref={meshRef} position={position} scale={0}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshPhysicalMaterial
        color={color}
        roughness={0.18}
        metalness={0.06}
        clearcoat={0.9}
        clearcoatRoughness={0.12}
      />
    </mesh>
  )
}

function Scene() {
  const { viewport, size } = useThree()
  const topY = viewport.height * 0.10
  const sideX = viewport.width * 0.3
  const isTabletRange = size.width <= 1439
  const responsiveScale = isTabletRange ? 0.5 : 1

  return (
    <>
      <ambientLight intensity={0.85} />
      <directionalLight position={[3, 5, 4]} intensity={1.2} />
      <pointLight position={[-4, -2, 3]} intensity={0.8} color="#ffffff" />

      <FloatingSphere color="#7adf70" position={[0, -0.12, 0.15]} scale={1.12 * responsiveScale} speed={0.85} phase={0} introDelay={0} />
      <FloatingSphere color="#5ab8df" position={[sideX, topY, 0.2]} scale={0.95 * responsiveScale} speed={0.95} phase={1.2} introDelay={0.04} />
      <FloatingSphere color="#e6d18a" position={[-sideX, topY, 0.4]} scale={0.82 * responsiveScale} speed={1.05} phase={2.1} introDelay={0.08} />
    </>
  )
}

function HeroScene3D() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 hero-3d-bg">
      <Canvas camera={{ position: [0, 0, 15], fov: 18 }} dpr={[1, 1.8]} gl={{ alpha: true }}>
        <Scene />
      </Canvas>
    </div>
  )
}

export default HeroScene3D
