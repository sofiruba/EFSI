export default function Estadisticas ({personas}){
    let personas_mayores = personas.filter(p => p.edad < 35)
    let persona_mayor = personas.filter(p=> p.edad > personas)
    return(
        <div></div>
    )
}