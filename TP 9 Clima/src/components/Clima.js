import { useContext, useEffect } from 'react'
import axios from 'axios'
import { ClimaContext } from '../App'

export default function Clima({props}) {
    const Clima = useContext(ClimaContext)
    const q =  `${Clima.ciudad},${Clima.pais}`
    const getClima = () => {
        return axios.get('http://api.openweathermap.org/data/2.5/weather', {params:{q : q, APPID: '467eb2e2a1738c82e813a30610d7c354' }})
        .then(res => {
            let temp = res.data.main
            let new_clima = {
                pais: Clima.pais,
                ciudad: Clima.ciudad,
                temp: temp
            }
            props.setClima(new_clima)
        })
    }

    useEffect(()=> {
        getClima()
    })
    return (
        <div className="col m6 s12">
            <div className="card-panel white col s12">
                <div className="black-text">
                    <h2>El clima de {Clima.ciudad} es:</h2>
                    <p className="temperatura">
                        <span>{parseFloat(Clima.temp.temp - 273.15).toFixed(2)} &#x2103; </span>
                    </p>
                    <p>
                        Temperatura Maxima
                        <span>{parseFloat(Clima.temp.temp_max - 273.15).toFixed(2)} &#x2103; </span>
                    </p>
                    <p>
                        Temperatura Minima 
                         <span>{parseFloat(Clima.temp.temp_min - 273.15).toFixed(2)} &#x2103;   </span>
                    </p>
                </div>
            </div>
        </div>
    )
}