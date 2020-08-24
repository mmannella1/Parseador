import React, {useState, Fragment} from 'react';
import styled from '@emotion/styled';
import Header from '../Componentes/Header';
import Trash from '../Componentes/Trash';
import {BuscarText} from './Helper';


const Label = styled.label`
    flex: 0 0 100px;
    color: #FFFFFF;
   /* background-color:black;*/
    padding: 5px;
    display: -webkit-inline-box;

    
`;
const ButtonBlack = styled.button`
    background-color: black;
    border-color: #3a3679;
    color: white;

&:hover {
  background-color: grey;
  border-color: white;
  color: white;
}

` 

 

const Error = styled.div`
    background: linear-gradient(to right, red,   #0e0a69d5); 
    color: white;
    padding: 10px;
    width:24%;
    text-align: center;
    margin: auto;
    margin-bottom: 2rem;
`;
const Select = styled.select`
    /*color: revert;*/
    border-block-end-style: revert;
    border-radius: 7px;
    padding: 1px;
   /* border-color: darkgray;*/
   background: linear-gradient(to right, #0e0720be,  #2c186457, #0e0a69d5); 
    background-color: darkslateblue;
    color: floralwhite;
    text-align-last:center;
`;


const Parrafo = styled.p`
    display: contents;
    padding: 10rem;
    color:#5d97ff;;

`
const ParrafoTop = styled.p`
    display: flex;
    padding-bottom: 0px;
    margin:0px;

    color:#5d97ff;;

`
const TextoArea = styled.textarea`
     margin: 0px;
    width: 759px;
    height: 123px;
    font-size: smaller;
    font-family: monospace;
`;
const Formulario = ({guardarResumen, guardarMostrar, guardarSpinner}) => {
  
  //error de carga de datos  
  const [ error, guardarError ] = useState(false);
  const [ trash, guardarTrash ] = useState(false);
  //mostrar Buscar
  const [ Buscar, guardarbuscarText ] = useState({
          buscarText:false,
          cantBusqueda:0

  });

const {buscarText, cantBusqueda} = Buscar
  //contiene la estructura de datos  
  const [ datos, guardarDatos ] = useState({
    separador: '',
    trama: '',
    Input:''
    
});
//extraigo los datos para tratarlos en el form  
const { separador, trama, Input } = datos;
const[Largo, guardarLargo]=useState(0);



//extrago datos de los componentes
const obtenerInformacion = e => {
    console.log(e.target.value)
    guardarDatos({
        ...datos,
        [e.target.name] : e.target.value
        
    })
    
}

const LimpiarObj = e => {
    
    
    guardarTrash(true)
    setTimeout(() => {
        // Elimina el spinner       
        guardarTrash(false)
        guardarDatos({
            ...datos,
            separador:'',
            trama:'',
            Input:''
        })
    
        guardarbuscarText({
            ...Buscar,
            buscarText:false,
            cantBusqueda:0
        })
        guardarLargo(0);
        guardarMostrar(false);
        guardarError(false);
        },1000)
   
   
   

}
//submite 
  const _handleSubmit = (e) => {
     e.preventDefault();
     if(separador.trim() === '' || trama.trim() === '') {
    
        guardarError(true);
        guardarMostrar(false)
    

        return;
      } else {
       
        guardarError(false);
        guardarSpinner(true)
     
         setTimeout(() => {
            // Elimina el spinner       
            guardarSpinner(false)
            // pasa la información al componente principal
            guardarResumen({
                datos
             });     
             guardarMostrar(true)
             guardarLargo(trama.length)
            },1000)
           
        
             }
}

const buscarDato = e => {
    console.log("Buscar" + Input)
    if (Input !== "") { 
    guardarbuscarText({
        ...Buscar,
       cantBusqueda:BuscarText({trama}, {Input}),
       buscarText:true
    })
    }else {
    guardarError(true);
    console.log("Buscar vacio")
}
   
}

    return (
        <Fragment>
            <ParrafoTop>MartinLemos 2020</ParrafoTop>
             <form onSubmit={_handleSubmit}>
               <div>
               <Header titulo="Parseador de tramas"/>
               
               { error ? <Error>Tenes que ingresar datos para procesar</Error>  : null }   
               <Parrafo>Recorda que solo puede parsear una trama x vez</Parrafo> 
              
               <div>           
              
               <Label>Ingresa el caracter separador</Label>
               <Select
                name="separador"
                value={separador}
                onChange={obtenerInformacion}
               
               >  
                   <option value="">--Seleccione--</option>
                   <option value="õ">õ</option>
                   <option value="§">§</option>
                   <option value="£">£</option>
                   <option value="#">#</option>
                   <option value="|">|</option>
                   <option value=";">;</option>
                   <option value=",">,</option>
             
            
               </Select>
             
               </div>
               <div>
               <TextoArea 
                    name="trama"
                    value={trama}
                    onChange={obtenerInformacion}
                    placeholder="Pega la trama o txt a trabajar">{trama}</TextoArea>
               </div>
               <div>
                   <ButtonBlack type="submit">Convertir</ButtonBlack>
                  
                    <ButtonBlack 
                        onClick={LimpiarObj}
                        type="button">Limpiar</ButtonBlack>
                    <ButtonBlack 
                        onClick={buscarDato}
                        type="button"
                        >Buscar</ButtonBlack>
                   <input type="text" 
                        onChange={obtenerInformacion}
                        name="Input"
                        placeholder="ingresa el texto a buscar"
                        value={Input}/>   
                   <div>
                   {(trash) ? <Trash/> : null} 
                       
                        {(!buscarText) ? null :
                            <Label>El texto aparece {cantBusqueda} veces</Label>
                        }
                       
                   </div>
               
               </div>
             
               {(Largo === 0) ? null :
               <Label>Tamaño de la trama {Largo} caracteres</Label>
               }
               </div>
            </form>
            
            </Fragment>
      );
}
 
export default Formulario;

/*
 <button 
                     onClick={BuscarDato}
                      type="button">Buscar</button>


 <button 
                   
                   onClick={LimpiarObj}
                   type="button">Limpiar</button>
                      */