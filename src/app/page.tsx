"use client";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import ScrollEffect from "./Components/ScrollEffect";

export default function Home() {
  const style: React.CSSProperties = {
    backgroundImage: "url('/landing.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100dvh",
    width: "100%",
  };
  const ref = useRef<HTMLDivElement>(null);
  const refBelow = useRef<HTMLDivElement>(null);
  const scrollToTop = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (refBelow.current) {
      observer.observe(refBelow.current);
    }
  }, []);

  const [changeColor, setChangeColor] = useState([
    "#e81416",
    "#ffa500",
    "#faeb36",
    "#79c314",
    "#487de7",
    "#4b369d",
    "#70369d",
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setChangeColor((prev) => {
        const newColors = [...prev];
        const firstColor = newColors.shift();
        if (firstColor) {
          newColors.push(firstColor);
        }
        return newColors;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col">
      <main style={style} ref={ref}>
        <Nav />
        <div className="relative flex flex-col justify-center items-center pt-[10%] text-white">
          <div className="flex">
            <h1 className="text-9xl">Doğru</h1>
            <h1
              className="text-9xl ms-8"
              style={{
                color: changeColor[0],
                transition: "color 0.5s ease-in-out",
              }}
            >
              Işık
            </h1>
            <h1 className="text-9xl">,</h1>
          </div>
          <h1 className="text-9xl font-extrabold text-nowrap">
            her şeyi değiştirir
          </h1>
        </div>
      </main>

      {/* Ürünlerimiz */}
      <section className="relative h-screen bg-white">
        <div>
          <div
            className={`fixed card w-16 h-16 z-10 card-xs border-2 border-[#663829] bg-transparent rounded-4xl right-5 bottom-5 cursor-pointer transition-opacity duration-300 ${
              isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            onClick={scrollToTop}
          >
            <div className="card-body flex flex-col justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-8 text-[#663829]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-8xl pt-10 text-black">Ürünlerimiz</h1>
        </div>
        <div className="grid grid-cols-10 grid-rows-[360px_360px] gap-5 p-5">
          <div className="row-span-1 col-span-2 min-h-[50px]">
            <div className="card bg-transparent ">
              <figure className="relative ">
                <img
                  src="/AKSESUARLAR.jpg"
                  className="rounded-3xl h-full w-full"
                  alt="aksesuar"
                />
              </figure>
              <div className="absolute card-body left-1/2 bottom-5 translate-x-[-50%] translate-y-[50%]">
                <h2 className="card-title text-3xl text-nowrap">Aksesuar</h2>
              </div>
            </div>
          </div>
          <div className="row-span-1 col-span-2 h-[360px]">
            <div className="card bg-transparent h-[360px]">
              <figure className="relative h-[360px]">
                <img
                  src="/MASA.jpg"
                  className="rounded-3xl h-[360px] w-full"
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
          <div className="row-span-1 col-span-3 h-[360px]">
            <div className="card bg-transparent h-[360px]">
              <figure className="relative h-[360px]">
                <img
                  src="/LAMBADER.jpg"
                  className="rounded-3xl object-cover h-[360px] w-full"
                  alt="aksesuar"
                />
              </figure>
              <div className="absolute card-body left-1/2 bottom-5 translate-x-[-50%] translate-y-[50%]">
                <h2 className="card-title text-3xl text-nowrap">Lambader</h2>
              </div>
            </div>
          </div>
          <div className="row-span-1 col-span-3 h-[360px]">
            <div className="card bg-transparent h-[360px]">
              <figure className="relative h-[360px]">
                <img
                  src="/ABAJUR.jpg"
                  className="rounded-3xl h-[360px] w-full"
                  alt="aksesuar"
                />
              </figure>
              <div className="absolute card-body left-1/2 bottom-5 translate-x-[-50%] translate-y-[50%]">
                <h2 className="card-title text-3xl text-nowrap">Abajur</h2>
              </div>
            </div>
          </div>
          <div className="row-span-1 col-span-2 ">
            <div className="card bg-transparent ">
              <figure className="relative ">
                <img
                  src="/AVIZELER.jpg"
                  className="rounded-3xl object-cover w-full h-[360px]"
                  alt="aksesuar"
                />
              </figure>
              <div className="absolute card-body left-15 bottom-8 translate-x-[-50%] translate-y-[50%]">
                <h2 className="card-title text-3xl text-nowrap">Avize</h2>
              </div>
            </div>
          </div>
          <div className="row-span-1 col-span-2 h-full">
            <div className="card bg-transparent h-full">
              <figure className="relative h-full">
                <img
                  src="/APLIKLER.jpg"
                  className="rounded-3xl object-cover w-full h-full"
                  alt="aksesuar"
                />
              </figure>
              <div className="absolute card-body left-15 bottom-8 translate-x-[-50%] translate-y-[50%]">
                <h2 className="card-title text-3xl text-nowrap">Aplik</h2>
              </div>
            </div>
          </div>
          <div className="row-span-1 col-span-3 h-full">
            <div className="card bg-transparent h-full">
              <figure className="relative h-full">
                <img
                  src="/SPOTLAR.jpg"
                  className="rounded-3xl object-cover w-full h-full"
                  alt="aksesuar"
                />
              </figure>
              <div className="absolute card-body -right-10 bottom-8 translate-x-[-50%] translate-y-[50%]">
                <h2 className="card-title text-3xl text-nowrap">Spot</h2>
              </div>
            </div>
          </div>
          <div className="row-span-1 col-span-3 h-full">
            <div className="card bg-transparent h-full">
              <figure className="relative h-full">
                <img
                  src="/SARKITLAR.jpg"
                  className="rounded-3xl object-cover w-full h-full"
                  alt="aksesuar"
                />
              </figure>
              <div className="absolute card-body -right-10 bottom-8 translate-x-[-50%] translate-y-[50%]">
                <h2 className="card-title text-3xl text-nowrap">Sarkıt</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hayatınıza Ne Katar */}
      <section className="relative h-screen bg-white pt-15">
        <div className="grid grid-cols-[40%_60%] grid-rows-1 gap-5 p-5">
          <div className="row-span-1 col-span-1 h-full flex justify-center items-start pt-25">
            <div className="card  card-md">
              <div className="card-body text-black gap-10">
                <h2 className="card-title text-5xl ">
                  SORTİ AYDINLATMA HAYATINIZA NE KATAR?
                </h2>
                <h2 className="card-title text-3xl ">
                  "Sorti Aydınlatma: Işığın Büyüsüyle Mekânlarınıza Estetik
                  Katın"
                </h2>
                <p className="text-2xl">
                  Aydınlatma, bir mekânın atmosferini belirleyen en önemli
                  unsurlardan biridir. Doğru ışık kullanımı sadece bir ihtiyacı
                  karşılamakla kalmaz, aynı zamanda yaşam alanlarınıza sıcaklık,
                  şıklık ve ruh katar. İşte tam da bu noktada Sorti Aydınlatma,
                  apliklerden avizelere, abajurlardan özel tasarım ürünlere
                  kadar geniş ürün yelpazesiyle devreye giriyor.
                </p>
              </div>
            </div>
          </div>
          <div className="row-span-1 col-span-1">
            <div className="card bg-transparent relative">
              <figure className="relative ">
                <Image
                  src={"/hayat.jpg"}
                  alt="landing"
                  layout="responsive"
                  className="rounded-4xl pt-5 p-5"
                  objectFit="cover"
                  objectPosition="center"
                  priority
                  quality={100}
                  width={100}
                  height={100}
                ></Image>
              </figure>
              <div className="absolute card-body -right-25 bottom-15 translate-x-[-50%] translate-y-[50%]">
                <h2 className="card-title text-xl text-nowrap">
                  *LİON HOTEL çalışmamız
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Sorti Aydınlatma Size Nasıl Hizmet Verir */}
      <section
        className="relative h-screen bg-white"
        style={{ color: "#663829" }}
      >
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-6xl pt-10">
            Sorti Aydınlatma Size Nasıl Hizmet Verir?
          </h1>
        </div>
        <div className="grid grid-cols-4 grid-rows-2 gap-5 p-5 pt-25">
          <div className="row-span-1 col-span-1 h-full flex justify-center items-start pt-10">
            <div className="card w-80 h-48 card-lg border-2 border-[#663829] bg-transparent rounded-4xl">
              <div className="card-body relative flex flex-col justify-center items-center">
                <h2 className="card-title absolute mb-[62%] text-5xl">1</h2>
                <h2 className="card-title">İhtiyaç Analizi</h2>
                <p className="text-center">
                  Yaşam alanlarınızı inceliyor, tarzınıza ve ihtiyaçlarınıza en
                  uygun aydınlatma çözümlerini belirliyoruz.
                </p>
              </div>
            </div>
          </div>
          <div className="row-span-1 col-span-1 h-full flex justify-center items-start pt-10">
            <div className="card w-80 h-48 card-lg border-2 border-[#663829] bg-transparent rounded-4xl">
              <div className="card-body relative flex flex-col justify-center items-center">
                <h2 className="card-title absolute mb-[60%] text-5xl">2</h2>
                <h2 className="card-title">Ürün Seçimi</h2>
                <p className="text-center">
                  Geniş ürün yelpazemizden aplik, abajur, avize ve daha
                  fazlasını tercih etmenize yardımcı oluyoruz.
                </p>
              </div>
            </div>
          </div>
          <div className="row-span-1 col-span-1 h-full flex justify-center items-start pt-10">
            <div className="card w-80 h-48 card-lg border-2 border-[#663829] bg-transparent rounded-4xl">
              <div className="card-body relative flex flex-col justify-center items-center">
                <h2 className="card-title absolute mb-[60%] text-5xl">3</h2>
                <h2 className="card-title">Kişisel Dokunuş</h2>
                <p className="text-center">
                  Özel tasarım ve renk seçeneklerimizle hayalinizdeki
                  aydınlatmayı gerçeğe dönüştürüyoruz.
                </p>
              </div>
            </div>
          </div>
          <div className="row-span-1 col-span-1 h-full flex justify-center items-start pt-10">
            <div className="card w-80 h-48 card-lg border-2 border-[#663829] bg-transparent rounded-4xl">
              <div className="card-body relative flex flex-col justify-center items-center">
                <h2 className="card-title absolute mb-[60%] text-5xl">4</h2>
                <h2 className="card-title">Güvenilir Teslimat</h2>
                <p className="text-center">
                  Seçtiğiniz ürünleri özenle hazırlayıp en kısa sürede size
                  ulaştırıyoruz.
                </p>
              </div>
            </div>
          </div>
          <div className="row-span-1 col-span-4 h-full flex justify-center items-start pt-10">
            <div className="card w-80 h-48 card-lg border-2 border-[#663829] bg-transparent rounded-4xl">
              <div className="card-body relative flex flex-col justify-center items-center">
                <h2 className="card-title absolute mb-[60%] text-5xl">5</h2>
                <h2 className="card-title">Satış Sonrası Destek</h2>
                <p className="text-center">
                  Ürünlerinizle ilgili her türlü sorunuz için yanınızdayız;
                  memnuniyetiniz bizim önceliğimizdir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Size Özel Seçimlerimiz */}
      <section className="relative h-screen bg-white" ref={refBelow}>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-6xl pt-10" style={{ color: "#663829" }}>
            Size Özel Seçimlerimiz
          </h1>
          <h1 className="text-2xl pt-5 text-black">
            Tasarım sanatçılarımızın özel çalışmalarına buradan göz
            atabilirsiniz.
          </h1>
        </div>
        <div className="grid grid-cols-4 grid-rows-[320px_320px] gap-15 p-5">
          <div className="row-span-1 col-span-1 h-[360px]">
            <div className="card bg-transparent h-[360px] ">
              <figure className="relative h-[360px] ">
                <img
                  src="/AKSESUARLAR.jpg"
                  className="rounded-3xl h-[360px] w-full"
                  alt="aksesuar"
                />
              </figure>
              <div className="absolute card-body left-1/2 bottom-5 translate-x-[-50%] translate-y-[50%]">
                <h2 className="card-title text-3xl text-nowrap">
                  1015 - Masa Lambası
                </h2>
              </div>
            </div>
          </div>
          <div className="row-span-1 col-span-1 h-[360px]">
            <div className="card bg-transparent h-[360px]">
              <figure className="relative h-[360px]">
                <img
                  src="/MASA.jpg"
                  className="rounded-3xl h-[360px] w-full"
                  alt="aksesuar"
                />
              </figure>
              <div className="absolute card-body left-1/2 bottom-5 translate-x-[-50%] translate-y-[50%]">
                <h2 className="card-title text-3xl text-nowrap">
                  1015 - Masa Lambası
                </h2>
              </div>
            </div>
          </div>
          <div className="row-span-1 col-span-1 h-[360px]">
            <div className="card bg-transparent h-[360px]">
              <figure className="relative h-[360px]">
                <img
                  src="/LAMBADER.jpg"
                  className="rounded-3xl object-cover h-[360px] w-full"
                  alt="aksesuar"
                />
              </figure>
              <div className="absolute card-body left-1/2 bottom-5 translate-x-[-50%] translate-y-[50%]">
                <h2 className="card-title text-3xl text-nowrap">
                  1015 - Masa Lambası
                </h2>
              </div>
            </div>
          </div>
          <div className="row-span-1 col-span-1 h-[360px]">
            <div className="card bg-transparent h-[360px]">
              <figure className="relative h-[360px]">
                <img
                  src="/ABAJUR.jpg"
                  className="rounded-3xl h-[360px] w-full"
                  alt="aksesuar"
                />
              </figure>
              <div className="absolute card-body left-1/2 bottom-5 translate-x-[-50%] translate-y-[50%]">
                <h2 className="card-title text-3xl text-nowrap">
                  1015 - Masa Lambası
                </h2>
              </div>
            </div>
          </div>
          <div className="row-span-1 col-span-1 ">
            <div className="card bg-transparent ">
              <figure className="relative ">
                <img
                  src="/AVIZELER.jpg"
                  className="rounded-3xl object-cover w-full h-[320px]"
                  alt="aksesuar"
                />
              </figure>
              <div className="absolute card-body left-1/2 bottom-5 translate-x-[-50%] translate-y-[50%]">
                <h2 className="card-title text-3xl text-nowrap">
                  1015 - Masa Lambası
                </h2>
              </div>
            </div>
          </div>
          <div className="row-span-1 col-span-1 h-full">
            <div className="card bg-transparent h-full">
              <figure className="relative h-full">
                <img
                  src="/APLIKLER.jpg"
                  className="rounded-3xl object-cover w-full h-full"
                  alt="aksesuar"
                />
              </figure>
              <div className="absolute card-body left-1/2 bottom-5 translate-x-[-50%] translate-y-[50%]">
                <h2 className="card-title text-3xl text-nowrap">
                  1015 - Masa Lambası
                </h2>
              </div>
            </div>
          </div>
          <div className="row-span-1 col-span-1 h-full">
            <div className="card bg-transparent h-full">
              <figure className="relative h-full">
                <img
                  src="/SPOTLAR.jpg"
                  className="rounded-3xl object-cover w-full h-full"
                  alt="aksesuar"
                />
              </figure>
              <div className="absolute card-body left-1/2 bottom-5 translate-x-[-50%] translate-y-[50%]">
                <h2 className="card-title text-3xl text-nowrap">
                  1015 - Masa Lambası
                </h2>
              </div>
            </div>
          </div>
          <div className="row-span-1 col-span-1 h-full">
            <div className="card bg-transparent h-full">
              <figure className="relative h-full">
                <img
                  src="/SARKITLAR.jpg"
                  className="rounded-3xl object-cover w-full h-full"
                  alt="aksesuar"
                />
              </figure>
              <div className="absolute card-body left-1/2 bottom-5 translate-x-[-50%] translate-y-[50%]">
                <h2 className="card-title text-3xl text-nowrap">
                  1015 - Masa Lambası
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <ScrollEffect />
    </div>
  );
}
