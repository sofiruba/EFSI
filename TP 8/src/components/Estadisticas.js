import PersonaCard from "./PersonaCard";

export default function Estadisticas({ personas }) {
    let edades = personas.map(p => p.edad)

    let edad_maxima = Math.max(...edades)
    let edad_menor = Math.min(...edades)
    let persona_mayor = personas.filter(p => p.edad == edad_maxima)
    let persona_menor = personas.filter(p => p.edad == edad_menor)
    let personas_mayores = personas.filter(p => p.edad > 35)

    return (
        <div className="content">
            <div>
                <h2>Personas mayores a 35</h2>
                <div className="estadistica">
                    {personas_mayores.map((p) => (
                        <PersonaCard key={parseInt(p.id)} persona={p}></PersonaCard>
                    ))}
                </div>
            </div>
            <div>
                <h2>Persona mayor</h2>
                <div className="estadistica ">
                    {persona_mayor.map(p => (
                        <PersonaCard key={parseInt(p.id)} persona={p}></PersonaCard>
                    ))
                    }
                </div>
            </div>
            <div>
                <h2>Persona menor</h2>
                <div className="estadistica " >
                    {persona_menor.map(p => (
                        <PersonaCard key={parseInt(p.id)} persona={p}></PersonaCard>
                    ))
                    }
                </div>
            </div>
        </div>
    )
}