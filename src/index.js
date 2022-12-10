// 1 es piedra, 2 papel,3 tijera
let jugador = 0;
let pc = 0;

jugador = prompt("elige 1 para piedra, 2 para papel, 3 para tijera");

alert(`elegiste ${jugador}`);

if (jugador == 1) {
  alert(`elegiste piedra`);
} else if (jugador == 2) {
  alert(`elegiste papel`);
} else if (jugador == 3) {
  alert(`elejiste tijera`);
} else {
  alert(`elige un movimiento valido`);
}

// TODO: realizar combate
// COMBATE
