"use client";

import { GiTurtle } from "react-icons/gi";
import { useState, useEffect, useContext, createContext } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FaSteam } from "react-icons/fa";
import Link from 'next/link';
import Image from "next/image";
import { deleteUser } from "../api/userAPI";

import { IoPerson } from "react-icons/io5";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { HiMiniSquares2X2 } from "react-icons/hi2"
import { FaGear } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";

interface HeaderProps {
  bgColor?: string; 
}

function Links() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const listDropDown = [{text:"Configurações", icon: <FaGear />}, {text: "Sair", icon: <LuLogOut />}];

  function Modal() {
    const [isEditable, setIsEditable] = useState([false, false, false]);
    const [selectedOption, setSelectedOption] = useState("Conta");
    const [ownedGames, setOwnedGames] = useState(["Mario Odyssey", "Zelda Breath of the Wild", "Mario Kart 8 Deluxe", "Super Smash Bros Ultimate", "Splatoon 2", "Animal Crossing New Horizons"]);
    const options = [{text:"Conta",icon:<IoPerson />},{text:"Biblioteca",icon:<HiMiniSquares2X2 />}];
    
    const handleDelete = async () => {
      await deleteUser(localStorage.getItem("user"));
      localStorage.clear();
      window.location.href = "/login";
    }

    return (
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex items-center justify-center">
        <div className="bg-slate-600 rounded-lg w-[800px] h-[450px]">
          <div className="inline-flex items-center justify-between w-full p-2 bg-slate-500 rounded-t-lg">
            <h1 className="text-white text-3xl inline-flex gap-2"> <FaGear /> Configurações</h1> 
            <button className="text-white text-3xl" onClick={() => setIsModalOpen(false)}><IoIosCloseCircleOutline /></button>
          </div>
          <div className="inline-flex w-full">
            <div className=" flex flex-col">
              {options.map((option, index) => {
                return (
                  <button key={index} onClick={() => setSelectedOption(option.text)}className="bg-slate-500 gap-2 p-2 hover:bg-slate-400 cursor-pointer border-l-transparent hover:border-l-blue-400 border-l-4 text-xl inline-flex items-center">
                    <h3>{option.icon}</h3> <h3> {option.text}</h3>
                  </button>
                )
              })}
            </div>
            <div className="flex w-full">
              {selectedOption === "Conta" ? <div className="flex flex-col p-2 gap-4 w-full">
                <div className="flex flex-col gap-4 items-center">
                  <h1 className="text-2xl text-blue-400 font-bold underline">
                    Informações da Conta
                  </h1>
                  <div className="flex gap-20 justify-between items-center">
                    <div className="flex flex-col relative">
                      <Image
                        src="/profile.jpeg"
                        alt="Foto de Perfil"
                        width={250}
                        height={60}
                        priority
                        className="mx-auto border border-white-900 rounded-sm"/>
                      <button className="absolute rounded-full bg-white left-[90%] text-xl p-2 border-blue-400 border text-black"><FaEdit /></button>
                    </div>

                    <form>
                    <div className="flex flex-col">
                        <label className="text-white" htmlFor="username">Email</label>
                        <div className="relative items-center inline-flex justify-between">
                          <button className="absolute left-[90%] bg-gray-800 h-full border text-white border-x-gray-800"><FaEdit /></button>
                          <input type="text" id="email" name="email" className="bg-gray-800 shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline" />
                        </div>  
                      </div>
                      <div className="flex flex-col">
                        <label className="text-white" htmlFor="username">Nome de Usuário</label>
                        <div className="relative items-center inline-flex">
                          <input type="text" id="username" name="username" className="bg-gray-800 shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline" />
                          <button className="absolute left-[90%] bg-gray-800 h-full border text-white border-x-gray-800"><FaEdit /></button>
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <label className="text-white" htmlFor="password">Senha</label>
                        <div className="relative items-center inline-flex">
                          <input type="password" id="password" name="password" className="bg-gray-800 shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline" />
                          <button className="absolute left-[90%] bg-gray-800 h-full border text-white border-x-gray-800"><FaEdit /></button>
                        </div>
                      </div>
                  </form>
                  </div>
                </div>

                <div>
                < button className="text-blue-400 font-bold"
                onClick={() => setSelectedOption("Apagar")}> Quero apagar minha conta </button>
                </div>  
              </div> 
              : selectedOption === "Apagar" ? <div className="flex flex-col p-2 gap-4">
                <h1 className="text-2xl text-blue-400">
                  Apagar minha conta da Steam
                </h1>
                <div className="text-white">
                  <p className="text-xl">
                    Você precisa saber...
                  </p>
                    Ao apagar sua conta, suas licenças serão expiradas e todos os seus itens serão perdidos permanentemente. 
                </div>
                <button className="font-semibold rounded-lg text-white border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-red-500 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 bg-red-600"
                onClick={()=>handleDelete}>
                Prosseguir com o apagamento</button>
              </div> :
              selectedOption === "Biblioteca" ? <div className="flex flex-col p-2 gap-4 items-center">
                <h1 className="text-2xl text-blue-400 font-bold underline">
                  Jogos Adquiridos
                </h1>
                <div className="grid grid-cols-4 gap-4">
                {ownedGames.map((game) => (
                  <div key={game} className="rounded-lg shadow-md overflow-hidden relative">
                    <div className="bg-white flex items-center p-1 items-center justify-between h-10">
                      <h2 className="text-black text-sm font-bold text-left">{game}</h2>
                    </div>

                    <img src="mario.avif"
                    alt={game} className="w-full h-50 object-cover" />

                    <button className="flex text-white items-center p-1 justify-between w-full h-30 object-cover bg-red-500 hover:bg-red-400">
                      Pedir Reembolso
                    </button>
                </div>))}
                </div>
              </div> 
              : <></> }
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Link
        href={'/cart'}
        className="text-white hover:text-blue-400 transition-transform transform hover:font-semibold hover:underline hover:underline-offset-4 text-2xl"
      >
        Carrinho
      </Link>
      <Link
        href={`/store`}
        className="text-white hover:text-blue-400 transition-transform transform hover:font-semibold hover:underline hover:underline-offset-4 text-2xl"
      >
        Loja
      </Link>

      <Link
        href="/library"
        className="text-white hover:text-blue-400 transition-transform transform hover:font-semibold hover:underline hover:underline-offset-4 text-2xl"
      >
        Biblioteca
      </Link>

      <span className="hidden md:flex text-white text-6xl font-thin">|</span>

      <div className="relative flex flex-col items-center">
        <Image
          src="/profile.jpeg"
          alt="Foto de Perfil"
          width={60}
          height={60}
          priority
          className="rounded-full w-14 h-14 mx-auto border-4 border-transparent active:border-blue-400 duration-500"
          onClick = {() => setIsDropDownOpen(!isDropDownOpen)}
        />

        {isDropDownOpen && (
          <div className="bg-slate-600 absolute top-16 flex flex-col items-start rounded-lg p-2 w-[200px]">
            {listDropDown.map((item, index) => (
              <button key={index} className="flex text-white w-full justify-between hover:bg-slate-500 cursor-pointer rounded-r-lg border-l-transparent hover:border-l-blue-400 border-l-4" 
              onClick={item.text=="Configurações" ? () => {
                setIsModalOpen(true)
                setIsDropDownOpen(false)
              } : 
              () => {
                window.location.href = "/login"
                localStorage.clear();
              }}>
                <div className="flex inline-flex gap-2 items-center">
                  {item.icon}
                  <h3>{item.text}</h3>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
      {isModalOpen && <Modal />}
    </>
  );
}

const Header: React.FC<HeaderProps> = ({ }) => {
  const [estaAberto, setEstaAberto] = useState(false);

  const alternarNavbar = () => {
    setEstaAberto(!estaAberto);
  };

  useEffect(() => {

    const logged = localStorage.getItem("user");
    if (!logged) {
      //window.location.href = "/login";
    }

    const lidarComResize = () => {
      if (window.innerWidth >= 768) {
        setEstaAberto(false);
      }
    };

    window.addEventListener("resize", lidarComResize);
    return () => window.removeEventListener("resize", lidarComResize);
  }, []);

  return (
    <div className={`bg-gray-800 border-white border-b-4 fixed top-0 left-0 w-full z-50`}>
      <header className="md:px-24 md:py-8 px-8 py-3 top-0 flex-wrap z-[20] mx-auto flex w-full items-center justify-between">
        <div className="flex items-center text-white text-6xl">
            <FaSteam />
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