"use client"

import { useRef, useEffect, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { inSphere } from "maath/random"
import { PointMaterial } from "@react-three/drei"
import * as THREE from "three"

function Stars() {
  const groupRef = useRef<THREE.Group | null>(null)
  const [positions, setPositions] = useState<THREE.BufferAttribute | null>(null)

  useEffect(() => {
    const arr = new Float32Array(5000 * 3)
    inSphere(arr, { radius: 1.5 })

    for (let i = 0; i < arr.length; i++) {
      if (isNaN(arr[i]) || !isFinite(arr[i])) {
        arr[i] = ((i % 1000) / 1000 - 0.5) * 3
      }
    }

    setPositions(new THREE.Float32BufferAttribute(arr, 3))
  }, [])

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.x -= delta / 10
      groupRef.current.rotation.y -= delta / 15
    }
  })

  if (!positions) return null

  return (
    <group ref={groupRef} rotation={[0, 0, Math.PI / 4]}>
      <points frustumCulled={false}>
        <bufferGeometry>
          <primitive attach="attributes-position" object={positions} />
        </bufferGeometry>
        {/* ✅ Use PointMaterial from drei for round glowing points */}
        <PointMaterial
          transparent
          color="#ffffff" // cream/white color
          size={0.005}
          sizeAttenuation
          depthWrite={false}
        />
      </points>
    </group>
  )
}

function FloatingGeometry() {
  const meshRef = useRef<THREE.Mesh | null>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.3
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.1
    }
  })

  return (
    <mesh ref={meshRef} position={[2, 0, -2]}>
      <torusGeometry args={[0.3, 0.1, 16, 100]} />
      <meshBasicMaterial color="#ff4d00" wireframe />
    </mesh>
  )
}

export function Background3D() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => setIsMounted(true), [])

  if (!isMounted) return <div className="fixed inset-0 -z-10 bg-background" />

  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Stars />
        <FloatingGeometry />
      </Canvas>
    </div>
  )
}
