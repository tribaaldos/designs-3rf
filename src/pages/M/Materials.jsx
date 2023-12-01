import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import "../M/Materials.css";
import MeshWithTexture from "../../components/materials/DoorCube";
import MeshWithGrass from "../../components/materials/GrassCube";

export default function Materials() {
  return (
    <>
      <h1>First Creating our first scene</h1>
      This is how you can create your fucking scene
      <div className="canvas-door">
        <Canvas camera={{ position: [0, 0, -2], fov: 75 }}>
          <color attach="background" args={["gray"]} />

          <OrbitControls enableZoom={false} />
          <ambientLight intensity={2} />
          <MeshWithTexture />
        </Canvas>
      </div>
      second one
      <div className="canvas-grass">
        <Canvas className="canvas-materiales" camera={{ position: [0, 0, -2], fov: 75 }}>
          <color attach="background" args={["gray"]} />
          <OrbitControls enableZoom={true} />
          {/* <ambientLight intensity={2} /> */}
          <MeshWithGrass />
        </Canvas>
      </div>
      <p>hey</p>
    </>
  );
}
