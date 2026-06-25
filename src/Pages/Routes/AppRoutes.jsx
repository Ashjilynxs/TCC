import{
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom"
import Sobre_nos from "../Sobre Nós/Sobre_nos"
import Inicial from "../Inicial/Inicial"
const AppRoutes = () =>{
return(
<BrowserRouter>
<Routes>
<Route
path="/Inicial"
element={<Inicial/>}
/>

<Route
path="/Sobre"
element={<SobreNos/>}
/>

</Routes>

</BrowserRouter>
)
}
export default AppRoutes