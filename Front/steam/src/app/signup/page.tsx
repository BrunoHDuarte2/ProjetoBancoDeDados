import Image from "next/image";
import Footer from "../components/footer";

export default function Login() {
  return (
    <div className="bg-gray-700 grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col row-start-2 items-center sm:items-start gap-4">
       <p className="text-5xl text-white">Cadastro</p>
        <div className="bg-gray-500 p-2 flex gap-4 flex flex-col rounded-lg">
        <button className="font-semibold rounded-lg text-white border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-green-500 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 bg-green-600">Cadastrar</button>
        <p className="text-white">Já tem uma conta na Steam? <a className="underline" href="/login">Entre na sua conta</a></p>
        </div>
      </main>
      <Footer/>
    </div>
  );
}