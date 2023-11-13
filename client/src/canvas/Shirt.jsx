import React from 'react'
import { easing } from 'maath';
import { useSnapshot } from 'valtio';
import { useFrame,useLoader } from '@react-three/fiber';
import { MeshStandardMaterial } from 'three';
import { Decal, useGLTF, useTexture } from '@react-three/drei';

import state from '../store';

const Shirt = () => {
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF('/shirt_baked.glb');

  const logoTexture = useTexture(snap.logoDecal);
  const fullTexture = useTexture(snap.fullDecal);
  // Carga tus texturas u otros recursos necesarios aquí, por ejemplo:
  // const texture = useLoader(THREE.TextureLoader, '/ruta/a/textura.png');
  

  useFrame((state, delta) => easing.dampC(materials.lambert1.color, snap.color, 0.25, delta));

  // Crea un material meshStandardMaterial y configúralo:
  const materialShirt = new MeshStandardMaterial({
    // color: 0xab47bc,  // Color base del material
    color: snap.color,
    // map: texture,     // Textura que deseas aplicar
    roughness: 0.7,   // Rugosidad del material
    metalness: 0.1,   // Metalicidad del material
  });

  

  const stateString = JSON.stringify(snap);

  logoTexture.anisotropy =16;

  return (
    <group key={stateString}>
      <mesh
        castShadow
        geometry={nodes.T_Shirt_male.geometry}
        // material={materials.lambert1}
        material={materialShirt}
        material-roughness={1}
        dispose={null}
      >

        {snap.isFullTexture && (
          <Decal 
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
            scale={1}
            map={fullTexture}
          />
        )}

        {snap.isLogoTexture && (
          <Decal 
            position={[0, 0.03, 0.15]}
            rotation={[0, 0, 0]}
            scale={0.23}
            map={logoTexture}
            //mapAnisotropy={16}
            depthTest={false}
          />
        )}
      </mesh>
    </group>
  )
}

export default Shirt