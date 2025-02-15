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
import { getProducer, deleteProducer, updateProducer } from "../api/producerAPI";
import { getGamesFromProducer } from "../api/gamesAPI"; 
import { Producer } from "../../types/producer";
import { Game } from "../../types/games";

export default function ProducerPage() {
  const [producer, setProducer] = useState<Producer>({nome: "teste", senha: "teste"});
  const [ownedGames, setOwnedGames] = useState<Game[]>([]);
  const [input, setInput] = useState({
    nome: "",
    senha: ""
  });

  const updateProdutora = async () => {
        await updateProducer(input);
      }
  
  const fetchProducer = async () => {
    console.log(localStorage.getItem("producer")!);
    const data = await getProducer(localStorage.getItem("producer")!);
    setProducer(data);
  }

  const fetchGames = async () => {
    const data = await getGamesFromProducer(localStorage.getItem("producer")!);
    setOwnedGames(data);
  }

  const handleDelete = async () => {
    await deleteProducer(localStorage.getItem("producer"));
    localStorage.clear();
    window.location.href = "/login";
  }

  useEffect(() => {
    setInput({nome: producer?.nome!, senha: producer?.senha!});
  }, [producer])

  useEffect(() => {
    fetchProducer();
    fetchGames();
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
                          <input type="text" id="username" name="username" defaultValue={producer?.nome} className="bg-gray-800 shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline" 
                          onChange={(e) => setInput({...input, nome: e.target.value})}/>
                          <button className="absolute left-[90%] bg-gray-800 h-full border text-white border-x-gray-800"
                          onClick={updateProdutora}><FaEdit /></button>
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <label className="text-white" htmlFor="password">Senha</label>
                        <div className="relative items-center inline-flex">
                          <input type="password" id="password" name="password" defaultValue={producer?.senha} className="bg-gray-800 shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline" 
                          onChange={(e) => setInput({...input, senha: e.target.value})}/>
                          <button className="absolute left-[90%] bg-gray-800 h-full border text-white border-x-gray-800"
                          onClick={updateProdutora}><FaEdit /></button>
                        </div>
                      </div>
                  </form>
                  </div>
                  <button className="font-semibold rounded-lg text-white border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-red-500 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 bg-red-600"
                      onClick={handleDelete}>
                      Apagar Produtora</button>
              </div>
              <div className="gap-4">
                <h1 className="text-blue-400 text-3xl text-bold underline"> Jogos da Produtora </h1>
                <div className="grid grid-cols-4 gap-4">
                { ownedGames != undefined ? ownedGames.map((game) => (
                  <div key={game.idItem} className="rounded-lg shadow-md overflow-hidden relative">
                    <div className="bg-white flex items-center p-1 items-center justify-between h-10">
                      <h2 className="text-black text-sm font-bold text-left">{game.nome}</h2>
                      <button className="text-3xl text-black"> <FaGear/></button>
                    </div>
                    <img src="mario.avif"
                    alt={game.nome} className="w-full h-50 object-cover" />
                </div>)) : <></>}
                </div>
              </div>
          </div>
        </div>
    </main>
  );
}