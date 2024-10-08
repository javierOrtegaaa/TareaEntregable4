class Alumno {
    constructor(nombre, edad, curso) {
        this.nombre = nombre;
        this.edad = edad;
        this.curso = curso;
    }
}

const alumnos = [
    new Alumno('Carlos Pérez', 20, '1º DAW'),
    new Alumno('María Gómez', 21, '1º DAW'),
    new Alumno('Juan López', 22, '1º DAW'),
    new Alumno('Lucía Martínez', 20, '1º DAW'),
    new Alumno('Sofía Sánchez', 21, '1º DAW'),
    new Alumno('Alejandro Torres', 22, '1º DAW'),
    new Alumno('Laura Díaz', 20, '1º DAW'),
    new Alumno('Miguel Fernández', 21, '1º DAW'),
    new Alumno('Daniela García', 22, '1º DAW'),
    new Alumno('Pablo Ruiz', 20, '1º DAW'),
    new Alumno('Carmen Jiménez', 21, '1º DAW'),
    new Alumno('Andrés Ortega', 22, '1º DAW'),
    new Alumno('Clara Moreno', 20, '1º DAW'),
    new Alumno('Raúl Ramírez', 21, '1º DAW'),
    new Alumno('Isabel Hernández', 22, '1º DAW'),
    new Alumno('Javier Medina', 20, '1º DAW'),
    new Alumno('Patricia Castro', 21, '1º DAW'),
    new Alumno('Fernando Romero', 22, '1º DAW'),
    new Alumno('Paula Alonso', 20, '1º DAW'),
    new Alumno('Iván Gil', 21, '1º DAW'),
    new Alumno('Alicia Serrano', 22, '1º DAW'),
    new Alumno('José Moya', 20, '1º DAW')
];

let alumnosGenerados = [];
const container = document.getElementById('container');
const botonGenerar = document.querySelector('.btn-generar');

function generarAlumno() {
    if (alumnosGenerados.length >= alumnos.length) {
        alert('Ya se han generado todos los alumnos.');
        return;
    }

    let indiceAleatorio;
    do {
        indiceAleatorio = Math.floor(Math.random() * alumnos.length);
    } while (alumnosGenerados.includes(indiceAleatorio));

    const alumno = alumnos[indiceAleatorio];
    alumnosGenerados.push(indiceAleatorio);

    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <h3>${alumno.nombre}</h3>
        <p>Edad: ${alumno.edad}</p>
        <p>Curso: ${alumno.curso}</p>
        <button class="btn-borrar">Borrar</button>
    `;

 
    card.querySelector('.btn-borrar').addEventListener('click', function() {
        card.remove();
        // Eliminar al alumno de la lista de generados
        const index = alumnosGenerados.indexOf(indiceAleatorio);
        if (index > -1) {
            alumnosGenerados.splice(index, 1);
        }
    });

    container.appendChild(card);
}


botonGenerar.addEventListener('click', generarAlumno);
