import React, { useRef } from "react";
import { useGLTF, Html } from "@react-three/drei";
import { useFrame, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import model from "./С2_Кромки.glb"
import textureEdgesImg from "./../../texture-weld.jpg"

export default function C2_Cr(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF(model);
  const textureEdges = useLoader(TextureLoader, textureEdgesImg)

  const style = {
      cursor: 'pointer',
      outline: 'none',
      border: 'none',
      fontSize: '8px',
      fontWeight: '300',
      background: 'black',
      color: '#f0f0f0',
      padding: '2px 10px',
      borderRadius: '20px',
      letterSpacing: '1px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '5px',
  }

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_id3.geometry}
        material={materials["73"]}
        scale={0.2}
      >
        <meshLambertMaterial map={textureEdges}></meshLambertMaterial>
      </mesh>
    </group>
  );
}

useGLTF.preload(model);
