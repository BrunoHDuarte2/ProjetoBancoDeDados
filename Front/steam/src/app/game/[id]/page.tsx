import Image from "next/image";
import Header from "../../components/header";
import Link from 'next/link';

interface GameProfileProps {
    params: {
        id: number;
    };
}

const GameProfile: React.FC<GameProfileProps> = ({ params: { id } }) => {
    const games = ["Super Mario Odyssey", "Zelda Breath of the Wild", "Mario Kart 8", "Mario Kart 9", "Pokémon: Legends Z-A", "GTA V", "GTA VI"];

    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <Header bgColor="black" />
            <main className="flex flex-col gap-3 m-20 row-start-2 items-center sm:items-start">
                <p className="text-5xl text-white">{games.at(id)}</p>
                <div className="gap-3 inline-flex">
                <Image
                    aria-hidden
                    src="/mario.avif"
                    alt="Game"
                    width={900}
                    height={900}
                />
                    <div>
                        <p>Um ótimo jogo de aventura</p>
                        <p className="text-gray-500">Data de Lançamento:</p>
                    </div>
                </div>
                <div className="inline-flex gap-6 items-center rounded-sm bg-black p-1">
                    <div className="justify-center items-center flex">R$00,00</div>
                    <button className="rounded-sm text-white border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-green-500 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 bg-green-600">Adicione ao carrinho</button>
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
};

export default GameProfile;