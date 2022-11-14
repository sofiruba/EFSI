import '../css/contactos.style.css'
export default function FormContacto (){
    return(
        <>
        
        <form className='container'>
        <h1>Formulario de contacto</h1>   
            <input type="text" name="nombre" className="u-full-width" placeholder="Nombre"  ></input>
            
            <input type="text" name="Apellido" className="u-full-width" placeholder="Apellido"  ></input>
            
            <input type="text" name="Email" className="u-full-width" placeholder="Email"  ></input>
            <textarea name="textarea" placeholder="Descripcion..."></textarea>
            <input type="submit" value="Submit"/>
        </form>
        </>
    )
}