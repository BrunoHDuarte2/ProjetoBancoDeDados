"use client";

import Image from "next/image";
import Header from "../components/header";
import Link from 'next/link';
import Footer from "../components/footer";
import { useEffect, useState } from "react";
import { IoBag } from "react-icons/io5";
import { getAllGames } from "../api/gamesAPI";
import { Game } from "../../types/games";

export default function Store() {

  const [games, setGames] = useState<Game[]>([]);
  
  const fetchGames = async () => {
    try{
    const games = await getAllGames();
    if (games == undefined || games == null) {
      setGames([]);
    } else setGames(games);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchGames();
  }, []);

  return (
    <div className="bg-gray-700 grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <Header bgColor="black"/>
      <main className="flex flex-col gap-4 row-start-2 items-center sm:items-start">
        <p className="text-5xl text-white"> <IoBag /> Loja</p>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {games.map((game) => (
          <div key={game.idItem} className="bg-white rounded-lg shadow-md overflow-hidden relative">

            <img src="mario.avif"
            alt={game.nome} className="w-full h-64 object-cover" /> :
            <div className="w-full h-30 object-cover"></div>

            <div className="p-4">
              <div className="flex justify-between items-center mb-2">

                <h2 className="text-black text-xl font-bold text-left">{game.nome}</h2>
  
              </div>
              <div className="mt-4 flex justify-between items-center">
                <Link href={`/game/${game.idItem}`} legacyBehavior>
                  <a className="text-black font-semibold hover:underline hover:underline-offset-4">
                    Ver mais
                  </a> 
                </Link>

                <div className="text-black font-semibold">R$ {game.preco},00</div>
              </div>
            </div>
          </div>
         ))}
      </div>
      </main>
      <Footer/>
    </div>
  );
}