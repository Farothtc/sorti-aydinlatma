import Image from "next/image";

export default function Home() {
  const style: React.CSSProperties = {
    backgroundImage: "url('/landing.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    width: "100vw",
    position: "absolute",
  };
  return (
    <div className="min-h-screen" style={style}>
      <h1>Halo</h1>
    </div>
  );
}
