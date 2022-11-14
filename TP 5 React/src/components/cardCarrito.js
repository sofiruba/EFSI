import '../css/styles.css'
import ListadoContext from '../context/index'
import { useContext } from 'react';

export default function CardCarrito({ props }) {
    const Lista = useContext(ListadoContext)
    return (

        <div className="card-mini ">
            <div class="container text-center">
                <div class="row">
                    <div className='col'>
            <img src={props.p.foto} className="card-mini-img-top" alt="..." />

                    </div>
                    <div class="col">
                        <p className="card-mini-title">{props.p.nombre}</p>

                    </div>
                    <div class="col">
                        <p >{props.p.descripcion}</p>

                    </div>
                    <div class="col">
                        <p >${props.p.precio}</p>

                    </div>
                    <div class='col'>
                        {
                            Lista.lista.includes(props.p) ? <a className='deleteBtn-mini' onClick={() => Lista.eliminar_item(props.index)} >Eliminar </a> : <a className='btn-style-mini' onClick={() => Lista.agregar_item(props.p)}>Agregar al carrito</a>
                        }
                    </div>
                </div>
            </div>
            <div className="card-mini-body">


            </div>
        </div>

    );
}