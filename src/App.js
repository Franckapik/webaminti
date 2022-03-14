import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'

import Model from './Model'

export default function App() {
  return (
    <div className="App">
      <Canvas>
        <Suspense fallback={null}>
          <spotLight intensity= {2
} position ={[15, 15, 15]} />
        <OrbitControls />
          <Model />
          <Environment preset="night" background />
        </Suspense>
      </Canvas>
    </div>
  )
}
