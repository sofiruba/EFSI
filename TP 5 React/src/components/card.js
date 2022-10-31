import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css'
import ListadoContext from '../context/index'
import { useContext } from 'react';

export default function Card({props}) {
    const Lista = useContext(ListadoContext)
    return (
        <div className="col">
            <div className="card ">
                <img src={props.foto} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.nombre}</h5>
                    <p className="card-text">{props.descripcion}</p>
                    <p className="card-text">${props.precio}</p>
                                        {
                        Lista.lista.includes(props) ?    <a className='deleteBtn' onClick={() => Lista.eliminar_item(props.id)} >Eliminar del carrito</a> : <a className='btn-style' onClick={() => Lista.agregar_item(props)}>Agregar al carrito</a>
                    }
                    
                </div>
            </div>
        </div>
    );
}