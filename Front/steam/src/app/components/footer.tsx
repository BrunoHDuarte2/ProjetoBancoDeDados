import { FaDatabase } from "react-icons/fa6";

export default function Footer(){
    return(
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p
          className="flex items-center gap-2"
        >
          STEAM
          <FaDatabase />
          Banco de Dados - 2024.2
        </p>
      </footer>
    );
}