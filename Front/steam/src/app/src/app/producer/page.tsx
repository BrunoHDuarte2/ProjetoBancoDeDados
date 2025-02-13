"use client"

import Image from "next/image";
import Footer from "../components/footer";
import { useState } from "react";
import { createUser } from "../api/userAPI";

import { IoPerson } from "react-icons/io5";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { HiMiniSquares2X2 } from "react-icons/hi2"
import { MdMonitor } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { LuLogOut } from "react-icons/lu";

export default function Producer() {
    const [isEditable, setIsEditable] = useState([false, false, false]);
    const [ownedGames, setOwnedGames] = useState(["Mario Odyssey", "Zelda Breath of the Wild", "Mario Kart 8 Deluxe", "Super Smash Bros Ultimate", "Splatoon 2", "Animal Crossing New Horizons"]);


  return (
    <div className="fixed bg-slate-600 h-full w-full">
        <div className="flex justify-between w-full p-2 bg-slate-500 rounded-t-lg">
            <h1 className="text-white text-3xl inline-flex gap-2"> <MdMonitor /> Painel do Produtor</h1> 
            </div>
                <div className="flex w-full">
                  <div className="flex flex-col p-2 gap-4 w-full">
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
                  <div className="flex flex-col p-2 gap-4">
                    <h1 className="text-2xl text-blue-400">
                      Apagar minha conta da Steam
                    </h1>
                    <div className="text-white">
                      <p className="text-xl">
                        Você precisa saber...
                      </p>
                        Ao apagar sua conta, suas licenças serão expiradas e todos os seus itens serão perdidos permanentemente. 
                    </div>
                    <button className="font-semibold rounded-lg text-white border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-red-500 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 bg-red-600">
                    Prosseguir com o apagamento</button>
                  </div>
                  <div className="flex flex-col p-2 gap-4 items-center">
                    <h1 className="text-2xl text-blue-400 font-bold underline">
                      Jogos Criados
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
                          Deletar
                        </button>
                    </div>))}
                    </div>
                  </div>
        </div>
    </div>
  );
}