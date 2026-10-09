import { Routes, Route } from "react-router-dom";
import Inicial from "../Pages/Inicial/Inicial";
import SobreNos from "../Pages/Sobre Nós/Sobre_nos";
import Cadastro from "../Pages/Cadastro/cadastro";
import Cadastro from "../Pages/Dashboard/Dashboard";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Inicial />} />
      <Route path="/Inicial" element={<Inicial />} />
      <Route path="/Sobre" element={<SobreNos />} />
      <Route path="/Cadastro" element={<Cadastro />} />
      <Route path="/Dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default AppRoutes;