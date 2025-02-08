"use client";

import { GiTurtle } from "react-icons/gi";
import { useState, useEffect } from "react";
import { Link as RLink } from 'react-scroll';
import { IoIosArrowDown } from "react-icons/io";
import Link from 'next/link';
import Image from "next/image";

interface HeaderProps {
  bgColor?: string; 
}

function Links() {
  return (
    <>
      <RLink
        to="Cardx3"
        smooth={true}
        duration={500}
        spy={true}
        activeClass="font-semibold"
        className="text-white transition-transform transform hover:font-semibold hover:underline hover:underline-offset-4 text-2xl"
      >
        Perfil
      </RLink>

      <RLink
        to="NossoTime"
        smooth={true}
        duration={500}
        spy={true}
        activeClass="font-semibold"
        className="text-white transition-transform transform hover:font-semibold hover:underline hover:underline-offset-4 text-2xl"
      >
        Inventário
      </RLink>

      <span className="hidden md:flex text-white text-6xl font-thin">|</span>

      <Link href='/homeblog' legacyBehavior>
        <a className="text-white transition-transform transform font-semibold hover:underline hover:underline-offset-4 text-4xl">
          Loja
        </a>
      </Link>
    </>
  );
}

const Header: React.FC<HeaderProps> = ({ bgColor = "bg-gray-700" }) => {
  const [estaAberto, setEstaAberto] = useState(false);

  const alternarNavbar = () => {
    setEstaAberto(!estaAberto);
  };

  useEffect(() => {
    const lidarComResize = () => {
      if (window.innerWidth >= 768) {
        setEstaAberto(false);
      }
    };

    window.addEventListener("resize", lidarComResize);
    return () => window.removeEventListener("resize", lidarComResize);
  }, []);

  return (
    <div className={`bg-gray-700 border-white border-b-4 fixed top-0 left-0 w-full z-50`}>
      <header className="md:px-24 md:py-8 px-8 py-3 top-0 flex-wrap z-[20] mx-auto flex w-full items-center justify-between">
        <div className="flex items-center">
          <Link href='/' legacyBehavior>
            <Image
              className="dark:invert"
              src="/steam_icon.svg"
              alt="Steam logo"
              width={60}
              height={38}
              priority
              />
          </Link>
        </div>
        <div className="hidden md:flex flex-row items-center space-x-4">
          <Links />
        </div>
        <div className="relative inline-block text-left md:hidden">
          <div
            className="flex items-center cursor-pointer"
            onClick={alternarNavbar}
          >
            <IoIosArrowDown
              className={`text-4xl text-white transition-transform duration-300 ${estaAberto ? 'transform rotate-180' : 'transform rotate-0'}`}
            />
          </div>
        </div>
      </header>
      <div>
        {estaAberto && (
          <div className="flex flex-col items-center justify-center py-4 space-y-2">
            <Links />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;