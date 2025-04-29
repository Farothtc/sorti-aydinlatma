import Image from "next/image";
import Nav from "./Components/Nav";

export default function Home() {
  const style: React.CSSProperties = {
    backgroundImage: "url('/landing.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100dvh",
    width: "100%",
  };
  return (
    <div className="flex flex-col">
      <main style={style}>
        <Nav />
        <div className="relative flex flex-col justify-center items-center pt-[10%] text-white">
          <h1 className="text-9xl">Doğru Işık,</h1>
          <h1 className="text-9xl font-extrabold text-nowrap">
            her şeyi değiştirir
          </h1>
        </div>
      </main>
      <section className="relative h-screen bg-white">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-8xl pt-10 text-black">Ürünlerimiz</h1>
        </div>
        <div className="grid grid-cols-4 grid-rows-4 gap-5 p-5">
          <div className="grid row-span-1 col-span-1">
            <div className="card bg-transparent">
              <figure className="relative">
                <img
                  src="/AKSESUARLAR.jpg"
                  className="rounded-3xl"
                  alt="aksesuar"
                />
              </figure>
              <div className="absolute card-body left-1/2 bottom-5 translate-x-[-50%] translate-y-[50%]">
                <h2 className="card-title text-3xl text-nowrap">Aksesuar</h2>
              </div>
            </div>
          </div>
          <div className="grid row-span-1 col-span-1 w-full">
            <div className="card bg-transparent">
              <figure className="relative">
                <img src="/MASA.jpg" className="rounded-3xl" alt="aksesuar" />
              </figure>
              <div className="absolute card-body left-1/2 bottom-5 translate-x-[-50%] translate-y-[50%]">
                <h2 className="card-title text-3xl text-nowrap">
                  Masa Lambası
                </h2>
              </div>
            </div>
          </div>
          <div className="grid row-span-2 col-span-1 h-[100%]">
            <div className="card bg-transparent h-full">
              <figure className="relative h-full">
                <img
                  src="/LAMBADER.jpg"
                  className="rounded-3xl object-cover w-full h-full"
                  alt="aksesuar"
                />
              </figure>
              <div className="absolute card-body left-1/2 bottom-5 translate-x-[-50%] translate-y-[50%]">
                <h2 className="card-title text-3xl text-nowrap">
                  Masa Lambası
                </h2>
              </div>
            </div>
          </div>
          <div className="grid row-span-1 col-span-1 w-full">
            <div className="card bg-transparent">
              <figure className="relative">
                <img src="/ABAJUR.jpg" className="rounded-3xl" alt="aksesuar" />
              </figure>
              <div className="absolute card-body left-1/2 bottom-5 translate-x-[-50%] translate-y-[50%]">
                <h2 className="card-title text-3xl text-nowrap">Abajur</h2>
              </div>
            </div>
          </div>
          <div className="grid row-span-1 col-span-1 w-full">
            <div className="card bg-transparent">
              <figure className="relative">
                <img
                  src="/AVIZELER.jpg"
                  className="rounded-3xl object-cover w-full h-full"
                  alt="aksesuar"
                />
              </figure>
              <div className="absolute card-body left-1/2 bottom-5 translate-x-[-50%] translate-y-[50%]">
                <h2 className="card-title text-3xl text-nowrap">Abajur</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative h-screen bg-white"></section>
    </div>
  );
}
