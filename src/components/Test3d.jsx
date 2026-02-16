import { Canvas } from '@react-three/fiber'
import { MeshDistortMaterial, OrbitControls, Sphere } from '@react-three/drei';


const Test3d = () => {
    return (
        <section style={{display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Canvas>
                <mesh>
                    <Sphere args={[1, 100, 200]} scale={2}>
                        <MeshDistortMaterial 
                            color="rgba(47, 255, 96, 0.83)" 
                            attach="material"
                            distort={0.5}
                            speed={2}
                    />
                    </Sphere>

                    {/* /* <meshStandardMaterial /> */ }
                    <ambientLight intensity={3 } />
                    <directionalLight position={[15, 2, 3]} />
                    <OrbitControls enableZoom={false} />

                </mesh>

            </Canvas>

        </section>

    )
};

export default Test3d;