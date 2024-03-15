import { useRef } from "react";
import { GroupProps } from "@react-three/fiber";
import {
  OrbitControls,
  TransformControls,
  PivotControls,
} from "@react-three/drei";

function Cub() {
  const cubRef = useRef<GroupProps>({});

  return (
    <>
      <TransformControls object={cubRef} mode="translate" />
      <OrbitControls makeDefault />
      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={1} />
      <PivotControls anchor={[0,0,0]} depthTest={false}>
        <mesh position-x={-2}>
          <sphereGeometry />
          <meshStandardMaterial color="orange" />
        </mesh>
      </PivotControls>

      <mesh position-x={2} ref={cubRef} scale={1.5}>
        <boxGeometry />
        <meshStandardMaterial color="mediumpurple" />
      </mesh>
      <mesh position-y={-1} scale={10} rotation-x={-Math.PI * 0.5}>
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>
    </>
  );
}
export default Cub;
