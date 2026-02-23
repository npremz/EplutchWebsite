import { Canvas, useFrame } from '@react-three/fiber'
import { BallCollider, Physics, RigidBody } from '@react-three/rapier'
import { useMemo, useRef } from 'react'
import type { RapierRigidBody } from '@react-three/rapier'

const COLORS = ['#5ab8df', '#e6d18a', '#ddfad6']
const SPHERE_COUNT = 9

function GravityField() {
  const bodyRefs = useRef<Array<RapierRigidBody | null>>([])
  const cursorBodyRef = useRef<RapierRigidBody | null>(null)
  const initialPositions = useMemo(
    () =>
      Array.from({ length: SPHERE_COUNT }, (_, index) => {
        const row = Math.floor(index / 3)
        const col = index % 3
        const x = (col - 1) * 1.2 + (Math.random() - 0.5) * 0.25
        const y = (1 - row) * 1.0 + (Math.random() - 0.5) * 0.25
        const z = (Math.random() - 0.5) * 0.9
        return [x, y, z] as [number, number, number]
      }),
    []
  )

  useFrame((state) => {
    const center = { x: 0, y: 0, z: 0 }
    const pointerWorldX = state.pointer.x * (state.viewport.width * 0.5)
    const pointerWorldY = state.pointer.y * (state.viewport.height * 0.5)
    const cursorBody = cursorBodyRef.current
    if (cursorBody) {
      cursorBody.setNextKinematicTranslation({ x: pointerWorldX, y: pointerWorldY, z: 0.15 })
    }

    // Attraction vers le centre + petit confinement pour garder les sphères dans la zone.
    for (let i = 0; i < SPHERE_COUNT; i += 1) {
      const body = bodyRefs.current[i]
      if (!body) continue

      const p = body.translation()
      const dx = center.x - p.x
      const dy = center.y - p.y
      const dz = center.z - p.z
      const dist = Math.max(Math.hypot(dx, dy, dz), 0.25)

      const pull = 0.0016 + 0.006 / dist
      body.applyImpulse({ x: dx * pull, y: dy * pull, z: dz * pull }, true)

      const maxR = 2.9
      if (Math.abs(p.x) > maxR) body.applyImpulse({ x: -Math.sign(p.x) * 0.02, y: 0, z: 0 }, true)
      if (Math.abs(p.y) > maxR * 0.75) body.applyImpulse({ x: 0, y: -Math.sign(p.y) * 0.02, z: 0 }, true)
    }
  })

  return (
    <>
      <RigidBody
        ref={cursorBodyRef}
        type="kinematicPosition"
        colliders={false}
        position={[999, 999, 0.15]}
        canSleep={false}
      >
        <BallCollider args={[0.26]} />
      </RigidBody>

      {Array.from({ length: SPHERE_COUNT }, (_, index) => (
        <RigidBody
          key={index}
          ref={(node) => {
            bodyRefs.current[index] = node
          }}
          colliders={false}
          position={initialPositions[index]}
          linearDamping={1.35}
          angularDamping={1.75}
          restitution={0.62}
          friction={0.2}
          canSleep={false}
        >
          <BallCollider args={[0.33]} />
          <mesh scale={0.33}>
            <sphereGeometry args={[1, 42, 42]} />
            <meshPhysicalMaterial
              color={COLORS[index % COLORS.length]}
              roughness={0.2}
              metalness={0.04}
              clearcoat={0.85}
              clearcoatRoughness={0.15}
            />
          </mesh>
        </RigidBody>
      ))}
    </>
  )
}

function AboutScene3D() {
  return (
    <div aria-hidden="true" className="about-3d-layer">
      <Canvas camera={{ position: [0, 0, 6], fov: 32 }} dpr={[1, 1.8]} gl={{ alpha: true }}>
        <ambientLight intensity={0.95} />
        <directionalLight position={[2.5, 3.5, 4]} intensity={1.1} />
        <pointLight position={[-3, -2, 2]} intensity={0.6} />
        <Physics gravity={[0, 0, 0]}>
          <GravityField />
        </Physics>
      </Canvas>
    </div>
  )
}

export default AboutScene3D
