import PersonaCard from "./PersonaCard";

export default function Estadisticas({ personas}) {
    let personas_mayores = personas.filter(p => p.edad > 35)
    let persona_mayor = personas.filter(p => p.edad = Math.max(...personas.map(p=> p.edad)))
    console.log(persona_mayor)

    return (
        <div>
            <div>
                <p>hola</p>
                {personas_mayores.map((p) => (
                    <PersonaCard key={parseInt(p.id)} persona={p}></PersonaCard>
                    ))
                }
            </div>
            <div>
                {persona_mayor.map(p => (
                    <PersonaCard persona={p}></PersonaCard>
                    ))
                }
            </div>
            <div>
                {persona_menor.map(p => (
                    <PersonaCard persona={p}></PersonaCard>
                    ))
                }
            </div>

        </div>
    )
}