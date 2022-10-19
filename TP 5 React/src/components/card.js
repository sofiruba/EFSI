import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css'

export default function Card({props}) {
    return (
        <div className="col">
            <div className="card ">
                <img src={props.foto} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.nombre}</h5>
                    <p className="card-text">{props.descripcion}</p>
                </div>
            </div>
        </div>
    );
}