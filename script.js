//selecionando elementos
let areaTexto = document.querySelector(".areaTexto");
let areaResultado = document.querySelector(".areaResultado");



//função encriptar
function encriptar(){

    var texto = areaTexto.value;
    var textoEncrip =texto.replace(/a/gi, "ar").replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/o/gi, "ober").replace(/u/gi, "ufat");

    areaResultado.innerHTML = textoEncrip;

}

//função desencriptar
function desencriptar(){

    var texto = areaTexto.value;
    var textoDescrip = texto.replace(/ar/gi, "a").replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ober/gi, "o").replace(/ufat/gi, "u");

    areaResultado.innerHTML = textoDescrip;

}

//função copiar texto
function copiar(){
    var copiarTxt = areaResultado.value;
    navigator.clipboard.writeText(copiarTxt);
   
}












// As "chaves" de criptografia que utilizaremos são:
// "a" é convertida para "ai"
// "e" é convertida para "enter"
// "i" é convertida para "imes"
// "o" é convertida para "ober"
// "u" é convertida para "ufat"
