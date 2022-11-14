import Card from "./card"
import Productos from "../Productos"
import { useContext } from "react"
import ListadoContext from "../context"
import CardCarrito from "./cardCarrito"
export default function ListaCarrito(){
    const Lista = useContext(ListadoContext)
    return(
        <div>

            <div className="lista">     
            {Lista.lista.map((p,index) => (
                <CardCarrito key={index} props={{p, index}}></CardCarrito>
            ))}
            </div>
        </div>
    )
}