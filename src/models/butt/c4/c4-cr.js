import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import textureEdgesImg from "./../../texture-weld.jpg"
import C4_CR from "./С4_Кромки.glb"

export default function Model(props) {
    const group = useRef();
    const { nodes, materials } = useGLTF(C4_CR);
    const textureEdges = useLoader(TextureLoader, textureEdgesImg)

    return (
        <group ref={group} {...props} dispose={null} scale={0.2}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.node_id3.geometry}
                material={materials["69"]}
            >
                <meshLambertMaterial map={textureEdges}></meshLambertMaterial>
            </mesh>
        </group>
    );
}

useGLTF.preload(C4_CR);