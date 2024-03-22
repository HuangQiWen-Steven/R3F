import { useRef } from "react";
import {  useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function Cub() {
  const groupRef = useRef(null);
  const cubRef = useRef(null);

  useFrame((_, delta) => {
    // groupRef.current.rotation.y += delta;
    cubRef.current ? cubRef.current.rotation.y += delta : null
  });
  
  return (
    <>
      <OrbitControls />
      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={1} />
      <group ref={groupRef}>
        <mesh position-x={-2}>
          <sphereGeometry />
          <meshStandardMaterial color="orange" />
        </mesh>
        <mesh position-x={2} ref={cubRef} scale={1.5}>
            <boxGeometry />
            <meshStandardMaterial color="mediumpurple" />
          </mesh>
      </group>
      <mesh position-y={-1} scale={10} rotation-x={-Math.PI * 0.5}>
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>
    </>
  );
}
export default Cub;
