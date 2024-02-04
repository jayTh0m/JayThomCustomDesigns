'use client'

import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF, Stage } from '@react-three/drei';
import Loader from './Loader';

const Tools = () => {
  const handTools = useGLTF('/handTools/scene.gltf')

  return (
    <mesh       
      rotation = {[0.5, 2.8, 0]}
      position = {[0,0,0]}
    >
    <primitive 
      object = {handTools.scene}
    />
  </mesh>
)
}

const HeroCanvas = () => {
  return (
    <Canvas
    camera={{ position: [0,2,5] }}
    gl={{ preserveDrawingBuffer: true}}
    >
      <Suspense fallback={<Loader />}>
      <OrbitControls  
          enableZoom={false}
          maxPolarAngle={Math.PI /2}
          minPolarAngle={0}
        />

        <Stage>
          <Tools />
        </Stage>
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default HeroCanvas