"use client"

import Image from "next/image";
import Footer from "../components/footer";
import { useState } from "react";
import { createProducer } from "../api/producerAPI";

export default function Signup() {
  const [input, setInput] = useState({
    nome: "",
    senha: "",
    retry: ""
  });

  const handleSignup = async () => {
    try {
      if (input.senha == input.retry){
        await createProducer(input);
        window.location.href = "/login";
      }
    } catch(error) {}
  }

  return (
    <div className="bg-gray-700 grid grid-rows-[20px_1fr_20px] gap-4 items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col row-start-2 items-center sm:items-start gap-4">
        <p className="text-5xl text-white">Cadastro</p>
        <form className="bg-gray-800 p-2 flex gap-4 flex flex-col rounded-lg" onSubmit={handleSignup}>
          <div className="flex flex-col">
            <label className="text-blue-400" htmlFor="username">Nome do Produtor</label>
            <input type="text" id="username" name="username" className="bg-gray-800 shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline" 
            onChange={(e) => setInput({...input, nome: e.target.value})} required/>
          </div>
          <div className="flex flex-col">
            <label className="text-gray-400" htmlFor="password">Senha</label>
            <input type="password" id="password" name="password" className="bg-gray-800 shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline" 
            onChange={(e) => setInput({...input, senha: e.target.value})} required/>
          </div>
          <div className="flex flex-col">
            <label className="text-gray-400" htmlFor="password2">Repita a Senha</label>
            <input type="password" id="password2" name="password" className="bg-gray-800 shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline" 
            onChange={(e) => setInput({...input, retry: e.target.value})} required/>
          </div>
          <button className="font-semibold rounded-lg text-white border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-green-500 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 bg-green-600">Cadastrar</button>
          <p className="text-gray-400 text-sm">Já tem uma conta na Steam? <a className="underline" href="/login">Entre com sua conta</a></p>
          <p className="text-gray-400 text-sm"> É um usuário normal? <a className="underline" href="/login">Se cadastre aqui</a> </p>
        </form>
      </main>
      <Footer/>
    </div>
  );
}