
function mostrarDireccioRed() {
    document.getElementById("ip").textContent = "192.168.1.0";
}    


function mostrarPuertaEnlace() {
    document.getElementById("ip").textContent = "192.168.1.0";
}    

function generarIP() {

    let numero_aleatorio 
    numero_aleatorio = Math.random();
    numero_aleatorio = numero_aleatorio * 256;
    numero_aleatorio = Math.floor(numero_aleatorio);
    numero_aletarorio = numero_aleatorio + 2;
    document.getElementById("ip").textContent = "192.168.1." + numero_aletarorio;
}    

function mostrarBroadcast() {
    document.getElementById("ip").textContent = "192.168.1.255";
}    

function mostrarMascara() {
    document.getElementById("ip").textContent = "255.255.255.0";
}    