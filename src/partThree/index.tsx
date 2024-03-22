import { Canvas } from "@react-three/fiber";
import Cub from "./components/Cub";
/**
 * 介绍React3F的使用
 * @returns
 */

const created = () => {
  // gl.setClearColor("#ff0000",1);
};

function DemoThree() {
  return (
    <>
      <Canvas onCreated={created} shadows>
        <Cub />
      </Canvas>
    </>
  );
}

export default DemoThree;
