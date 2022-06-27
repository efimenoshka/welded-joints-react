import React, { useRef } from "react"
import { useGLTF } from "@react-three/drei"
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import textureEdgesImg from "./../../texture-weld.jpg"
import textureWeldImg from "./../../texture-edges.jpg"
import C10 from "./С10.glb"

export default function Model(props) {
    const group = useRef()
    const { nodes, materials } = useGLTF(C10)
    const textureEdges = useLoader(TextureLoader, textureEdgesImg)
    const textureWeld = useLoader(TextureLoader, textureWeldImg)

    return (
        <group ref={group} {...props} dispose={null}>
            <group scale={0.15}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.mesh_id4.geometry}
                    material={materials["71"]}
                >
                    <meshLambertMaterial map={textureEdges}></meshLambertMaterial>
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.mesh_id5.geometry}
                    material={materials["73"]}
                >
                    <meshLambertMaterial map={textureWeld}></meshLambertMaterial>
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.mesh_id6.geometry}
                    material={materials["75"]}
                >
                    <meshLambertMaterial map={textureEdges}></meshLambertMaterial>
                </mesh>
            </group>
        </group>
    );
}

useGLTF.preload(C10);
