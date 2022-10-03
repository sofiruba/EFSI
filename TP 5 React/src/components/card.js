import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css'
import Capa1 from '../img/Capa-1.png'

export default function Card() {
    return (
        <div className="col">
            <div className="card ">
                <img src={Capa1} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Lavatorios</h5>
                    <p className="card-text">Mueble colgante para lavatorio</p>
                </div>
            </div>
        </div>
    );
}