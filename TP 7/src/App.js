import './App.css';

import Listado from './components/Listado';
import CrearCita from './components/CrearCIta';
const listado_citas = []

function App() {
  console.log(listado_citas)
  return (
    <div>
      <h1>
        Administrador de pacientes
      </h1>
      <div className='container'>
        <div className='row'>
          <CrearCita citas={listado_citas}></CrearCita>
          <Listado citas={listado_citas}></Listado>
        </div>
      </div>
    </div>
  );
}

export default App;
