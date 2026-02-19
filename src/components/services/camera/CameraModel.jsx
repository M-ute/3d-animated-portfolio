/* eslint-disable react/no-unknown-property */

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function CameraModel(props) {
  const { nodes, materials } = useGLTF('/cameraModel.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_4.geometry} material={materials.Camera} scale={0.2} />
    </group>
  )
}

useGLTF.preload('/cameraModel.glb')