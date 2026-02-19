import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { DroneModel } from "./DroneModel";
import { OrbitControls, Stage, PerspectiveCamera } from "@react-three/drei";

const DroneModelContainer =() => {
    return (
        <Canvas>
            <Suspense fallback= "Loading...">
                <Stage environment="city" intensity={1}> 
                    
                    <DroneModel/> 
                
                </Stage>
                
            <OrbitControls enableZoom={false} autoRotate/>
            <PerspectiveCamera position={[-1, 7, 6]} zoom={1} makeDefault/>
            </Suspense>
        </Canvas>
    )
} 

export default DroneModelContainer;