import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import textureEdgesImg from "./../../texture-weld.jpg"
import T2_CR from "./Т2_Кромки.glb"

export default function Model(props) {
    const group = useRef();
    const { nodes, materials } = useGLTF(T2_CR);
    const textureEdges = useLoader(TextureLoader, textureEdgesImg)

    return (
        <group ref={group} {...props} dispose={null} scale={0.07}>
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

useGLTF.preload(T2_CR);