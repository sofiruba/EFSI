import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "../pages/inicio";
export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Inicio />}></Route>

            </Routes>
        </BrowserRouter>
    )
}