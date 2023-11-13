import { Canvas } from '@react-three/fiber'
import { Environment, Center, OrbitControls } from '@react-three/drei';

import Shirt from './Shirt';
import Backdrop from './Backdrop';
import CameraRig from './CameraRig';

const CanvasModel = () => {
  return (
    <Canvas
    shadows
    camera={{ position: [0, 0, 0], fov: 25 }}
    gl={{ preserveDrawingBuffer: true }}
    className="w-full max-w-full h-full transition-all ease-in"
    >
      <ambientLight intensity={0.5} />
      <Environment preset={"lobby"}/>
      // Agregar direccionamiento de Luz
      <directionalLight
        color={0xffffff}
        intensity={0.5}
        position={[1, 2, 3]}
      />

      <CameraRig>
        <Backdrop />
        <Center>
          <Shirt/>
        </Center>
      </CameraRig>
      {/* <OrbitControls makeDefault /> */}
    </Canvas>
  )
}

export default CanvasModel