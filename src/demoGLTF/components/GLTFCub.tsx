import { Html, useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/class.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.立方体230.geometry}
        material={materials["wood.001"]}
        position={[-2.159, 1.953, 13.483]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[1, 1.909, 2.139]}
        onClick={() => console.log("Clicked")}
      >
        <Html
          position={[0, 1.5, 0]}
          style={{
            width: 150,
            background: "rgba(0,0,0,.5)",
            color: "white",
            padding: "20px",
            borderRadius: 20,
          }}
        >
          this is N1
        </Html>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.立方体231.geometry}
        material={materials["wood.001"]}
        position={[-2.159, 1.953, 16.783]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[1, 1.909, 2.139]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.立方体007.geometry}
        material={materials["wood.001"]}
        position={[11.068, 1.774, 13.35]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[1, 1.909, 2.139]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.立方体012.geometry}
        material={materials["wood.001"]}
        position={[11.068, 1.774, 5.35]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[1, 1.909, 2.139]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.立方体013.geometry}
        material={materials["wood.001"]}
        position={[11.068, 1.774, -2.65]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[1, 1.909, 2.139]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.立方体014.geometry}
        material={materials["wood.001"]}
        position={[11.068, 1.774, -9.65]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[1, 1.909, 2.139]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.立方体015.geometry}
        material={materials["wood.001"]}
        position={[11.068, 1.774, -9.65]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[1, 1.909, 2.139]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.立方体016.geometry}
        material={materials["wood.001"]}
        position={[-8.582, 1.774, -24.093]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[1, 1.909, 2.139]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.立方体017.geometry}
        material={materials["wood.001"]}
        position={[-8.582, 1.774, -27.564]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[1, 1.909, 2.139]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.立方体018.geometry}
        material={materials["wood.001"]}
        position={[1.46, 1.774, -24.093]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[1, 1.909, 2.139]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.立方体019.geometry}
        material={materials["wood.001"]}
        position={[1.46, 1.774, -27.564]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[1, 1.909, 2.139]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.平面.geometry}
        material={materials.floor}
        position={[0.431, 0.495, -0.368]}
        scale={[16.031, 6.852, 28.979]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={nodes.Cube.material}
        position={[13.288, 3.878, -22.526]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[-2.893, -3.354, -0.118]}
      ></mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={nodes.Cube001.material}
        position={[16.14, 3.878, -26.068]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[-3.286, -3.354, -0.118]}
      />
      <group position={[4.148, 2.733, 14.102]} scale={[0.3, 0.081, 0.3]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.立方体004.geometry}
          material={materials.computer}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.立方体004_1.geometry}
          material={materials.wood}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.立方体004_2.geometry}
          material={materials.metal}
        />
      </group>
      <group position={[4.148, 2.733, 14.102]} scale={[0.3, 0.081, 0.3]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.立方体005.geometry}
          material={materials.computer}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.立方体005_1.geometry}
          material={materials.wood}
        ></mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.立方体005_2.geometry}
          material={materials.metal}
        />
      </group>
      <group
        position={[8.018, 2.733, 12.725]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.3, 0.081, 0.3]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.立方体006.geometry}
          material={materials.computer}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.立方体006_1.geometry}
          material={materials.wood}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.立方体006_2.geometry}
          material={materials.metal}
        />
      </group>
      <group position={[8.287, 2.733, 14.102]} scale={[0.3, 0.081, 0.3]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.立方体012_1.geometry}
          material={materials.computer}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.立方体012_2.geometry}
          material={materials.wood}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.立方体012_3.geometry}
          material={materials.metal}
        />
      </group>
      <group
        position={[3.875, 2.733, 12.725]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.3, 0.081, 0.3]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.立方体013_1.geometry}
          material={materials.computer}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.立方体013_2.geometry}
          material={materials.wood}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.立方体013_3.geometry}
          material={materials.metal}
        />
      </group>
      <group position={[4.148, 2.733, 6.102]} scale={[0.3, 0.081, 0.3]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.立方体014_1.geometry}
          material={materials.computer}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.立方体014_2.geometry}
          material={materials.wood}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.立方体014_3.geometry}
          material={materials.metal}
        />
      </group>
      <group
        position={[8.018, 2.733, 4.725]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.3, 0.081, 0.3]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.立方体015_1.geometry}
          material={materials.computer}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.立方体015_2.geometry}
          material={materials.wood}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.立方体015_3.geometry}
          material={materials.metal}
        />
      </group>
      <group position={[8.287, 2.733, 6.102]} scale={[0.3, 0.081, 0.3]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.立方体016_1.geometry}
          material={materials.computer}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.立方体016_2.geometry}
          material={materials.wood}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.立方体016_3.geometry}
          material={materials.metal}
        />
      </group>
      <group
        position={[3.875, 2.733, 4.725]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.3, 0.081, 0.3]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.立方体017_1.geometry}
          material={materials.computer}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.立方体017_2.geometry}
          material={materials.wood}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.立方体017_3.geometry}
          material={materials.metal}
        />
      </group>
      <group position={[-4.144, 2.733, 6.102]} scale={[0.3, 0.081, 0.3]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.立方体018_1.geometry}
          material={materials.computer}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.立方体018_2.geometry}
          material={materials.wood}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.立方体018_3.geometry}
          material={materials.metal}
        />
      </group>
      <group
        position={[-0.274, 2.733, 4.725]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.3, 0.081, 0.3]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.立方体022.geometry}
          material={materials.computer}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.立方体022_1.geometry}
          material={materials.wood}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.立方体022_2.geometry}
          material={materials.metal}
        />
      </group>
      <group position={[-0.005, 2.733, 6.102]} scale={[0.3, 0.081, 0.3]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.立方体023.geometry}
          material={materials.computer}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.立方体023_1.geometry}
          material={materials.wood}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.立方体023_2.geometry}
          material={materials.metal}
        />
      </group>
      <group
        position={[-4.417, 2.733, 4.725]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.3, 0.081, 0.3]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.立方体024.geometry}
          material={materials.computer}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.立方体024_1.geometry}
          material={materials.wood}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.立方体024_2.geometry}
          material={materials.metal}
        />
      </group>
      <group position={[4.148, 2.733, -1.898]} scale={[0.3, 0.081, 0.3]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.立方体025.geometry}
          material={materials.computer}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.立方体025_1.geometry}
          material={materials.wood}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.立方体025_2.geometry}
          material={materials.metal}
        />
      </group>
      <group
        position={[8.018, 2.733, -3.275]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.3, 0.081, 0.3]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.立方体026.geometry}
          material={materials.computer}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.立方体026_1.geometry}
          material={materials.wood}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.立方体026_2.geometry}
          material={materials.metal}
        />
      </group>
      <group position={[8.287, 2.733, -1.898]} scale={[0.3, 0.081, 0.3]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.立方体051.geometry}
          material={materials.computer}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.立方体051_1.geometry}
          material={materials.wood}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.立方体051_2.geometry}
          material={materials.metal}
        />
      </group>
      <group
        position={[3.875, 2.733, -3.275]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.3, 0.081, 0.3]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.立方体052.geometry}
          material={materials.computer}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.立方体052_1.geometry}
          material={materials.wood}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.立方体052_2.geometry}
          material={materials.metal}
        />
      </group>
      <group position={[-4.144, 2.733, -1.898]} scale={[0.3, 0.081, 0.3]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.立方体053.geometry}
          material={materials.computer}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.立方体053_1.geometry}
          material={materials.wood}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.立方体053_2.geometry}
          material={materials.metal}
        />
      </group>
      <group
        position={[-0.274, 2.733, -3.275]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.3, 0.081, 0.3]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.立方体054.geometry}
          material={materials.computer}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.立方体054_1.geometry}
          material={materials.wood}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.立方体054_2.geometry}
          material={materials.metal}
        />
      </group>
      <group position={[-0.005, 2.733, -1.898]} scale={[0.3, 0.081, 0.3]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.立方体055.geometry}
          material={materials.computer}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.立方体055_1.geometry}
          material={materials.wood}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.立方体055_2.geometry}
          material={materials.metal}
        />
      </group>
      <group
        position={[-4.417, 2.733, -3.275]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.3, 0.081, 0.3]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.立方体056.geometry}
          material={materials.computer}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.立方体056_1.geometry}
          material={materials.wood}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.立方体056_2.geometry}
          material={materials.metal}
        />
      </group>
      <group position={[4.148, 2.733, -9.898]} scale={[0.3, 0.081, 0.3]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.立方体057.geometry}
          material={materials.computer}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.立方体057_1.geometry}
          material={materials.wood}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.立方体057_2.geometry}
          material={materials.metal}
        />
      </group>
      <group position={[8.287, 2.733, -9.898]} scale={[0.3, 0.081, 0.3]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.立方体058.geometry}
          material={materials.computer}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.立方体058_1.geometry}
          material={materials.wood}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.立方体058_2.geometry}
          material={materials.metal}
        />
      </group>
      <group position={[-4.144, 2.733, -9.898]} scale={[0.3, 0.081, 0.3]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.立方体059.geometry}
          material={materials.computer}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.立方体059_1.geometry}
          material={materials.wood}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.立方体059_2.geometry}
          material={materials.metal}
        />
      </group>
      <group position={[-0.005, 2.733, -9.898]} scale={[0.3, 0.081, 0.3]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.立方体060.geometry}
          material={materials.computer}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.立方体060_1.geometry}
          material={materials.wood}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.立方体060_2.geometry}
          material={materials.metal}
        />
      </group>
      <group position={[-4.852, 2.733, 14.102]} scale={[0.3, 0.081, 0.3]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.立方体027.geometry}
          material={materials.computer}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.立方体027_1.geometry}
          material={materials.wood}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.立方体027_2.geometry}
          material={materials.metal}
        />
      </group>
      <group position={[-13.091, 2.733, -22.308]} scale={[0.3, 0.081, 0.3]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.立方体028.geometry}
          material={materials.computer}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.立方体028_1.geometry}
          material={materials.wood}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.立方体028_2.geometry}
          material={materials.metal}
        />
      </group>
      <group
        position={[-13.35, 2.733, -23.705]}
        rotation={[Math.PI, -0.004, Math.PI]}
        scale={[0.3, 0.081, 0.3]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.立方体029.geometry}
          material={materials.computer}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.立方体029_1.geometry}
          material={materials.wood}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.立方体029_2.geometry}
          material={materials.metal}
        />
      </group>
      <group
        position={[-4.922, 2.773, -25.689]}
        rotation={[0, 1.571, 0]}
        scale={[0.3, 0.081, 0.3]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.立方体039.geometry}
          material={materials.wood}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.立方体039_1.geometry}
          material={materials.metal}
        />
      </group>
      <group
        position={[-2.662, 2.773, -25.689]}
        rotation={[0, 1.571, 0]}
        scale={[0.3, 0.081, 0.3]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.立方体040.geometry}
          material={materials.wood}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.立方体040_1.geometry}
          material={materials.metal}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/class.glb");
