import '../css/styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/navbar';
import Footers from '../components/footer';
import  Carrousel  from '../components/carrousel';
import Containers from '../components/container'
import ListaProductos from '../components/listadoProductos';

export default function Inicio() {
  return (
    <div className="App">
        <Navbar></Navbar>
        <Carrousel></Carrousel>
      <div className='container'>
        <div>
        
        </div>
        <div>
          <ListaProductos></ListaProductos>
        </div>
        <hr className="mt-3 mb-3"/>
        <div>
          <Containers></Containers>
        </div>
      </div>
      
      <Footers></Footers>

    </div>
  );
}

