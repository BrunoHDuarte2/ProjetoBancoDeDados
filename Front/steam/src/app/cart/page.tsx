"use client"

import Image from "next/image";
import Header from "../components/header";
import Link from 'next/link';
import { FaShoppingCart } from "react-icons/fa";
import Footer from "../components/footer";
import { useState, useEffect } from "react";
import { getItemsFromCart } from "../api/cartAPI";

export default function Cart() {
  const [games, setGames] = useState([]);

  const fetchGames = async () => {
    const response = await getItemsFromCart(localStorage.getItem("username")!);
    const data = await response.json();
    setGames(data);
  }

  useEffect(() => {
    fetchGames();
  }, []);

  return (
    <div className="bg-gray-700 grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <Header bgColor=""/>
      <main className="flex flex-col row-start-2 items-center sm:items-start gap-4">
       <p className="text-5xl text-white"> <FaShoppingCart /> Seu Carrinho de Compras</p>
        <div className="relative inline-flex gap-3">
          <div className="bg-gray-500 p-2 flex gap-4 flex flex-col rounded-lg">
            {games.map((game) => (
              <div key={game} className="bg-white rounded-lg shadow-md overflow-hidden relative">
                
                <div className="flex justify-between items-center mb-2 p-3 flex items-center justify-between">
                  <h2 className="text-black text-xl font-bold text-left">{game}</h2>
                </div>

                <img src="mario.avif"
                alt={game} className="w-full h-64 object-cover" /> :
                <div className="w-full h-30 object-cover"></div>

                <div className="p-4 flex items-center gap-3 justify-between">
                    <div className="flex justify-between items-center mb-2">
                        <div className="text-black text-xl font-bold"> R$00,00</div>
                    </div>

                    <Link href="https://www.clickjogos.com.br/" legacyBehavior>
                        <button className="font-semibold rounded-lg text-white border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-red-500 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 bg-red-600">Remover</button>
                    </Link>
                </div>
            </div>))}
          </div>
          <div>
            <div className= "fixed bg-gray-800 p-4 gap-3 rounded-lg">

              <div className="flex">
                <p className="text-xl bold text-gray-500">Quantidade:</p> <p className="text-xl bold text-white">0</p>
              </div>

              <div className= "inline-flex">
                <p className= "text-xl bold text-gray-500">Subtotal:</p> <p className="text-xl bold text-white"> R$00,00</p>
              </div>

              <Link href="https://www.clickjogos.com.br/" legacyBehavior>
                  <button className="font-semibold rounded-lg text-white border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-green-500 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 bg-green-600">Realizar Pagamento</button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer/>
    </div>
  );
}