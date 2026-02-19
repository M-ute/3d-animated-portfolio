import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { ComputerModel } from "./ComputerModel";
import { OrbitControls, Stage, PerspectiveCamera } from "@react-three/drei";

const ComputerModelContainer =() => {
    return (
        <Canvas>
            <Suspense fallback= "Loading...">
                <Stage environment="studio" intensity={3}> 
                    
                    <ComputerModel/> 
                
                </Stage>
                
            <OrbitControls enableZoom={false} autoRotate/>
            <PerspectiveCamera position={[-1, 0, 1.8]} zoom={0.8} makeDefault/>
            </Suspense>
        </Canvas>
    )
} 

export default ComputerModelContainer;