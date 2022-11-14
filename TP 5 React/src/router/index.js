import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "../pages/inicio";
import Contacto from "../pages/contacto";
import ProductosPage from "../pages/productos";
import QuienesSomos from "../pages/quienessomos";
import { useState } from "react";
export default function Router() {


    const [lista, setLista] = useState([])
    const eliminar_item = (index) => {
      let nueva_lista = lista.filter((i, idx) => idx !== index)
      setLista(nueva_lista)
      console.log(lista, 'eliminado')
  
  
    }
    const agregar_item = (item) => {
      setLista(list => [...list, item])
      console.log('agregado', lista)
    }
    const listado = { lista, setLista, eliminar_item, agregar_item }
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Inicio listado={listado} />}></Route>
                <Route path="/contacto" element={<Contacto listado={listado} />} ></Route>
                <Route path="/productos" element={<ProductosPage listado={listado} />} ></Route>
                <Route path="/quienessomos" element={<QuienesSomos listado={listado} />} ></Route>

            </Routes>
        </BrowserRouter>
    )
}