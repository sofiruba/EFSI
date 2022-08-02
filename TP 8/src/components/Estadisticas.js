import PersonaCard from "./PersonaCard";

export default function Estadisticas({ personas }) {
    let edades = personas.map(p => p.edad)

    let edad_maxima = Math.max(...edades)
    let edad_menor = Math.min(...edades)
    let persona_mayor = personas.filter(p => p.edad === edad_maxima)
    let persona_menor = personas.filter(p => p.edad === edad_menor)
    let personas_mayores = personas.filter(p => p.edad > 35)
    console.log(personas_mayores)
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