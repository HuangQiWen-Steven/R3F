import { Canvas } from "@react-three/fiber";
import GLTFCub from "./components/GLTFCub";
import { OrbitControls } from "@react-three/drei";
import "video.js/dist/video-js.css";
/**
 * 介绍React3F的使用
 * @returns
 */
function DemoOne() {

  return (
    <>
      <Canvas>
        <OrbitControls />
        <directionalLight
          // ref={directionalLight}
          position={[1, 2, 3]}
          intensity={1.5}
          castShadow
        />
        <color args={["#695b5b"]} attach="background" />
        <ambientLight intensity={1} />
        <GLTFCub />
      </Canvas>
    </>
  );
}

export default DemoOne;
