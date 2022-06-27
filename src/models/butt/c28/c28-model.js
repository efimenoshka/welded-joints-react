
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import C28 from "./С28.glb"
import textureEdgesImg from "./../../texture-weld.jpg"
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import textureWeldImg from "./../../texture-edges.jpg"

export default function С28_Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF(C28);
  const textureEdges = useLoader(TextureLoader, textureEdgesImg)
  const textureWeld = useLoader(TextureLoader, textureWeldImg)

  return (
    <group ref={group} {...props} dispose={null}>
      <group scale={0.15}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_id4.geometry}
          material={materials["75"]}
        >
          <meshLambertMaterial map={textureEdges}></meshLambertMaterial>
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_id5.geometry}
          material={materials["77"]}
        >
          <meshStandardMaterial map={textureWeld} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_id6.geometry}
          material={materials["79"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_id7.geometry}
          material={materials["81"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload(C28);
