import { MeshDistortMaterial, Sphere } from "@react-three/drei";

const Shape = () => {
    return (
          <>
                    <Sphere args={[1, 100, 200]} scale={2.5}>
                        <MeshDistortMaterial 
                            color="rgb(61, 211, 119)" 
                            attach="material"
                            distort={0.5}
                            speed={2}
                    />
                    </Sphere>

                    <ambientLight intensity={3} />
                    <directionalLight position={[15, 2, 3]} />
          </>
    );
};

export default Shape;