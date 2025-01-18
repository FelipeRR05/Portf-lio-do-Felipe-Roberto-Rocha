import { createRoot } from "react-dom/client";
import Contatos from "./components/contatos/Contatos";
import Habilidades from "./components/habilidades/Habilidades";
import Navbar from "./components/navbar/Navbar";
import Projetos from "./components/projetos/Projetos";
import SobreMim from "./components/sobre-mim/SobreMim";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <div>
    <Navbar />
    <SobreMim />
    <Habilidades />
    <Projetos />
    <Contatos />
  </div>
);
