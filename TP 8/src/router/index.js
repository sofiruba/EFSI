import { BrowserRouter, Routes, Route } from "react-router-dom";
import Personas from "../Personas";
import Estadisticas from '../components/Estadisticas'
import Persona from "../components/Persona";
import Contacto from "../components/Contacto";
import Home from "../components/Home";
import Layout from "../components/Layout";

export default function Router  (){
    return(
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}></Route>
          <Route index element={<Home personas={Personas} />}></Route>
          <Route path="/persona/:id" element={<Persona personas={Personas} />}></Route>
          <Route path="/estadistica" element={<Estadisticas personas={Personas} />}></Route>
          <Route path="/contacto" element={<Contacto />}></Route>
        </Routes>
      </BrowserRouter>
    )
}