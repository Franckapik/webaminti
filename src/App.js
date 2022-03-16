import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'

import Model from './Model'

export default function App() {
  const macamera = [25,25,70]
  return (
    <div className="App">
      <h1 className='titre'>AMINTI</h1>
      <Canvas camera={{fov: 30, position: macamera }}>
        <Suspense fallback={null}>
          <spotLight intensity= {0.7
} position ={[15, 15, 15]} />
        <OrbitControls autoRotate/>
          <Model />
          <Environment preset="night" background />
        </Suspense>
      </Canvas>
    </div>
  )
}
