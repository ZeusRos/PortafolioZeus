let partidas = 0;
let ganadas = 0;
let empatadas = 0;
let perdidas = 0;

function jugar(jugador) {
    const opciones = ["piedra", "papel", "tijera"];
    const maquina = opciones[Math.floor(Math.random() * opciones.length)];
    let mensaje;

    partidas++;

    if (jugador === maquina) {
        mensaje = "Empate";
        empatadas++;
    } else if (
        (jugador === "piedra" && maquina === "tijera") ||
        (jugador === "papel" && maquina === "piedra") ||
        (jugador === "tijera" && maquina === "papel")
    ) {
        mensaje = "Ganaste";
        ganadas++;
    } else {
        mensaje = "Perdiste";
        perdidas++;
    }

    document.getElementById("jugada-jugador").textContent = "Tu jugada: " + jugador;
    document.getElementById("jugada-maquina").textContent = "La jugada de la máquina: " + maquina;
    document.getElementById("mensaje").textContent = mensaje + " | Partidas: " + partidas + " (G: " + ganadas + " - E: " + empatadas + " - P: " + perdidas + ")";
}