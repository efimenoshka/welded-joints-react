import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import C28_CR from "./С28_Кромки.glb"
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import textureEdgesImg from "./../../texture-weld.jpg"

export default function C28_Cr(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF(C28_CR);
  const textureEdges = useLoader(TextureLoader, textureEdgesImg)

  return (
    <group ref={group} {...props} dispose={null} scale={0.15}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_id4.geometry}
        material={materials["69"]}
        >
          <meshLambertMaterial map={textureEdges}></meshLambertMaterial>
        </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_id5.geometry}
        material={materials["69"]}
        >
          <meshLambertMaterial map={textureEdges}></meshLambertMaterial>
        </mesh>
    </group>
  );
}

useGLTF.preload(C28_CR);