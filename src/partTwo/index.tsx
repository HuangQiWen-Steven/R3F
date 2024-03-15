
import { Canvas } from "@react-three/fiber";
import Cub from "./components/Cub"
/**
 * 介绍React3F的使用
 * @returns 
 */
function DemoOne() {

  return (
    <>
      <Canvas>
        <Cub/>
      </Canvas>
    </>
  );
}

export default DemoOne;
