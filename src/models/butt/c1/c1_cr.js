import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import C1 from "./С1_Кромки.glb"
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import textureEdgesImg from "./../../texture-weld.jpg"

export default function C1_Cr(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF(C1);
  const textureEdges = useLoader(TextureLoader, textureEdgesImg)

  return (
    <group ref={group} {...props} dispose={null} >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_id3.geometry}
        material={materials["67"]}
        scale={0.15}
      >
        <meshLambertMaterial map={textureEdges}></meshLambertMaterial>
      </mesh>
    </group>
  );
}

useGLTF.preload(C1);