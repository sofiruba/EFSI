import Navbar from '../components/navbar'
import Footers from '../components/footer'
export default function QuienesSomos(){
    return(
        <div className="App">
        <Navbar></Navbar>
        <div>
            <h1>Quienes somos</h1>
            <p>Somos un negocio familiar dedicado a la venta de materiales para la construcción, sanitarios, griferías, caños y accesorios de gas, agua, desague, membranas, bombas domiciliarias e industriales, y afines. Nos encontramos ubicados en el centro de la ciudad de Campana con más de 30 años de experiencia y trayectoria que nos respaldan al brindar un servicio de calidad y atención personalizada.</p>
        </div>
      
      <Footers></Footers>

    </div>
    )
}