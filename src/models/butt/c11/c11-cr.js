import React, { useRef } from "react"
import { useGLTF } from "@react-three/drei"
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import textureEdgesImg from "./../../texture-weld.jpg"
import C11_CR from "./С11_Кромки.glb"

export default function Model(props) {
    const group = useRef()
    const { nodes, materials } = useGLTF(C11_CR)
    const textureEdges = useLoader(TextureLoader, textureEdgesImg)
    
    return (
        <group ref={group} {...props} dispose={null} scale={0.15}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.node_id3.geometry}
                material={materials["48"]}
            >
                <meshLambertMaterial map={textureEdges}></meshLambertMaterial>
            </mesh>
        </group>
    );
}

useGLTF.preload(C11_CR);