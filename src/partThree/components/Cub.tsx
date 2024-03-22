import { useRef } from "react";
import * as THREE from "three";

import { OrbitControls, useHelper } from "@react-three/drei";

function Cub() {
  const groupRef = useRef(null);
  const cubRef = useRef(null);
  const directionalLight = useRef(null);

  useHelper(directionalLight,THREE.DirectionalLightHelper,2);

  return (
    <>
      <color args={["ivory"]} attach="background" />
      <OrbitControls />
      <directionalLight
        ref={directionalLight}
        position={[1, 2, 3]}
        intensity={1.5}
        castShadow
      />
      <ambientLight intensity={1} />
      <group ref={groupRef}>
        <mesh castShadow position-x={-2}>
          <sphereGeometry />
          <meshStandardMaterial color="orange" />
        </mesh>
        <mesh castShadow position-x={2} ref={cubRef} scale={1.5}>
          <boxGeometry />
          <meshStandardMaterial color="mediumpurple" />
        </mesh>
      </group>
      <mesh receiveShadow position-y={-1} scale={10} rotation-x={-Math.PI * 0.5}>
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>
    </>
  );
}
export default Cub;
