import React from 'react';
import styled from '@emotion/styled';

const ContenedorHeader = styled.header`
/*background-color: #26c6DA;*/
padding:10px;
width:70%;
font-weight:bold;
color:#FFFFFF;
margin:auto;

`;

const Header = ({titulo}) => {
    return (
        <ContenedorHeader>
           <h1>{titulo}</h1>
        </ContenedorHeader>
      );
}
 

export default Header;
