import Card from "./card"
export default function ListaProductos(){

    return(
        <div>
            <div style={{marginTop: 1.5}}>
                    <h3>Productos destacados</h3>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">     
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            </div>
        </div>
    )
}