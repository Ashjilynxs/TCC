import { BrowserRouter, Routes, Route } from "react-router-dom";

import Inicial from "../Inicial/Inicial";
import SobreNos from "../Sobre Nós/Sobre_nos";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicial />} />
        <Route path="/sobre" element={<SobreNos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;