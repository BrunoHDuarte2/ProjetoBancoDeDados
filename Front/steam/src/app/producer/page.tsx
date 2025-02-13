"use client"

import Image from "next/image";
import Footer from "../components/footer";
import { useState, useEffect } from "react";
import { createUser } from "../api/userAPI";

import { IoPerson } from "react-icons/io5";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { HiMiniSquares2X2 } from "react-icons/hi2"
import { MdMonitor } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { LuLogOut } from "react-icons/lu";
import { getProducer } from "../api/producerAPI";
import { getGamesFromProducer } from "../api/gamesAPI"; 
import { Producer } from "../../types/producer";
import { Game } from "../../types/games";

export default function ProducerPage() {
  const [isEditable, setIsEditable] = useState([false, false, false]);
  const [producer, setProducer] = useState<Producer>({nome: "teste", senha: "teste"});
  const [ownedGames, setOwnedGames] = useState(["Mario Odyssey", "Zelda Breath of the Wild", "Mario Kart 8 Deluxe", "Super Smash Bros Ultimate", "Splatoon 2", "Animal Crossing New Horizons"]);
  
  const fetchProducer = async () => {
    const data = await getProducer(localStorage.getItem("producer")!);
    setProducer(data);
  }

  const fetchGames = async () => {
    const data = await getGamesFromProducer(localStorage.getItem("producer")!);
    setOwnedGames(data);
  }

  useEffect(() => {
    //fetchProducer();
    //fetchGames();
  }, []);

  return (
    <main className="fixed bg-slate-600 h-full w-full gap-4 items-center justify-items-center">
        <div className="flex flex-col w-full p-2 bg-slate-700">
          <h1 className="text-white text-3xl inline-flex gap-2"> <MdMonitor /> Painel da Produtora</h1>    
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col gap-2">
              <div className="gap-2">
                <h1 className="text-blue-400 text-3xl text-bold underline"> Conta da Produtora </h1>
                <div className="flex gap-20 justify-between items-center">
                    <form>
                      <div className="flex flex-col">
                        <label className="text-white" htmlFor="username">Nome da Produtora</label>
                        <div className="relative items-center inline-flex">
                          <input type="text" id="username" name="username" defaultValue={producer?.nome} className="bg-gray-800 shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline" />
                          <button className="absolute left-[90%] bg-gray-800 h-full border text-white border-x-gray-800"><FaEdit /></button>
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <label className="text-white" htmlFor="password">Senha</label>
                        <div className="relative items-center inline-flex">
                          <input type="password" id="password" name="password" defaultValue={producer?.senha} className="bg-gray-800 shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline" />
                          <button className="absolute left-[90%] bg-gray-800 h-full border text-white border-x-gray-800"><FaEdit /></button>
                        </div>
                      </div>
                  </form>
                  </div>
              </div>
              <div className="gap-4">
                <h1 className="text-blue-400 text-3xl text-bold underline"> Jogos da Produtora </h1>
                <div className="grid grid-cols-4 gap-4">
                {ownedGames.map((game) => (
                  <div key={game} className="rounded-lg shadow-md overflow-hidden relative">
                    <div className="bg-white flex items-center p-1 items-center justify-between h-10">
                      <h2 className="text-black text-sm font-bold text-left">{game}</h2>
                      <button className="text-3xl text-black"> <FaGear/></button>
                    </div>
                    <img src="mario.avif"
                    alt={game} className="w-full h-50 object-cover" />
                </div>))}
                </div>
              </div>
          </div>
        </div>
    </main>
  );
}