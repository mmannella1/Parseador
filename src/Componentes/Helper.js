

export function Cortar ({Resumen}) {

console.log("Resumen helper" + Resumen)

const {trama, separador} = Resumen.datos;
var indice;

//divido la trama en 2 partes antes de DH(0) y despues de DH (1)
const separa = trama.split('DH')

if (separa.length === 1) {
    indice = 0
}else {
    indice = 1
}


const separadorAux = separador +']'


//divido la trama en 2 partes antes de ](0) y despues de ] (1)
const ultimoCaracter = separa[indice].split(separadorAux)


if (ultimoCaracter.length === 2 || 1) {
    indice = 0
}else {
    indice = 1
}

//me quedo con la trama corregida y la convierte en un array por el caracter separador
const miArray = ultimoCaracter[indice].substr(1).split(separador)


    return miArray;
}


export function BuscarText ({trama}, {Input}) {

//const Salida = trama.indexOf(Input,0)
let cuenta = 0;
var posicion = trama.indexOf(Input);
while ( posicion !== -1 ) {
   cuenta++;
   posicion = trama.indexOf(Input,posicion+1);
}

console.log("veces que aparece" + cuenta)
return cuenta
}