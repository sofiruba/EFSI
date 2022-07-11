import Cita from "./Citas"

export default function Listado({ citas }) {
    console.log(citas)
    function eliminar (id)  {
        citas.splice(id)

    }
    console.log(citas)
    return (
        <div className='one-half column'>
            <h2>Administra tus citas</h2>
            <div>
                {
                    citas.map((cita) => (
                        <Cita key={parseInt(cita.id)} props={{cita, eliminar}} ></Cita>
                    ))
                }
            </div>

        </div>
    )
}
