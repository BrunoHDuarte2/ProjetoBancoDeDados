"use client"

import Image from "next/image";
import Footer from "../components/footer";
import { useState } from "react";
import { signIn } from "../api/authAPI";

export default function Login() {
  const [input, setInput] = useState({
    username: "",
    password: ""
  });

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    try{
      const response = await signIn(input);
      
      if (response != false){
        localStorage.setItem("user", JSON.stringify(response.user));
      }

      window.location.href = "/library";
    } catch(error){
      console.log(error);
    }
    
  }

  return (
    <div className="bg-gray-700 grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col row-start-2 items-center sm:items-start gap-4">
        <p className="text-5xl text-white">Login</p>

        <form className="bg-gray-800 p-2 flex gap-4 flex flex-col rounded-lg" onSubmit={handleLogin}>
          <div className="flex flex-col">
            <label className="text-blue-400" htmlFor="username">Nome de Usuário</label>
            <input type="text" id="username" name="username" className="bg-gray-800 shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline" 
            onChange={(e) => setInput({...input, username: e.target.value})} required/>
          </div>
          <div className="flex flex-col">
            <label className="text-gray-400" htmlFor="password">Senha</label>
            <input type="password" id="password" name="password" className="bg-gray-800 shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline" 
            onChange={(e) => setInput({...input, password: e.target.value})} required/>
          </div>
          <button type="submit" className="font-semibold rounded-lg text-white border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-green-500 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 bg-green-600">Login</button>
          <p className="text-gray-400 text-sm">Não tem uma conta na Steam? <a className="underline" href="/signup">Crie uma conta gratuita</a></p>
        </form>
      </main>
      <Footer/>
    </div>
  );
}