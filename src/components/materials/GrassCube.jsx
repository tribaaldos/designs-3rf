import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
export default function MeshWithGrass() {
  const texture = useTexture("static/textures/grass/styledGrass/basecolor.jpg");
  const ao = useTexture("static/textures/grass/styledGrass/ao.jpg");
  const height = useTexture("static/textures/grass/styledGrass/height.png");
  const material = useTexture("static/textures/grass/styledGrass/material.jpg");
  const normal = useTexture("static/textures/grass/styledGrass/normal.jpg");
  const roughness = useTexture(
    "static/textures/grass/styledGrass/rougness.jpg"
  );

  const Ref = useRef();

  useFrame(() => {
    // Rotate the cube along the y-axis
    if (Ref.current) {
      Ref.current.rotation.y += 0.01; // Adjust the rotation speed as needed
    }
  });
  return (
    <>
      <pointLight position={[2, 2, 0]} intensity={50.0}/>
      <ambientLight intensity={0.5} />
      <mesh ref={Ref}>
        <boxGeometry />
        <meshStandardMaterial
          map={texture}
          alphaMap={material}
          aoMap={ao}
          dispacementMap={height}
          roughnessMap={roughness}
          normalMap={normal}
        />
      </mesh>
    </>
  );
}
