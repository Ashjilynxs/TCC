import { Routes, Route } from "react-router-dom"
import Inicial from "../Inicial/Inicial"
import SobreNos from "../Sobre Nós/Sobre_nos"

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Inicial />} />
      <Route path="/Inicial" element={<Inicial />} />
      <Route path="/Sobre" element={<SobreNos />} />
    </Routes>
  )
}

export default AppRoutes