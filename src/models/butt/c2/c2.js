import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import C2 from "./С2.glb"
import textureEdgesImg from "./../../texture-weld.jpg"
import textureWeldImg from "./../../texture-edges.jpg"


export default function C2_Model(props) {
    const [visible, setVisible] = useState(true)

    const group = useRef();
    const { nodes, materials } = useGLTF(C2);
    const textureEdges = useLoader(TextureLoader, textureEdgesImg)
    const textureWeld = useLoader(TextureLoader, textureWeldImg)

    const closeHandler = () => {
        const vis = !visible
        setVisible(!vis)
    }

    return (
        <group
            ref={group}
            {...props}
            dispose={null}
            scale={0.2}
            onPointerOver={(e) => e.object.material.color.set('aquamarine')}
            onPointerOut={(e) => e.object.material.color.set('white')}
        >
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.mesh_0.geometry}
                material={nodes.mesh_0.material}
                onClick={closeHandler}
            >
                <meshLambertMaterial map={textureEdges}></meshLambertMaterial>
            </mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.mesh_0_1.geometry}
                material={nodes.mesh_0_1.material}
                opacity
            >
                <meshStandardMaterial map={textureWeld} />
            </mesh>
        </group>
    );
}

useGLTF.preload(C2);