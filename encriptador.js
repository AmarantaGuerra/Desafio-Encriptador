//Las "llaves" de encriptación que utilizaremos son las siguientes:
//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

/*Requisitos:

Debe funcionar solo con letras minúsculas
No deben ser utilizados letras con acentos ni caracteres especiales
Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada

La página debe tener campos para
inserción del texto que será encriptado o desencriptado, y el usuario debe poder escoger entre as dos opciones.
El resultado debe ser mostrado en la pantalla.
Extras:

Un botón que copie el texto encriptado/desencriptado para la sección de transferencia, 
o sea que tenga la misma funcionalidad del ctrl+C o de la opción "copiar" del menú de las aplicaciones.*/

let llaves =["enter", "imes", "ai","ober","ufat"];
let vocales =["e","i","a","o","u"];
let n=0;

/*let llaveUno ="enter";
let llaveDos ="imes";
let llaveTres ="ai";
let llaveCuatro ="ober";
let llaveCinco ="ufat";*/
let elementoHTML
let cadenaTexto = new String();



function tomarTexto(){

    cadenaTexto= document.getElementById("mensajeUsuario").value;
    console.log(cadenaTexto); 
   
}

function imprimirTexto(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function encriptar(){

    tomarTexto();
    n=0;
    for(n=0;n<5;n++){
    cadenaTexto = cadenaTexto.replaceAll(vocales[n], llaves[n]);
    console.log(cadenaTexto);
   

    }

    imprimirTexto('p2',` ${cadenaTexto}`);
}

/*function encriptar(){

   tomarTexto();
   cadenaTexto = cadenaTexto.replaceAll("e", llaveUno);

   cadenaTexto = cadenaTexto.replaceAll("i", llaveDos);

   cadenaTexto = cadenaTexto.replaceAll("a", llaveTres);

   cadenaTexto = cadenaTexto.replaceAll("o", llaveCuatro);

   cadenaTexto = cadenaTexto.replaceAll("u", llaveCinco);
   console.log(cadenaTexto);

   imprimirTexto('p',`Mensaje final: ${cadenaTexto}`);
   
}*/

function desencriptar(){

    tomarTexto();
    n=0;
    for(n=0;n<5;n++){
    cadenaTexto = cadenaTexto.replaceAll(llaves[n], vocales[n]);
    console.log(cadenaTexto);
    }

    imprimirTexto('p2',` ${cadenaTexto}`);
}

/*function desencriptar(){

    tomarTexto();
    cadenaTexto = cadenaTexto.replaceAll(llaveUno, "e"); 
 
    cadenaTexto = cadenaTexto.replaceAll(llaveDos, "i");
 
    cadenaTexto = cadenaTexto.replaceAll(llaveTres, "a");
 
    cadenaTexto = cadenaTexto.replaceAll(llaveCuatro, "o");
 
    cadenaTexto = cadenaTexto.replaceAll(llaveCinco,"u");
    console.log(cadenaTexto);

    imprimirTexto('p',`Mensaje final: ${cadenaTexto}`);
 }

 function copiaTexto(){
    cadenaTexto= document.getElementById("nuevaCadena").value;
    
 }*/