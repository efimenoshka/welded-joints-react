import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import textureEdgesImg from "./../../texture-weld.jpg"
import T8_CR from "./Т8_Кромки.glb"

export default function Model(props) {
    const group = useRef();
    const { nodes, materials } = useGLTF(T8_CR);
    const textureEdges = useLoader(TextureLoader, textureEdgesImg)

    return (
        <group ref={group} {...props} dispose={null} scale={0.09}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.node_id3.geometry}
                material={materials["67"]}
            >
                <meshLambertMaterial map={textureEdges}></meshLambertMaterial>
            </mesh>
        </group>
    );
}

useGLTF.preload(T8_CR);