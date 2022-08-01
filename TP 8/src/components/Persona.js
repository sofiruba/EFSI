import { useParams } from "react-router-dom";
export default function Persona({personas}) {
    const { id } = useParams();
    let persona = personas.find(p => p.id = id)
    return (
        <div className="persona">
            <p>Nombre:</p>
            <span>{persona.nombre}</span>
            <p>Apellido:</p>
            <span>{persona.apellido}</span>
            <p>Email:</p>
            <span>{persona.email}</span>
            <p>Edad:</p>
            <span>{persona.edad}</span>
           
        </div>
    )
}