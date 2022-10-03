import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "../pages/inicio";
import Contacto from "../pages/contacto";
import Productos from "../pages/productos";
import QuienesSomos from "../pages/quienessomos";
import Carrito from "../pages/carrito";
import ListadoContext from "../context";
export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Inicio />}></Route>
                <Route path="/contacto" element={<Contacto/>} ></Route>
                <Route path="/productos" element={<Productos/>} ></Route>
                <Route path="/quienessomos" element={<QuienesSomos/>} ></Route>
                <Route path='/carrito' element={<Carrito listado={ListadoContext} />} ></Route>

            </Routes>
        </BrowserRouter>
    )
}