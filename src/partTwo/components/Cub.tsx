import {
  OrbitControls,
  PivotControls,
  Html,
  Text,
  Float,
  MeshReflectorMaterial,
} from "@react-three/drei";
import { useControls, button } from "leva";
import { Perf } from "r3f-perf";
import "./index.scss";

function Cub() {
  const { position, color, visible } = useControls("sphere", {
    position: {
      value: { x: -2, y: 0, z: 0 },
      step: 0.1,
      joystick: "invertY",
    },
    color: "#ff9900",
    visible: true,
    clickMe: button(() => {
      console.log("ok");
    }),
    choice: { options: ["a", "b", "c"] },
  });

  const { PerfVisible } = useControls({
    PerfVisible: true,
  });

  return (
    <>
      {PerfVisible ? <Perf position="top-left" /> : null}

      <OrbitControls makeDefault />
      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={1} />

      <PivotControls anchor={[0, 0, 0]} depthTest={false}>
        <mesh position={[position.x, position.y, position.z]} visible={visible}>
          <sphereGeometry />
          <meshStandardMaterial color={color} />
          <Html
            wrapperClass="label"
            position={[0, 1, 0]}
            center
            distanceFactor={3}
          >
            This is good 🍗
          </Html>
        </mesh>
      </PivotControls>
      <Float speed={3} matrixWorldAutoUpdate={[]} getObjectsByProperty={[]}>
        <Text
          position={[0, 2, 0]}
          color={"orange"}
          matrixWorldAutoUpdate=""
          getObjectsByProperty=""
          getVertexPosition=""
        >
          i am airMan
        </Text>
      </Float>

      <mesh position-x={2} scale={1.5}>
        <boxGeometry />
        <meshStandardMaterial color="mediumpurple" />
      </mesh>
      <mesh position-y={-1} scale={10} rotation-x={-Math.PI * 0.5}>
        <planeGeometry />
        {/* <meshStandardMaterial color="greenyellow" /> */}
        <MeshReflectorMaterial resolution={512} mirror={0} />
      </mesh>
    </>
  );
}
export default Cub;
