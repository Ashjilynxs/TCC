import{
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom"
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
element={<Sobre_nos/>}
/>

</Routes>

</BrowserRouter>
)
}