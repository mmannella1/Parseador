import React,{Fragment} from 'react';
import {Cortar} from './Helper';
import styled from '@emotion/styled';
import shortid from "shortid";


const Label = styled.label`
    flex: 0 0 100px;
    color: #FFFFFF;
   /* background-color:black;*/
    padding: 5px;
    display: -webkit-inline-box;

    
`;

const TablaHtml = styled.table`
 
  background: -webkit-linear-gradient(to right, #8d77c9, #0702589d);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #0e0720be,  #0e0720be, #0e0a69d5); 
  font-family: Arial, Helvetica, sans-serif;
  display: table;
  margin: auto;
  border-style: inset;
`
const Throw = styled.th`
   border-style: inset;
   color:red;
` 

const Tdrow = styled.td`
border-style: inset;
background: ${props => ( (props.value === 0 ) ? 'linear-gradient(to right, #0e0720be,  #0e0720be, #0e0a69d5)'
                                              : 'linear-gradient(to left, #0e0720be,  #0e0720be, #0e0a69d5)'  )};
color:#FFF;
  align-items: center;
  justify-content: center;

`

const Trow = styled.tr`
  overflow-y: scroll;
  scroll-behavior: smooth;
` 

const Resultado = ({Resumen, Mostrar}) => {

let Campos=0;
//Evaluo si mustro salida
if (Mostrar) {

    
     const ResultadoTrama = Cortar({Resumen})
     Campos = ResultadoTrama.length
      
     return (
        <Fragment>
        <Label>La trama Contine {Campos} Campos</Label>
       <TablaHtml> 
       <thead >
          <tr>
            <Throw>Id Campo</Throw>  
            <Throw>Contenido</Throw>  
            <Throw>Largo</Throw> 
         </tr>
       </thead>

       <tbody >
            
       {ResultadoTrama.map((campo, index) =>
         
           <Trow key={shortid.generate()}>
               <Tdrow value={(index  % 2)}>{index + 1}</Tdrow>
               <Tdrow value={(index  % 2)}>{campo}</Tdrow>
               <Tdrow value={(index  % 2)}>{campo.length}</Tdrow> 
            </Trow>
          )}
        
        </tbody>
        </TablaHtml>
    </Fragment>) 
     
         

    } else {
        return null
    }
}
 
export default Resultado;
