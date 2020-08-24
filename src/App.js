import React, {useState} from 'react';
import './App.css';
//import 'bulma/css/bulma.css';
import Formulario from './Componentes/Formulario';
import Resultado from './Componentes/Resultado';
import Spinner from './Componentes/Spinner';

function App() {

  //contiene la estructura de datos  
  const [ Resumen, guardarResumen ] = useState({
    separador:'',
    trama:''
  });

    //contiene la estructura de datos  
    const [ Mostrar, guardarMostrar ] = useState(false);
    const [ MostrarSp, guardarSpinner ] = useState(false);




  return (
    <div className="App">
        <div>
          <Formulario
            guardarResumen={guardarResumen}
            guardarMostrar={guardarMostrar}
            guardarSpinner={guardarSpinner}/>
        </div>
      <div>
      { MostrarSp ? <Spinner /> : null }
          {(Mostrar )?  
          <Resultado
            Resumen={Resumen}
            Mostrar={Mostrar}/>  
            : null}
          
      </div>
    </div>
  );
}

export default App;

