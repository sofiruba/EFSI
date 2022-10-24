import Navbar from '../components/navbar'
import Footers from '../components/footer'
import FormContacto from '../components/formContacto'
export default function Contacto() {
    return (
        <div className="App">
            <Navbar></Navbar>
            <div className='Container'>
                <FormContacto></FormContacto>
            </div>
            <Footers></Footers>
        </div>
    )
}