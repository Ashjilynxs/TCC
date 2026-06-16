import { BrowserRouter, Routes, Route } from "react-router-dom";

import Inicial from "../Inicial/Inicial";
import SobreNos from "../Sobre Nós/Sobre_nos";
import Cardapio from "../Cardapio/Cardapio";
import Contato from "../Contato/Contato";
import Pedidos from "../Pedidos/Pedidos";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicial />} />
        <Route path="/sobre" element={<SobreNos />} />
        <Route path="/cardapio" element={<Cardapio />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/pedidos" element={<Pedidos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;