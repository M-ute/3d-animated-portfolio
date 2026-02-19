/* eslint-disable react/no-unknown-property */

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function DroneModel(props) {
  const { nodes, materials } = useGLTF('/droneModel.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <group position={[-24.768, 71.4, 38.401]} rotation={[-0.03, 0.066, 2.001]}>
          <group position={[109.168, 64.065, -10.984]} rotation={[-1.505, 0.038, 3.136]}>
            <mesh geometry={nodes.B_L_04_2.geometry} material={materials['lambert1.001']} />
            <mesh geometry={nodes.B_L_12.geometry} material={materials['lambert1.001']} position={[-0.234, -3.388, -0.008]} rotation={[-1.432, 0, 1.18]} />
            <mesh geometry={nodes.B_L_13.geometry} material={materials['lambert1.001']} position={[-3.945, -8.301, -8.531]} rotation={[0.018, -0.164, -0.02]}>
              <mesh geometry={nodes.B_L_15.geometry} material={materials['lambert1.001']} position={[0.088, 2.01, -0.374]} rotation={[-0.001, -0.086, -0.01]} />
            </mesh>
            <mesh geometry={nodes.B_L_14.geometry} material={materials['lambert1.001']} position={[3.161, -8.306, 7.984]} rotation={[0.007, -0.229, -0.03]}>
              <mesh geometry={nodes.B_L_16.geometry} material={materials['lambert1.001']} position={[0.141, 1.489, 0.219]} rotation={[0.009, -0.021, -0.003]} />
            </mesh>
            <mesh geometry={nodes.B_L_17.geometry} material={materials['lambert1.001']} position={[-0.424, -7.318, -0.165]} rotation={[-1.432, 0, 1.18]} />
            <mesh geometry={nodes.B_L_18.geometry} material={materials['lambert1.001']} position={[3.393, -2.882, 8.055]} rotation={[-1.432, 0, 1.18]} />
            <mesh geometry={nodes.B_L_19.geometry} material={materials['lambert1.001']} position={[-3.688, -2.285, -8.481]} rotation={[-1.432, 0, 1.18]} />
          </group>
          <mesh geometry={nodes.B_L_03.geometry} material={materials['lambert1.001']} position={[109.053, 63.316, 2.643]} rotation={[-0.073, 0, -2]} />
          <mesh geometry={nodes.B_L_05.geometry} material={materials['lambert1.001']} position={[0.754, 12.532, -7.977]} rotation={[-0.073, 0, -2]} />
          <mesh geometry={nodes.B_L_06.geometry} material={materials['lambert1.001']} position={[90.012, 51.561, 17.737]} rotation={[-0.073, 0, -2]} />
          <mesh geometry={nodes.B_L_07.geometry} material={materials['lambert1.001']} position={[118.884, 67.389, 13.577]} rotation={[-0.073, 0, -2]} />
          <mesh geometry={nodes.B_L_08.geometry} material={materials['lambert1.001']} position={[107.324, 61.391, 16.043]} rotation={[-0.073, 0, -2]} />
          <mesh geometry={nodes.B_L_09.geometry} material={materials['lambert1.001']} />
          <mesh geometry={nodes.B_L_10.geometry} material={materials['lambert1.001']} position={[50.176, 29.858, 6.918]} rotation={[-0.073, 0, -2]} />
          <mesh geometry={nodes.B_L_11.geometry} material={materials['lambert1.001']} position={[109.436, 64.071, -13.344]} rotation={[-0.073, 0, -2]} />
          <mesh geometry={nodes.B_L_20.geometry} material={materials['lambert1.001']} position={[-0.575, 12.762, 7.608]} rotation={[-0.073, 0, -2]} />
        </group>
        <group position={[24.768, 71.4, 38.401]} rotation={[-0.03, -0.066, -2.001]}>
          <group position={[-109.168, 64.067, -11.015]} rotation={[-1.505, -0.038, -3.136]}>
            <mesh geometry={nodes.B_R_04_2.geometry} material={materials['lambert1.001']} />
            <mesh geometry={nodes.B_R_11.geometry} material={materials['lambert1.001']} position={[0.26, -1.749, -0.14]} rotation={[-1.432, 0, -1.18]} />
            <mesh geometry={nodes.B_R_12.geometry} material={materials['lambert1.001']} position={[0.234, -3.388, -0.008]} rotation={[-1.432, 0, -1.18]} />
            <mesh geometry={nodes.B_R_13.geometry} material={materials['lambert1.001']} position={[-3.159, -8.309, 7.988]} rotation={[0.049, 0.059, 0.005]}>
              <mesh geometry={nodes.B_R_16.geometry} material={materials['lambert1.001']} position={[-0.136, 1.516, 0.18]} rotation={[0.003, 0.192, 0.034]} />
            </mesh>
            <mesh geometry={nodes.B_R_14.geometry} material={materials['lambert1.001']} position={[3.806, -8.05, -8.601]} rotation={[0.034, 0.182, 0.019]}>
              <mesh geometry={nodes.B_R_15.geometry} material={materials['lambert1.001']} position={[0.937, 1.747, -1.527]} rotation={[-0.017, 0.069, 0.008]} />
            </mesh>
            <mesh geometry={nodes.B_R_17.geometry} material={materials['lambert1.001']} position={[0.424, -7.318, -0.165]} rotation={[-1.432, 0, -1.18]} />
            <mesh geometry={nodes.B_R_18.geometry} material={materials['lambert1.001']} position={[-3.393, -2.882, 8.055]} rotation={[-1.432, 0, -1.18]} />
            <mesh geometry={nodes.B_R_19.geometry} material={materials['lambert1.001']} position={[3.688, -2.285, -8.481]} rotation={[-1.432, 0, -1.18]} />
          </group>
          <mesh geometry={nodes.B_R_03.geometry} material={materials['lambert1.001']} position={[-109.053, 63.316, 2.643]} rotation={[-0.073, 0, 2]} />
          <mesh geometry={nodes.B_R_05.geometry} material={materials['lambert1.001']} position={[-0.754, 12.532, -7.977]} rotation={[-0.073, 0, 2]} />
          <mesh geometry={nodes.B_R_06.geometry} material={materials['lambert1.001']} position={[-90.012, 51.561, 17.737]} rotation={[-0.073, 0, 2]} />
          <mesh geometry={nodes.B_R_07.geometry} material={materials['lambert1.001']} position={[-118.884, 67.389, 13.577]} rotation={[-0.073, 0, 2]} />
          <mesh geometry={nodes.B_R_08.geometry} material={materials['lambert1.001']} position={[-107.324, 61.391, 16.043]} rotation={[-0.073, 0, 2]} />
          <mesh geometry={nodes.B_R_09.geometry} material={materials['lambert1.001']} />
          <mesh geometry={nodes.B_R_10.geometry} material={materials['lambert1.001']} position={[-50.176, 29.858, 6.918]} rotation={[-0.073, 0, 2]} />
          <mesh geometry={nodes.B_R_20.geometry} material={materials['lambert1.001']} position={[0.575, 12.762, 7.608]} rotation={[-0.073, 0, 2]} />
        </group>
        <group position={[0, -5.072, 27.902]}>
          <mesh geometry={nodes.body1_10.geometry} material={materials['lambert1.001']} />
          <mesh geometry={nodes.body1_11.geometry} material={materials['lambert1.001']} />
          <mesh geometry={nodes.body1_12.geometry} material={materials['lambert1.001']} />
          <mesh geometry={nodes.body1_13.geometry} material={materials['lambert1.001']} />
          <mesh geometry={nodes.body1_14_1.geometry} material={materials['lambert1.001']} position={[-0.002, -92.309, 21.27]} rotation={[-0.007, 0, 0]} />
          <mesh geometry={nodes.body1_15.geometry} material={materials['lambert1.001']} />
          <mesh geometry={nodes.body1_16.geometry} material={materials['lambert1.001']} />
          <mesh geometry={nodes.body1_17.geometry} material={materials['lambert1.001']} />
          <mesh geometry={nodes.body1_18.geometry} material={materials['lambert1.001']} />
          <mesh geometry={nodes.body1_19.geometry} material={materials['lambert1.001']} />
          <mesh geometry={nodes.body1_2.geometry} material={materials['lambert1.001']} />
          <mesh geometry={nodes.body1_20.geometry} material={materials['lambert1.001']} />
          <mesh geometry={nodes.body1_21.geometry} material={materials['lambert1.001']} />
          <mesh geometry={nodes.body1_22.geometry} material={materials['lambert1.001']} />
          <mesh geometry={nodes.body1_23.geometry} material={materials['lambert1.001']} />
          <mesh geometry={nodes.body1_24.geometry} material={materials['lambert1.001']} />
          <mesh geometry={nodes.body1_3.geometry} material={materials['lambert1.001']} />
          <mesh geometry={nodes.body1_4.geometry} material={materials['lambert1.001']} />
          <mesh geometry={nodes.body1_5.geometry} material={materials['lambert1.001']} />
          <mesh geometry={nodes.body1_6.geometry} material={materials['lambert1.001']} />
          <mesh geometry={nodes.body1_7.geometry} material={materials['lambert1.001']} />
          <mesh geometry={nodes.body1_8.geometry} material={materials['lambert1.001']} />
          <mesh geometry={nodes.body1_9.geometry} material={materials['lambert1.001']} />
          <mesh geometry={nodes.平面.geometry} material={materials['lambert1.001']} position={[23.346, 46.967, 18.454]} rotation={[0.004, -0.209, 0.018]} />
          <mesh geometry={nodes.平面_1.geometry} material={materials['lambert1.001']} position={[16.124, 82.491, 23.499]} rotation={[0.644, -0.021, 1.406]} />
          <mesh geometry={nodes.平面_2.geometry} material={materials['lambert1.001']} position={[-23.284, 46.162, 18.797]} rotation={[0.007, 0.192, 3.106]} />
          <mesh geometry={nodes.平面_3.geometry} material={materials['lambert1.001']} position={[-16.139, 82.565, 23.556]} rotation={[0.611, 0.218, 1.734]} />
        </group>
        <group position={[-31.213, -34.647, 27.947]} rotation={[1.15, -1.101, -0.379]}>
          <group position={[-8.661, -27.371, 125.348]} rotation={[0.067, 0.065, -0.037]}>
            <mesh geometry={nodes.F_R_03.geometry} material={materials['lambert1.001']} />
            <mesh geometry={nodes.F_R_04.geometry} material={materials['lambert1.001']} position={[0.47, -3.148, 0.278]} rotation={[-1.493, 0.047, -0.771]} />
            <mesh geometry={nodes.F_R_05.geometry} material={materials['lambert1.001']} position={[-8.539, -8.286, 0.327]} rotation={[-0.036, 0.686, 0.036]}>
              <mesh geometry={nodes.F_R_06.geometry} material={materials['lambert1.001']} position={[-0.192, 1.463, -0.195]} rotation={[-0.007, 0.011, 0.001]} />
            </mesh>
            <mesh geometry={nodes.F_R_07.geometry} material={materials['lambert1.001']} position={[9.437, -8.311, 0.215]} rotation={[-0.033, 0.669, 0.032]}>
              <mesh geometry={nodes.F_R_08.geometry} material={materials['lambert1.001']} position={[0.381, 2.019, -0.084]} rotation={[-0.008, 0.028, 0.004]} />
            </mesh>
            <mesh geometry={nodes.F_R_09.geometry} material={materials['lambert1.001']} position={[-53.284, -9.115, -164.472]} rotation={[-1.493, 0.047, -0.771]} />
            <mesh geometry={nodes.F_R_10.geometry} material={materials['lambert1.001']} position={[-53.284, -9.115, -164.472]} rotation={[-1.493, 0.047, -0.771]} />
            <mesh geometry={nodes.F_R_11.geometry} material={materials['lambert1.001']} position={[0.364, -8.625, 0.336]} rotation={[-0.046, 0.696, 0.043]} />
            <mesh geometry={nodes.F_R_12.geometry} material={materials['lambert1.001']} position={[-53.284, -9.115, -164.472]} rotation={[-1.493, 0.047, -0.771]} />
          </group>
          <mesh geometry={nodes.air3.geometry} material={materials['SY_AIR3.001']} position={[5.005, -6.052, 52.636]} rotation={[1.558, 0.184, 1.664]} />
          <mesh geometry={nodes.F_L_13.geometry} material={materials['lambert1.001']} position={[3.295, -6.601, 129.562]} rotation={[1.794, 1.524, -1.608]} />
          <mesh geometry={nodes.F_L_14.geometry} material={materials['lambert1.001']} position={[-9.682, 0.948, 113.05]} rotation={[-1.496, 0.045, 0.332]} />
          <mesh geometry={nodes.F_L_15.geometry} material={materials['lambert1.001']} position={[-18.627, -5.428, 129.697]} rotation={[-0.091, -1.315, 2.873]} />
          <mesh geometry={nodes.F_L_16.geometry} material={materials['lambert1.001']} position={[-18.319, -19.494, -47.33]} rotation={[-1.384, 0.001, 1.136]} />
          <mesh geometry={nodes.F_L_17.geometry} material={materials['lambert1.001']} position={[-18.319, -19.494, -47.33]} rotation={[-1.384, 0.001, 1.136]} />
          <mesh geometry={nodes.F_L_18.geometry} material={materials['lambert1.001']} position={[-18.319, -19.494, -47.33]} rotation={[-1.384, 0.001, 1.136]} />
          <mesh geometry={nodes.F_L_19.geometry} material={materials['lambert1.001']} position={[-5.777, 17.16, 126.912]} rotation={[-1.384, 0.001, 1.136]} />
          <mesh geometry={nodes.F_L_20.geometry} material={materials['lambert1.001']} position={[-18.319, -19.494, -47.33]} rotation={[-1.384, 0.001, 1.136]} />
          <mesh geometry={nodes.F_L_21.geometry} material={materials['lambert1.001']} position={[-18.319, -19.494, -47.33]} rotation={[-1.384, 0.001, 1.136]} />
        </group>
        <group position={[31.217, -34.646, 27.948]} rotation={[1.156, 1.097, 0.373]}>
          <group position={[9.224, -27.109, 125.347]} rotation={[0.081, -0.599, 0.048]}>
            <mesh geometry={nodes.F_L_03.geometry} material={materials['lambert1.001']}>
              <mesh geometry={nodes.圆柱体.geometry} material={materials['lambert1.001']} position={[0, 10.232, 0]} />
            </mesh>
            <mesh geometry={nodes.F_L_04.geometry} material={materials['lambert1.001']} position={[-7.987, -2.284, 4.764]} rotation={[-1.48, 0, 1.31]} />
            <mesh geometry={nodes.F_L_05.geometry} material={materials['lambert1.001']} position={[7.505, -2.882, -4.379]} rotation={[-1.48, 0, 1.31]} />
            <mesh geometry={nodes.F_L_06.geometry} material={materials['lambert1.001']} position={[-0.122, -7.319, 0.43]} rotation={[-1.48, 0, 1.31]} />
            <mesh geometry={nodes.F_L_07.geometry} material={materials['lambert1.001']} position={[-0.134, -1.749, 0.278]} rotation={[-1.48, 0, 1.31]} />
            <mesh geometry={nodes.F_L_08.geometry} material={materials['lambert1.001']} position={[-8.077, -7.807, 4.906]} rotation={[-0.026, -0.128, -0.015]}>
              <mesh geometry={nodes.F_L_09.geometry} material={materials['lambert1.001']} position={[0.728, 1.499, -0.874]} rotation={[-0.008, -0.028, -0.004]} />
            </mesh>
            <mesh geometry={nodes.F_L_10.geometry} material={materials['lambert1.001']} position={[7.493, -8.286, -4.107]} rotation={[-0.028, -0.152, -0.018]}>
              <mesh geometry={nodes.F_L_11.geometry} material={materials['lambert1.001']} position={[-0.782, 1.512, 0.718]} rotation={[-0.008, -0.004, 0]} />
            </mesh>
            <mesh geometry={nodes.F_L_12.geometry} material={materials['lambert1.001']} position={[-0.259, -3.148, 0.48]} rotation={[-1.48, 0, 1.31]} />
          </group>
          <mesh geometry={nodes.F_R_13.geometry} material={materials['lambert1.001']} position={[-2.739, -6.408, 129.609]} rotation={[1.481, -1.535, 1.297]} />
          <mesh geometry={nodes.F_R_14.geometry} material={materials['lambert1.001']} position={[19.241, -5.257, 129.564]} rotation={[-0.121, 1.292, 0.307]} />
          <mesh geometry={nodes.F_R_15.geometry} material={materials['lambert1.001']} position={[10.225, 0.818, 113.002]} rotation={[-1.479, -0.044, -1.134]} />
          <mesh geometry={nodes.F_R_17.geometry} material={materials['lambert1.001']} position={[18.09, -19.566, -47.39]} rotation={[-1.386, 0, -1.132]} />
          <mesh geometry={nodes.F_R_18.geometry} material={materials['lambert1.001']} position={[18.09, -19.566, -47.39]} rotation={[-1.386, 0, -1.132]} />
          <mesh geometry={nodes.F_R_19.geometry} material={materials['lambert1.001']} position={[18.09, -19.566, -47.39]} rotation={[-1.386, 0, -1.132]} />
          <mesh geometry={nodes.F_R_20.geometry} material={materials['lambert1.001']} position={[6.368, 17.331, 126.857]} rotation={[-1.386, 0, -1.132]} />
          <mesh geometry={nodes.F_R_21.geometry} material={materials['lambert1.001']} position={[18.09, -19.566, -47.39]} rotation={[-1.386, 0, -1.132]} />
          <mesh geometry={nodes.F_R_22.geometry} material={materials['lambert1.001']} position={[18.09, -19.566, -47.39]} rotation={[-1.386, 0, -1.132]} />
        </group>
        <group position={[0.275, -36.141, 34.46]}>
          <group position={[-0.275, -53.612, 12.12]}>
            <mesh geometry={nodes.lingjian1.geometry} material={materials['lambert1.001']} position={[15.537, -1.512, -10.78]} />
            <mesh geometry={nodes.lingjian1_2.geometry} material={materials['lambert1.001']} position={[-15.537, -1.512, -10.78]} />
            <mesh geometry={nodes.lingjian1_3.geometry} material={materials['lambert1.001']} position={[14.545, 1.512, 10.78]} />
            <mesh geometry={nodes.lingjian1_4.geometry} material={materials['lambert1.001']} position={[-14.545, 1.512, 10.78]} />
          </group>
          <mesh geometry={nodes.lingjian1_10.geometry} material={materials['lambert1.001']} position={[34.326, 6.433, -1.67]} />
          <mesh geometry={nodes.lingjian1_11.geometry} material={materials['lambert1.001']} position={[-27.376, -25.979, -21.521]} />
          <mesh geometry={nodes.lingjian1_12.geometry} material={materials['lambert1.001']} position={[-18.655, -23.356, -24.946]} />
          <mesh geometry={nodes.lingjian1_13.geometry} material={materials['lambert1.001']} position={[-17.702, -0.601, 3.903]} />
          <mesh geometry={nodes.lingjian1_14.geometry} material={materials['lambert1.001']} position={[-32.703, 49.942, -27.675]} />
          <mesh geometry={nodes.lingjian1_15.geometry} material={materials['lambert1.001']} position={[-34.875, 6.433, -1.67]} />
          <mesh geometry={nodes.lingjian1_16.geometry} material={materials['lambert1.001']} position={[-31.738, 12.621, -20.365]} />
          <mesh geometry={nodes.lingjian1_17.geometry} material={materials['lambert1.001']} position={[-33.722, 96.265, -33.539]} rotation={[0, -1.571, 0]} />
          <mesh geometry={nodes.lingjian1_18.geometry} material={materials['lambert1.001']} position={[-22.955, 101.457, 17.495]} />
          <mesh geometry={nodes.lingjian1_19.geometry} material={materials['lambert1.001']} position={[-23.412, 62.675, 18.954]} />
          <mesh geometry={nodes.lingjian1_20.geometry} material={materials['lambert1.001']} position={[22.863, 62.675, 18.954]} />
          <mesh geometry={nodes.lingjian1_21.geometry} material={materials['lambert1.001']} position={[22.406, 101.457, 17.495]} />
          <mesh geometry={nodes.lingjian1_22.geometry} material={materials['lambert1.001']} position={[33.172, 96.265, -33.539]} rotation={[0, 1.571, 0]} />
          <mesh geometry={nodes.lingjian1_23.geometry} material={materials['lambert1.001']} position={[32.153, 49.942, -27.675]} />
          <mesh geometry={nodes.lingjian1_24.geometry} material={materials['lambert1.001']} position={[31.189, 12.621, -20.365]} />
          <mesh geometry={nodes.lingjian1_5.geometry} material={materials['lambert1.001']} position={[26.827, -25.979, -21.521]} />
          <mesh geometry={nodes.lingjian1_6.geometry} material={materials['lambert1.001']} position={[18.106, -23.356, -24.946]} />
          <mesh geometry={nodes.lingjian1_7.geometry} material={materials['lambert1.001']} position={[18.68, 6.743, 24.758]} />
          <mesh geometry={nodes.lingjian1_8.geometry} material={materials['lambert1.001']} position={[-19.229, 6.743, 24.758]} />
          <mesh geometry={nodes.lingjian1_9.geometry} material={materials['lambert1.001']} position={[17.153, -0.601, 3.903]} />
        </group>
        <group position={[0.465, 52.224, 20.653]}>
          <mesh geometry={nodes.lingjian1_100.geometry} material={materials['lambert1.001']} position={[-29.356, 19.361, -5.921]} />
          <mesh geometry={nodes.lingjian1_101.geometry} material={materials['lambert1.001']} position={[-29.192, 18.749, -3.766]} />
          <mesh geometry={nodes.lingjian1_102.geometry} material={materials['lambert1.001']} position={[-29.34, 22.963, -5.37]} />
          <mesh geometry={nodes.lingjian1_103.geometry} material={materials['lambert1.001']} position={[-29.355, 22.215, -6.046]} />
          <mesh geometry={nodes.lingjian1_104.geometry} material={materials['lambert1.001']} position={[-29.312, 18.679, -5.185]} />
          <mesh geometry={nodes.lingjian1_105.geometry} material={materials['lambert1.001']} position={[-29.367, 20.075, -5.953]} />
          <mesh geometry={nodes.lingjian1_106.geometry} material={materials['lambert1.001']} position={[-29.262, 18.713, -4.478]} />
          <mesh geometry={nodes.lingjian1_107.geometry} material={materials['lambert1.001']} position={[-29.276, 24.371, -6.144]} />
          <mesh geometry={nodes.lingjian1_108.geometry} material={materials['lambert1.001']} position={[-29.308, 23.652, -6.111]} />
          <mesh geometry={nodes.lingjian1_109.geometry} material={materials['lambert1.001']} position={[-29.293, 24.401, -5.435]} />
          <mesh geometry={nodes.lingjian1_110.geometry} material={materials['lambert1.001']} position={[-29.211, 24.496, -3.302]} />
          <mesh geometry={nodes.lingjian1_111.geometry} material={materials['lambert1.001']} position={[-29.255, 24.462, -4.017]} />
          <mesh geometry={nodes.lingjian1_112.geometry} material={materials['lambert1.001']} position={[-29.283, 24.431, -4.728]} />
          <mesh geometry={nodes.lingjian1_113.geometry} material={materials['lambert1.001']} position={[-29.319, 23.682, -5.403]} />
          <mesh geometry={nodes.lingjian1_114.geometry} material={materials['lambert1.001']} position={[-29.334, 22.932, -6.078]} />
          <mesh geometry={nodes.lingjian1_115.geometry} material={materials['lambert1.001']} position={[-29.224, 23.778, -3.269]} />
          <mesh geometry={nodes.lingjian1_116.geometry} material={materials['lambert1.001']} position={[-29.304, 23.713, -4.695]} />
          <mesh geometry={nodes.lingjian1_117.geometry} material={materials['lambert1.001']} position={[-29.168, 22.373, -2.588]} />
          <mesh geometry={nodes.lingjian1_118.geometry} material={materials['lambert1.001']} position={[-29.158, 21.66, -2.582]} />
          <mesh geometry={nodes.lingjian1_119.geometry} material={materials['lambert1.001']} position={[-29.128, 20.951, -2.574]} />
          <mesh geometry={nodes.lingjian1_120.geometry} material={materials['lambert1.001']} position={[-29.085, 20.241, -2.563]} />
          <mesh geometry={nodes.lingjian1_121.geometry} material={materials['lambert1.001']} position={[-29.361, 20.045, -6.573]} />
          <mesh geometry={nodes.lingjian1_122.geometry} material={materials['lambert1.001']} position={[-29.358, 20.758, -6.629]} />
          <mesh geometry={nodes.lingjian1_123.geometry} material={materials['lambert1.001']} position={[-29.348, 21.471, -6.684]} />
          <mesh geometry={nodes.lingjian1_124.geometry} material={materials['lambert1.001']} position={[-29.159, 24.525, -2.617]} />
          <mesh geometry={nodes.lingjian1_125.geometry} material={materials['lambert1.001']} position={[-29.165, 23.81, -2.601]} />
          <mesh geometry={nodes.lingjian1_126.geometry} material={materials['lambert1.001']} position={[-29.17, 23.09, -2.593]} />
          <mesh geometry={nodes.lingjian1_127.geometry} material={materials['lambert1.001']} position={[-26.367, 19.919, -4.916]} />
          <mesh geometry={nodes.lingjian1_128.geometry} material={materials['lambert1.001']} position={[25.437, 19.919, -4.916]} />
          <mesh geometry={nodes.lingjian1_129.geometry} material={materials['lambert1.001']} position={[28.291, 21.63, -3.176]} />
          <mesh geometry={nodes.lingjian1_130.geometry} material={materials['lambert1.001']} position={[28.237, 18.031, -3.741]} />
          <mesh geometry={nodes.lingjian1_131.geometry} material={materials['lambert1.001']} position={[28.105, 19.529, -2.552]} />
          <mesh geometry={nodes.lingjian1_132.geometry} material={materials['lambert1.001']} position={[28.04, 18.923, -2.574]} />
          <mesh geometry={nodes.lingjian1_133.geometry} material={materials['lambert1.001']} position={[28.129, 18.121, -3.056]} />
          <mesh geometry={nodes.lingjian1_134.geometry} material={materials['lambert1.001']} position={[28.126, 17.542, -3.887]} />
          <mesh geometry={nodes.lingjian1_135.geometry} material={materials['lambert1.001']} position={[28.257, 17.368, -4.419]} />
          <mesh geometry={nodes.lingjian1_136.geometry} material={materials['lambert1.001']} position={[28.331, 17.241, -5.123]} />
          <mesh geometry={nodes.lingjian1_137.geometry} material={materials['lambert1.001']} position={[28.338, 25.036, -5.463]} />
          <mesh geometry={nodes.lingjian1_138.geometry} material={materials['lambert1.001']} position={[28.328, 25.126, -4.758]} />
          <mesh geometry={nodes.lingjian1_139.geometry} material={materials['lambert1.001']} position={[28.303, 25.181, -4.049]} />
          <mesh geometry={nodes.lingjian1_140.geometry} material={materials['lambert1.001']} position={[28.265, 25.21, -3.335]} />
          <mesh geometry={nodes.lingjian1_141.geometry} material={materials['lambert1.001']} position={[28.18, 25.155, -2.727]} />
          <mesh geometry={nodes.lingjian1_142.geometry} material={materials['lambert1.001']} position={[28.229, 24.525, -2.617]} />
          <mesh geometry={nodes.lingjian1_143.geometry} material={materials['lambert1.001']} position={[28.236, 23.81, -2.601]} />
          <mesh geometry={nodes.lingjian1_144.geometry} material={materials['lambert1.001']} position={[28.241, 23.09, -2.593]} />
          <mesh geometry={nodes.lingjian1_145.geometry} material={materials['lambert1.001']} position={[28.238, 22.373, -2.588]} />
          <mesh geometry={nodes.lingjian1_146.geometry} material={materials['lambert1.001']} position={[28.229, 21.66, -2.582]} />
          <mesh geometry={nodes.lingjian1_147.geometry} material={materials['lambert1.001']} position={[28.199, 20.951, -2.574]} />
          <mesh geometry={nodes.lingjian1_148.geometry} material={materials['lambert1.001']} position={[28.156, 20.241, -2.563]} />
          <mesh geometry={nodes.lingjian1_149.geometry} material={materials['lambert1.001']} position={[28.354, 24.431, -4.728]} />
          <mesh geometry={nodes.lingjian1_150.geometry} material={materials['lambert1.001']} position={[28.389, 23.682, -5.403]} />
          <mesh geometry={nodes.lingjian1_151.geometry} material={materials['lambert1.001']} position={[28.405, 22.932, -6.078]} />
          <mesh geometry={nodes.lingjian1_152.geometry} material={materials['lambert1.001']} position={[28.295, 23.778, -3.269]} />
          <mesh geometry={nodes.lingjian1_153.geometry} material={materials['lambert1.001']} position={[28.375, 23.713, -4.695]} />
          <mesh geometry={nodes.lingjian1_154.geometry} material={materials['lambert1.001']} position={[28.342, 23.745, -3.984]} />
          <mesh geometry={nodes.lingjian1_155.geometry} material={materials['lambert1.001']} position={[28.3, 17.995, -4.445]} />
          <mesh geometry={nodes.lingjian1_156.geometry} material={materials['lambert1.001']} position={[28.176, 18.786, -3.052]} />
          <mesh geometry={nodes.lingjian1_157.geometry} material={materials['lambert1.001']} position={[28.392, 17.928, -5.856]} />
          <mesh geometry={nodes.lingjian1_158.geometry} material={materials['lambert1.001']} position={[28.411, 18.646, -5.889]} />
          <mesh geometry={nodes.lingjian1_159.geometry} material={materials['lambert1.001']} position={[28.357, 17.961, -5.152]} />
          <mesh geometry={nodes.lingjian1_160.geometry} material={materials['lambert1.001']} position={[28.427, 19.361, -5.921]} />
          <mesh geometry={nodes.lingjian1_161.geometry} material={materials['lambert1.001']} position={[28.263, 18.749, -3.766]} />
          <mesh geometry={nodes.lingjian1_162.geometry} material={materials['lambert1.001']} position={[28.296, 19.463, -3.798]} />
          <mesh geometry={nodes.lingjian1_163.geometry} material={materials['lambert1.001']} position={[28.36, 19.427, -4.509]} />
          <mesh geometry={nodes.lingjian1_164.geometry} material={materials['lambert1.001']} position={[28.425, 22.246, -5.339]} />
          <mesh geometry={nodes.lingjian1_165.geometry} material={materials['lambert1.001']} position={[28.419, 20.107, -5.247]} />
          <mesh geometry={nodes.lingjian1_166.geometry} material={materials['lambert1.001']} position={[28.347, 24.371, -6.144]} />
          <mesh geometry={nodes.lingjian1_167.geometry} material={materials['lambert1.001']} position={[28.378, 23.652, -6.111]} />
          <mesh geometry={nodes.lingjian1_168.geometry} material={materials['lambert1.001']} position={[28.363, 24.401, -5.435]} />
          <mesh geometry={nodes.lingjian1_169.geometry} material={materials['lambert1.001']} position={[28.282, 24.496, -3.302]} />
          <mesh geometry={nodes.lingjian1_170.geometry} material={materials['lambert1.001']} position={[28.325, 24.462, -4.017]} />
          <mesh geometry={nodes.lingjian1_171.geometry} material={materials['lambert1.001']} position={[28.401, 22.277, -4.632]} />
          <mesh geometry={nodes.lingjian1_172.geometry} material={materials['lambert1.001']} position={[28.429, 20.82, -5.279]} />
          <mesh geometry={nodes.lingjian1_173.geometry} material={materials['lambert1.001']} position={[28.432, 21.532, -5.309]} />
          <mesh geometry={nodes.lingjian1_174.geometry} material={materials['lambert1.001']} position={[28.359, 22.31, -3.92]} />
          <mesh geometry={nodes.lingjian1_175.geometry} material={materials['lambert1.001']} position={[28.381, 20.14, -4.54]} />
          <mesh geometry={nodes.lingjian1_176.geometry} material={materials['lambert1.001']} position={[28.248, 20.211, -3.117]} />
          <mesh geometry={nodes.lingjian1_177.geometry} material={materials['lambert1.001']} position={[28.323, 20.175, -3.829]} />
          <mesh geometry={nodes.lingjian1_178.geometry} material={materials['lambert1.001']} position={[28.3, 22.343, -3.205]} />
          <mesh geometry={nodes.lingjian1_179.geometry} material={materials['lambert1.001']} position={[28.403, 21.564, -4.601]} />
          <mesh geometry={nodes.lingjian1_180.geometry} material={materials['lambert1.001']} position={[28.41, 22.963, -5.37]} />
          <mesh geometry={nodes.lingjian1_181.geometry} material={materials['lambert1.001']} position={[28.425, 22.215, -6.046]} />
          <mesh geometry={nodes.lingjian1_182.geometry} material={materials['lambert1.001']} position={[28.383, 18.679, -5.185]} />
          <mesh geometry={nodes.lingjian1_183.geometry} material={materials['lambert1.001']} position={[28.438, 20.075, -5.953]} />
          <mesh geometry={nodes.lingjian1_184.geometry} material={materials['lambert1.001']} position={[28.333, 18.713, -4.478]} />
          <mesh geometry={nodes.lingjian1_185.geometry} material={materials['lambert1.001']} position={[28.391, 22.994, -4.663]} />
          <mesh geometry={nodes.lingjian1_186.geometry} material={materials['lambert1.001']} position={[28.354, 23.026, -3.952]} />
          <mesh geometry={nodes.lingjian1_187.geometry} material={materials['lambert1.001']} position={[28.443, 20.788, -5.985]} />
          <mesh geometry={nodes.lingjian1_188.geometry} material={materials['lambert1.001']} position={[28.301, 23.06, -3.236]} />
          <mesh geometry={nodes.lingjian1_189.geometry} material={materials['lambert1.001']} position={[28.439, 21.501, -6.016]} />
          <mesh geometry={nodes.lingjian1_190.geometry} material={materials['lambert1.001']} position={[28.404, 19.393, -5.215]} />
          <mesh geometry={nodes.lingjian1_191.geometry} material={materials['lambert1.001']} position={[28.215, 19.5, -3.085]} />
          <mesh geometry={nodes.lingjian1_192.geometry} material={materials['lambert1.001']} position={[28.369, 17.217, -5.824]} />
          <mesh geometry={nodes.lingjian1_193.geometry} material={materials['lambert1.001']} position={[-0.465, -52.224, -20.653]} />
          <mesh geometry={nodes.lingjian1_194.geometry} material={materials['lambert1.001']} position={[28.36, 17.902, -6.396]} />
          <mesh geometry={nodes.lingjian1_195.geometry} material={materials['lambert1.001']} position={[28.397, 18.619, -6.458]} />
          <mesh geometry={nodes.lingjian1_196.geometry} material={materials['lambert1.001']} position={[28.428, 19.333, -6.516]} />
          <mesh geometry={nodes.lingjian1_197.geometry} material={materials['lambert1.001']} position={[28.432, 20.045, -6.573]} />
          <mesh geometry={nodes.lingjian1_198.geometry} material={materials['lambert1.001']} position={[28.429, 20.758, -6.629]} />
          <mesh geometry={nodes.lingjian1_199.geometry} material={materials['lambert1.001']} position={[28.419, 21.471, -6.684]} />
          <mesh geometry={nodes.lingjian1_200.geometry} material={materials['lambert1.001']} position={[28.401, 22.185, -6.741]} />
          <mesh geometry={nodes.lingjian1_201.geometry} material={materials['lambert1.001']} position={[28.376, 22.901, -6.792]} />
          <mesh geometry={nodes.lingjian1_202.geometry} material={materials['lambert1.001']} position={[28.346, 23.62, -6.825]} />
          <mesh geometry={nodes.lingjian1_203.geometry} material={materials['lambert1.001']} position={[28.319, 24.34, -6.829]} />
          <mesh geometry={nodes.lingjian1_204.geometry} material={materials['lambert1.001']} position={[28.283, 24.944, -6.168]} />
          <mesh geometry={nodes.lingjian1_205.geometry} material={materials['lambert1.001']} position={[28.395, 20.852, -4.571]} />
          <mesh geometry={nodes.lingjian1_206.geometry} material={materials['lambert1.001']} position={[28.355, 21.597, -3.889]} />
          <mesh geometry={nodes.lingjian1_207.geometry} material={materials['lambert1.001']} position={[28.343, 20.886, -3.86]} />
          <mesh geometry={nodes.lingjian1_208.geometry} material={materials['lambert1.001']} position={[28.274, 20.921, -3.147]} />
          <mesh geometry={nodes.lingjian1_209.geometry} material={materials['lambert1.001']} position={[-0.465, -56.835, 41.627]} />
          <mesh geometry={nodes.lingjian1_210.geometry} material={materials['lambert1.001']} position={[-0.465, -56.832, 42.007]} />
          <mesh geometry={nodes.lingjian1_211.geometry} material={materials['lambert1.001']} position={[-5.213, -17.525, 42.287]} />
          <mesh geometry={nodes.lingjian1_212.geometry} material={materials['lambert1.001']} position={[4.284, -17.525, 42.287]} />
          <mesh geometry={nodes.lingjian1_213.geometry} material={materials['lambert1.001']} position={[-0.465, 3.638, 41.627]} />
          <mesh geometry={nodes.lingjian1_214.geometry} material={materials['lambert1.001']} position={[-0.465, 3.641, 42.007]} />
          <mesh geometry={nodes.lingjian1_215.geometry} material={materials['lambert1.001']} position={[-0.465, -101.215, 20.382]} />
          <mesh geometry={nodes.lingjian1_216.geometry} material={materials['lambert1.001']} position={[-0.465, -100.757, 20.281]} />
          <mesh geometry={nodes.lingjian1_217.geometry} material={materials['lambert1.001']} position={[-0.465, -92.94, 19.282]} />
          <mesh geometry={nodes.lingjian1_218.geometry} material={materials['lambert1.001']} position={[-9.083, -129.607, 36.848]} />
          <mesh geometry={nodes.lingjian1_219.geometry} material={materials['lambert1.001']} position={[7.859, -131.186, 35.822]} />
          <mesh geometry={nodes.lingjian1_220.geometry} material={materials['lambert1.001']} position={[-2.767, -143.284, 19.392]} />
          <mesh geometry={nodes.lingjian1_221.geometry} material={materials['lambert1.001']} position={[-2.795, -146.461, 19.725]} />
          <mesh geometry={nodes.lingjian1_222.geometry} material={materials['lambert1.001']} position={[-0.763, -141.965, 35.985]} />
          <mesh geometry={nodes.lingjian1_223.geometry} material={materials['lambert1.001']} position={[15.436, 8.347, 40.563]} />
          <mesh geometry={nodes.lingjian1_224.geometry} material={materials['lambert1.001']} position={[-0.465, -91.067, 34.71]} />
          <mesh geometry={nodes.lingjian1_225.geometry} material={materials['lambert1.001']} position={[-0.465, -108.002, -9.762]} />
          <mesh geometry={nodes.lingjian1_226.geometry} material={materials['lambert1.001']} position={[-0.465, 28.287, 31.923]} />
          <mesh geometry={nodes.lingjian1_227.geometry} material={materials['lambert1.001']} position={[-0.763, -141.116, 35.615]} />
          <mesh geometry={nodes.lingjian1_228.geometry} material={materials['lambert1.001']} position={[-0.46, -37.73, 40.712]} />
          <mesh geometry={nodes.lingjian1_229.geometry} material={materials['lambert1.001']} position={[-16.366, 8.347, 40.563]} />
          <mesh geometry={nodes.lingjian1_26.geometry} material={materials['lambert1.001']} position={[8.017, -123.841, 23.447]} />
          <mesh geometry={nodes.lingjian1_27.geometry} material={materials['lambert1.001']} position={[-27.076, 22.134, -4.825]} />
          <mesh geometry={nodes.lingjian1_28.geometry} material={materials['lambert1.001']} position={[26.147, 22.134, -4.825]} />
          <mesh geometry={nodes.lingjian1_29.geometry} material={materials['lambert1.001']} position={[-3.353, -123.68, 27.204]} />
          <mesh geometry={nodes.lingjian1_30.geometry} material={materials['lambert1.001']} position={[-8.951, -123.847, 23.419]} />
          <mesh geometry={nodes.lingjian1_31.geometry} material={materials['lambert1.001']} position={[-5.991, -123.68, 27.204]} />
          <mesh geometry={nodes.lingjian1_32.geometry} material={materials['lambert1.001']} position={[2.291, -123.68, 27.204]} />
          <mesh geometry={nodes.lingjian1_33.geometry} material={materials['lambert1.001']} position={[-0.514, -123.68, 27.204]} />
          <mesh geometry={nodes.lingjian1_34.geometry} material={materials['lambert1.001']} position={[5.202, -123.68, 27.204]} />
          <mesh geometry={nodes.lingjian1_35.geometry} material={materials['lambert1.001']} position={[0.412, 36.808, 2.209]} />
          <mesh geometry={nodes.lingjian1_36.geometry} material={materials['lambert1.001']} position={[4.969, 36.759, 2.209]} />
          <mesh geometry={nodes.lingjian1_37.geometry} material={materials['lambert1.001']} position={[9.526, 36.639, 2.209]} />
          <mesh geometry={nodes.lingjian1_38.geometry} material={materials['lambert1.001']} position={[14.081, 36.459, 2.209]} />
          <mesh geometry={nodes.lingjian1_39.geometry} material={materials['lambert1.001']} position={[27.158, -133.855, -21.272]} />
          <mesh geometry={nodes.lingjian1_40.geometry} material={materials['lambert1.001']} position={[27.76, -134.457, -21.477]} />
          <mesh geometry={nodes.lingjian1_41.geometry} material={materials['lambert1.001']} position={[-28.088, -133.855, -21.272]} />
          <mesh geometry={nodes.lingjian1_42.geometry} material={materials['lambert1.001']} position={[-28.689, -134.457, -21.477]} />
          <mesh geometry={nodes.lingjian1_43.geometry} material={materials['lambert1.001']} position={[28.314, 21.545, -21.526]} />
          <mesh geometry={nodes.lingjian1_44.geometry} material={materials['lambert1.001']} position={[27.276, 20.514, -21.039]} />
          <mesh geometry={nodes.lingjian1_45.geometry} material={materials['lambert1.001']} position={[-29.243, 21.545, -21.526]} />
          <mesh geometry={nodes.lingjian1_46.geometry} material={materials['lambert1.001']} position={[-28.206, 20.514, -21.039]} />
          <mesh geometry={nodes.lingjian1_47.geometry} material={materials['lambert1.001']} position={[-29.331, 22.185, -6.741]} />
          <mesh geometry={nodes.lingjian1_48.geometry} material={materials['lambert1.001']} position={[-29.305, 22.901, -6.792]} />
          <mesh geometry={nodes.lingjian1_49.geometry} material={materials['lambert1.001']} position={[-29.275, 23.62, -6.825]} />
          <mesh geometry={nodes.lingjian1_50.geometry} material={materials['lambert1.001']} position={[-29.248, 24.34, -6.829]} />
          <mesh geometry={nodes.lingjian1_51.geometry} material={materials['lambert1.001']} position={[-0.465, -52.224, -20.653]} />
          <mesh geometry={nodes.lingjian1_52.geometry} material={materials['lambert1.001']} position={[-29.267, 25.036, -5.463]} />
          <mesh geometry={nodes.lingjian1_53.geometry} material={materials['lambert1.001']} position={[-29.257, 25.126, -4.758]} />
          <mesh geometry={nodes.lingjian1_54.geometry} material={materials['lambert1.001']} position={[-29.233, 25.181, -4.049]} />
          <mesh geometry={nodes.lingjian1_55.geometry} material={materials['lambert1.001']} position={[-29.194, 25.21, -3.335]} />
          <mesh geometry={nodes.lingjian1_56.geometry} material={materials['lambert1.001']} position={[-29.109, 25.155, -2.727]} />
          <mesh geometry={nodes.lingjian1_57.geometry} material={materials['lambert1.001']} position={[-29.166, 18.031, -3.741]} />
          <mesh geometry={nodes.lingjian1_58.geometry} material={materials['lambert1.001']} position={[-29.035, 19.529, -2.552]} />
          <mesh geometry={nodes.lingjian1_59.geometry} material={materials['lambert1.001']} position={[-0.465, -52.224, -20.653]} />
          <mesh geometry={nodes.lingjian1_60.geometry} material={materials['lambert1.001']} position={[-29.058, 18.121, -3.056]} />
          <mesh geometry={nodes.lingjian1_61.geometry} material={materials['lambert1.001']} position={[-0.465, -52.224, -20.653]} />
          <mesh geometry={nodes.lingjian1_62.geometry} material={materials['lambert1.001']} position={[-29.187, 17.368, -4.419]} />
          <mesh geometry={nodes.lingjian1_63.geometry} material={materials['lambert1.001']} position={[-29.26, 17.241, -5.123]} />
          <mesh geometry={nodes.lingjian1_64.geometry} material={materials['lambert1.001']} position={[-29.298, 17.217, -5.824]} />
          <mesh geometry={nodes.lingjian1_65.geometry} material={materials['lambert1.001']} position={[-0.465, -52.224, -20.653]} />
          <mesh geometry={nodes.lingjian1_66.geometry} material={materials['lambert1.001']} position={[-29.29, 17.902, -6.396]} />
          <mesh geometry={nodes.lingjian1_67.geometry} material={materials['lambert1.001']} position={[-29.327, 18.619, -6.458]} />
          <mesh geometry={nodes.lingjian1_68.geometry} material={materials['lambert1.001']} position={[-29.357, 19.333, -6.516]} />
          <mesh geometry={nodes.lingjian1_69.geometry} material={materials['lambert1.001']} position={[-29.359, 20.82, -5.279]} />
          <mesh geometry={nodes.lingjian1_70.geometry} material={materials['lambert1.001']} position={[-29.362, 21.532, -5.309]} />
          <mesh geometry={nodes.lingjian1_71.geometry} material={materials['lambert1.001']} position={[-29.288, 22.31, -3.92]} />
          <mesh geometry={nodes.lingjian1_72.geometry} material={materials['lambert1.001']} position={[-29.31, 20.14, -4.54]} />
          <mesh geometry={nodes.lingjian1_73.geometry} material={materials['lambert1.001']} position={[-29.178, 20.211, -3.117]} />
          <mesh geometry={nodes.lingjian1_74.geometry} material={materials['lambert1.001']} position={[-29.253, 20.175, -3.829]} />
          <mesh geometry={nodes.lingjian1_75.geometry} material={materials['lambert1.001']} position={[-29.229, 22.343, -3.205]} />
          <mesh geometry={nodes.lingjian1_76.geometry} material={materials['lambert1.001']} position={[-29.332, 21.564, -4.601]} />
          <mesh geometry={nodes.lingjian1_77.geometry} material={materials['lambert1.001']} position={[-29.325, 20.852, -4.571]} />
          <mesh geometry={nodes.lingjian1_78.geometry} material={materials['lambert1.001']} position={[-29.284, 21.597, -3.889]} />
          <mesh geometry={nodes.lingjian1_79.geometry} material={materials['lambert1.001']} position={[-29.273, 20.886, -3.86]} />
          <mesh geometry={nodes.lingjian1_80.geometry} material={materials['lambert1.001']} position={[-29.204, 20.921, -3.147]} />
          <mesh geometry={nodes.lingjian1_81.geometry} material={materials['lambert1.001']} position={[-29.221, 21.63, -3.176]} />
          <mesh geometry={nodes.lingjian1_82.geometry} material={materials['lambert1.001']} position={[-29.321, 22.994, -4.663]} />
          <mesh geometry={nodes.lingjian1_83.geometry} material={materials['lambert1.001']} position={[-29.284, 23.026, -3.952]} />
          <mesh geometry={nodes.lingjian1_84.geometry} material={materials['lambert1.001']} position={[-29.373, 20.788, -5.985]} />
          <mesh geometry={nodes.lingjian1_85.geometry} material={materials['lambert1.001']} position={[-29.23, 23.06, -3.236]} />
          <mesh geometry={nodes.lingjian1_86.geometry} material={materials['lambert1.001']} position={[-29.368, 21.501, -6.016]} />
          <mesh geometry={nodes.lingjian1_87.geometry} material={materials['lambert1.001']} position={[-29.334, 19.393, -5.215]} />
          <mesh geometry={nodes.lingjian1_88.geometry} material={materials['lambert1.001']} position={[-29.145, 19.5, -3.085]} />
          <mesh geometry={nodes.lingjian1_89.geometry} material={materials['lambert1.001']} position={[-29.226, 19.463, -3.798]} />
          <mesh geometry={nodes.lingjian1_90.geometry} material={materials['lambert1.001']} position={[-29.29, 19.427, -4.509]} />
          <mesh geometry={nodes.lingjian1_91.geometry} material={materials['lambert1.001']} position={[-29.354, 22.246, -5.339]} />
          <mesh geometry={nodes.lingjian1_92.geometry} material={materials['lambert1.001']} position={[-29.349, 20.107, -5.247]} />
          <mesh geometry={nodes.lingjian1_93.geometry} material={materials['lambert1.001']} position={[-29.331, 22.277, -4.632]} />
          <mesh geometry={nodes.lingjian1_94.geometry} material={materials['lambert1.001']} position={[-29.272, 23.745, -3.984]} />
          <mesh geometry={nodes.lingjian1_95.geometry} material={materials['lambert1.001']} position={[-29.23, 17.995, -4.445]} />
          <mesh geometry={nodes.lingjian1_96.geometry} material={materials['lambert1.001']} position={[-29.105, 18.786, -3.052]} />
          <mesh geometry={nodes.lingjian1_97.geometry} material={materials['lambert1.001']} position={[-29.321, 17.928, -5.856]} />
          <mesh geometry={nodes.lingjian1_98.geometry} material={materials['lambert1.001']} position={[-29.341, 18.646, -5.889]} />
          <mesh geometry={nodes.lingjian1_99.geometry} material={materials['lambert1.001']} position={[-29.286, 17.961, -5.152]} />
          <mesh geometry={nodes.lingjian1_remesh.geometry} material={materials['lambert1.001']} position={[-15.107, -87.227, 27.07]} />
          <mesh geometry={nodes.lingjian1_remesh_2.geometry} material={materials['lambert1.001']} position={[14.177, -87.227, 27.07]} />
          <mesh geometry={nodes.lingjian1_remesh_3.geometry} material={materials['lambert1.001']} position={[-25.043, -9.06, 26.422]} />
          <mesh geometry={nodes.lingjian1_remesh_4.geometry} material={materials['lambert1.001']} position={[24.114, -9.06, 26.422]} />
          <mesh geometry={nodes.lingjian1_remesh_5.geometry} material={materials['lambert1.001']} position={[-10.458, 36.565, 2.505]} />
        </group>
        <mesh geometry={nodes.glass_01.geometry} material={materials['GLASS.001']} position={[-2.326, -95.702, 40.433]} rotation={[-0.14, 0, 0]} />
        <mesh geometry={nodes.glass_02.geometry} material={materials['GLASS.001']} position={[-0.054, -93.648, 57.416]} rotation={[-0.14, 0, 0]} />
        <mesh geometry={nodes.glass_03.geometry} material={materials['GLASS.001']} position={[0.016, -96.769, 49.022]} />
        <mesh geometry={nodes.挤压_1.geometry} material={materials['cam_sy.001']} position={[-0.002, -96.173, 49.002]} rotation={[-0.14, 0, Math.PI]} />
      </group>
      <mesh geometry={nodes.black.geometry} material={materials['材质.001']} position={[0, -0.582, -0.143]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
    </group>
  )
}

useGLTF.preload('/droneModel.glb')