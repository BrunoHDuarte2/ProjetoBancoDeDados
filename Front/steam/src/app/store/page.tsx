import Image from "next/image";
import Header from "../components/header";
import Link from 'next/link';

export default function Store() {
  const games = ["Super Mario Odyssey", "The Legend of Zelda: Breath of the Wild", "Mario Kart 8", "Mario Kart 9","Pokémon: Legends Z-A", "GTA V", "GTA VI"];

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <Header bgColor="black"/>
      <main className="flex flex-col gap-12 row-start-2 items-center sm:items-start">
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {games.map((game) => (
          <div key={game} className="bg-white rounded-lg shadow-md overflow-hidden relative">

            <img src="mario.avif"
            alt={game} className="w-full h-64 object-cover" /> :
            <div className="w-full h-30 object-cover"></div>

            <div className="p-4">
              <div className="flex justify-between items-center mb-2">

                <h2 className="text-black text-xl font-bold text-left">{game}</h2>
  
              </div>
              <div className="mt-4 flex justify-between items-center">
                <Link href={`/game/${games.findIndex((g) => g === game)}`} legacyBehavior>
                  <a className="text-black font-semibold">
                    Ver mais
                  </a> 
                </Link>
              </div>
            </div>
          </div>
         ))}
      </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}