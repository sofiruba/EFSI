import Navbar from '../components/navbar'
import Footers from '../components/footer'
import ListaProductos from '../components/listadoProductos'
export default function ProductosPage(){
    return(
        <div className="App">
        <Navbar></Navbar>
        <div className='Container'>
            <ListaProductos></ListaProductos>
        </div>
      <Footers></Footers>

    </div>
    )
}