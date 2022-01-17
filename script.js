var carrera = ["Lucía", "Roberto", "María", "Jesús", "Andrea", "José"];
var contador = 0;

function mostrarInformacion() {
    contador++;
    console.log("Ronda " + contador);
    carrera.forEach((element, index) => {
        console.log("Posición " + (index+1) + ": " + element);
    });
}

mostrarInformacion();

var aux = carrera[4];
carrera[4] = carrera[3];
carrera[3] = carrera[2];
carrera[2] = aux;

mostrarInformacion();

carrera.pop();

mostrarInformacion();

carrera.shift();
carrera.unshift("Armando");
carrera.unshift("Fernanda");
carrera.unshift("Cristóbal");
carrera.unshift("Lucía");

mostrarInformacion();

carrera.unshift("Federico");

mostrarInformacion();