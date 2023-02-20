import { useState } from "react"; 
import Link from "next/link";
import Image from "next/image";
import Logo from '../assets/img/pokeball.svg';

export default function Navigation() {
  const [isNavOpen, setIsNavOpen] = useState(false); 

  return (
    <div className="flex justify-between items-center p-4">
      <Link href="/" className="animate-bounce hover:animate-none">
        <Image
            src={Logo}
            alt="Logo PokeApp"
            width={50}
            height={50}
        />
      </Link>

      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)} 
          >
            <span className="block h-0.5 w-8 animate-pulse bg-black"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-black"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-black"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)} 
            >
              <svg
                className="h-8 w-8 text-black"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
              <li className="border-b border-black my-8 uppercase">
                <Link href="/">Accueil</Link>
              </li>
              <li className="border-b border-black my-8 uppercase">
                <Link href="/pokemons">Pokémons</Link>
              </li>
              <li className="border-b border-black my-8 uppercase">
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
          <li>
            <Link href="/" className="hover:text-white">Accueil</Link>
          </li>
          <li>
            <Link href="/pokemons" className="hover:text-white">Pokémons</Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-white">Contact</Link>
          </li>
        </ul>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  );
}