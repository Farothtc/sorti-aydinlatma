import Link from "next/link";
import * as motion from "motion/react-client";
export default function Nav() {
  return (
    <div className="navbar bg-transparent container mx-auto flex justify-evenly items-center pt-6">
      <Link href="/">
        <div className="flex flex-col">
          <p className="text-5xl">Sorti</p>
          <p className="">AYDINLATMA</p>
        </div>
      </Link>
      <div className="flex flex-col items-center">
        <label className="input bg-transparent border-white mx-auto flex items-center ms-24 rounded-3xl">
          <input type="search" className="grow " />
          <svg
            className="h-[1em]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
        </label>
      </div>
      <div className="">
        <ul className="menu menu-horizontal px-1 text-2xl text-white">
          <Link href="/">
            <motion.li
              whileHover={{
                scale: [null, 1.05, 1.15],
                transition: {
                  duration: 0.5,
                  times: [0, 0.6, 1],
                  ease: ["easeInOut", "easeOut"],
                },
              }}
              whileTap={{ scale: 0.8 }}
            >
              <button>Anasayfa</button>
            </motion.li>
          </Link>
          <Link href="/urunler">
            <motion.li
              whileHover={{
                scale: [null, 1.05, 1.15],
                transition: {
                  duration: 0.5,
                  times: [0, 0.6, 1],
                  ease: ["easeInOut", "easeOut"],
                },
              }}
            >
              <button>Ürünler</button>
            </motion.li>
          </Link>
          <Link href="/hakkimizda">
            <motion.li
              whileHover={{
                scale: [null, 1.05, 1.15],
                transition: {
                  duration: 0.5,
                  times: [0, 0.6, 1],
                  ease: ["easeInOut", "easeOut"],
                },
              }}
              whileTap={{ scale: 0.8 }}
            >
              <button>Hakkımızda</button>
            </motion.li>
          </Link>
          <Link href="/galeri">
            <motion.li
              whileHover={{
                scale: [null, 1.05, 1.15],
                transition: {
                  duration: 0.5,
                  times: [0, 0.6, 1],
                  ease: ["easeInOut", "easeOut"],
                },
              }}
            >
              <button>Galeri</button>
            </motion.li>
          </Link>
          {/* <li>
            <details>
              <summary>Parent</summary>
              <ul className="bg-transparent w-32 h-auto rounded-t-none p-2">
                <li>
                  <a>Link 1</a>
                </li>
                <li>
                  <a>Link 2</a>
                </li>
              </ul>
            </details>
          </li> */}
        </ul>
      </div>
    </div>
  );
}
