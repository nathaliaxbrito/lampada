var lamp = window.document.getElementById("lampada_apagada")

function quebrada(){
    return lamp.src.indexOf("quebrada") > -1
}

function ligar(){
    if(!quebrada()){
    lamp.src = "lampada_acesa.svg"
}
}

function desligar(){
    if (!quebrada()){
    lamp.src = "lampada_apagada.svg"
}
}

lamp.addEventListener("click", quebrar)
function quebrar(){
    lamp.src = "lampada_quebrada.svg"
}