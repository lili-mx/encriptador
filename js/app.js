
const letterA = "a";
const letterE = "e";
const letterI = "i";
const letterO = "o";
const letterU = "u";

const returnLetterA = "ai";
const returnLetterE = "enter";
const returnLetterI = "imes";
const returnLetterO = "ober";
const returnLetterU = "ufat";

const regex = /^[a-z]+$/;
const cadena = "ejemplo";


function allReplace(text, textChg) {
    for (const x in textChg) {
      text = text.replace(new RegExp(x, 'g'), textChg[x]);
    }
    return text;
};

function encriptar (){
    const textoEncriptar = document.getElementById("textarea_encriptar").value;
    const newText = allReplace( textoEncriptar, { 'a': 'ai', 'e': 'enter', 'i': 'imes', 'o': 'ober', 'u': 'ufat' } );
    showText(newText);
};

function showText(msg) {
    document.getElementById("div_noMessage").style.display = 'none';
    const encriptText = document.getElementById("div_encript_text").innerText = msg;

};

function limpiar () {
    document.getElementById("div_noMessage").style.display = 'block';
    document.getElementById("textarea_encriptar").value = "";
    document.getElementById("div_encript_text").innerHTML = "";
}

function desencriptar (){
    const textoEncriptar = document.getElementById("textarea_encriptar").value;
    const newText = allReplace( textoEncriptar, { 'ai': 'a', 'enter': 'e', 'imes': 'i', 'ober': 'o', 'ufat': 'u' } );
    showText(newText);
};


function validateRegex(){
    const cadena = document.getElementById("textarea_encriptar").value;
    if (regex.test(cadena)) {
        console.log("Caracteres válidos");
    } else {
        console.log("Carcateres nov válidos");
    }
}
