import { useTexture } from "@react-three/drei";

export default function MeshWithTexture() {
  const texture = useTexture("static/textures/door/color.jpg");
  const alpha = useTexture("static/textures/door/alpha.jpg");
  const aO = useTexture("static/textures/door/ambientOcclusion.jpg");
  const height = useTexture("static/textures/door/height.jpg");
  const metalness = useTexture("static/textures/door/metalness.jpg");
  const roughness = useTexture("static/textures/door/roughness.jpg");
  const normal = useTexture("static/textures/door/normal.jpg");

  console.log(texture); // Make sure textures are loaded correctly

  return (
    <>
    
      <mesh>
        <boxGeometry />
        <meshStandardMaterial
          map={texture}
          alphaMap={alpha}
          aoMap={aO}
          displacementMap={height}
          metalnessMap={metalness}
          roughnessMap={roughness}
          normalMap={normal}
        />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}> 
        <boxGeometry args={[10, 10, 1]} />
        <meshStandardMaterial />
      </mesh>
    </>
  );
}
