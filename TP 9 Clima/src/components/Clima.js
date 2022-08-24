import { useContext } from 'react'
import { ClimaContext } from '../App'

export default function Clima() {
    const Clima = useContext(ClimaContext)
    return (
        <div className="col m6 s12">
            <div className="card-panel white col s12">
                <div className="black-text">
                    <h2>El clima de {Clima.ciudad} es:</h2>
                    <p className="temperatura">
                        {Clima.temperatura} <span> &#x2103; </span>
                    </p>
                    <p>
                        Temperatura Maxima
                        {Clima.tempMax}<span> &#x2103; </span>
                    </p>
                    <p>
                        Temperatura Minima
                        {Clima.tempMin} <span> &#x2103; </span>
                    </p>
                </div>
            </div>
        </div>
    )
}