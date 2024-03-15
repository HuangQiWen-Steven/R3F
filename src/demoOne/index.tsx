
import { Canvas } from "@react-three/fiber";
import Cub from "./components/Cub"
/**
 * 介绍React3F的使用
 * @returns 
 */
function DemoOne() {

  // useFrame(() => {
  //   groupRef.current.rotation.y += 0.1
  // });
  return (
    <>
      <Canvas>
        <Cub/>

      </Canvas>
    </>
  );
}

export default DemoOne;
