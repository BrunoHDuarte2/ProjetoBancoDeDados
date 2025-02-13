"use client";

import Image from "next/image";
import Header from "../../components/header";
import Link from 'next/link';
import Footer from "../../components/footer";
import { IoGameController } from "react-icons/io5";
import { Game } from "../../../types/games";
import { useEffect, useState } from "react";
import { getGame } from "../../api/gamesAPI";
import { addGameToCart } from "../../api/cartAPI";

interface GameProfileProps {
    params: {
        id: string; // Alterei de Promise<number> para string, pois a id geralmente vem como string da URL
    };
}

const GameProfile: React.FC<GameProfileProps> = ({ params }) => {
    const [game, setGame] = useState<Game | null>(null); // Inicializei como null, já que pode ser indefinido inicialmente
    const [code, setCode] = useState<number | null>(null); // Inicializei como null, já que o id pode não estar disponível imediatamente
    const [flag, setFlag] = useState<boolean>(false);


    const addToCart = async () => {
        try {
            await addGameToCart(code!, localStorage.getItem("user")!);

        } catch (error) {
            console.log(error);
        }
    }

    const fetchGame = async () => {
        if (code !== null) { // Verifique se o 'code' é válido antes de chamar a API
            try {
                const response = await getGame(code);
                console.log(response);
                setGame(response);
            } catch (error) {
                console.log(error);
            }
        }
    };

    useEffect(() => {
        const getId = async () => {
            // Convertendo 'params.id' para um número, já que ele vem como string
            const id1 = parseInt(params.id, 10);
            console.log(id1);
            if (!isNaN(id1)) { // Verifica se o id1 é um número válido
                setCode(id1);
            } else {
                console.log("ID inválido");
            }
            setFlag(true);
        };
        getId();
    }, [params.id]);

    useEffect(() => {
        if (code !== null) {
            console.log(code);
            fetchGame(); // Chama a função fetchGame quando o code for atualizado
        }
    }, [code]); // Atualiza quando 'code' mudar

    return (
        <div className="bg-gray-700 grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <Header bgColor="black" />
            <main className="flex flex-col gap-4 m-20 row-start-2 items-center sm:items-start">
                <p className="text-5xl text-white"> <IoGameController /> {game?.nome}</p>
                <div className="gap-3 inline-flex">
                    <Image
                        aria-hidden
                        src="/mario.avif"
                        alt="Game"
                        width={900}
                        height={900}
                    />
                    <div className="">
                        <p className="text-white">{game?.descricao}</p>
                        <div className="inline-flex"><p className="text-gray-500">Data de Lançamento: </p> <div className="text-white">{game?.dataLancamento}</div></div>
                    </div>
                </div>
                <div className="inline-flex gap-6 items-center rounded-sm bg-black p-1">
                    <div className="text-white justify-center items-center flex">R${game?.preco},00</div>
                    <button className="rounded-sm text-white border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-green-500 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 bg-green-600"
                    onClick={addToCart}>Adicione ao carrinho</button>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default GameProfile;
