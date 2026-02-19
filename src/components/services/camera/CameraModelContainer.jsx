import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { CameraModel } from "./CameraModel";
import { OrbitControls, Stage, PerspectiveCamera } from "@react-three/drei";

const CameraModelContainer =() => {
    return (
        <Canvas>
            <Suspense fallback= "Loading...">
                <Stage environment="studio" intensity={1}> 
                    
                    <CameraModel/> 
                
                </Stage>
                
            <OrbitControls enableZoom={false} autoRotate/>
            <PerspectiveCamera position={[-10, 10, 7]} zoom={0.9} makeDefault/>
            </Suspense>
        </Canvas>
    )
} 

export default CameraModelContainer;