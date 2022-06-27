import React, { useRef } from "react"
import { useGLTF } from "@react-three/drei"
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import textureEdgesImg from "./../../texture-weld.jpg"
import textureWeldImg from "./../../texture-edges.jpg"
import Y9 from "./У9.glb"

export default function Model(props) {
    const group = useRef();
    const { nodes, materials } = useGLTF(Y9);
    const textureEdges = useLoader(TextureLoader, textureEdgesImg)
    const textureWeld = useLoader(TextureLoader, textureWeldImg)

    return (
        <group ref={group} {...props} dispose={null}>
            <group scale={0.2}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.mesh_id4.geometry}
                    material={materials["50"]}
                >
                    <meshLambertMaterial map={textureEdges}></meshLambertMaterial>
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.mesh_id5.geometry}
                    material={materials["52"]}
                >
                    <meshLambertMaterial map={textureWeld}></meshLambertMaterial>
                </mesh>
            </group>
        </group>
    );
}

useGLTF.preload(Y9);