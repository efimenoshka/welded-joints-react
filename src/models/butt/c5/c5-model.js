import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import textureEdgesImg from "./../../texture-weld.jpg"
import textureWeldImg from "./../../texture-edges.jpg"
import C5 from "./С5.glb"

export default function C5_Model(props) {
    const group = useRef();
    const { nodes, materials } = useGLTF(C5);
    const textureEdges = useLoader(TextureLoader, textureEdgesImg)
    const textureWeld = useLoader(TextureLoader, textureWeldImg)

    return (
        <group ref={group} {...props} dispose={null}>
            <group scale={0.2}>
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
                    material={materials["71"]}
                >
                    <meshStandardMaterial map={textureWeld} />
                </mesh>
            </group>
        </group>
    );
}

useGLTF.preload(C5);