// Crear la clase Persona, con propiedades nombre, edad y género, y el método obtDetalles(), que muestra por pantalla las propiedades de la persona.

class Personas {
  constructor(nombre, edad, genero) {
    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero;
    this.obtDetalles;
  }
  obtDetalles() {
    return this.nombre + " es mi nombre y tengo " + this.edad + ". Soy " + this.genero
  }
}


const persona1 = new Personas('Mercedes', 29, "Mujer");

console.log(persona1.obtDetalles());
// Crear la clase Estudiante, que hereda de Persona, e incluye las propiedades curso y grupo y el método registrar(), que muestre por pantalla el resultado.
class Estudiante extends Personas {
  constructor(nombre, edad, genero, curso, grupo) {
    super(nombre, edad, genero)
    this.curso = curso;
    this.grupo = grupo;
  }
  obtDetalles() { return this.nombre + " es mi nombre y tengo " + this.edad + ". Soy " + this.genero + " y alumna del curso "+this.curso + " "+ this.grupo}
};

const estudiante1 = new Estudiante('Mercedes', 29, "Mujer", "Full Stack", "Full Time");
console.log(estudiante1.obtDetalles());

// Crear la clase Profesor, que hereda de Persona, e incluye las propiedades asignatura y nivel y el método asignar(), que muestre por pantalla el resultado.
class Profesor extends Personas {
  constructor(nombre, edad, genero, asignatura, nivel) {
    super(nombre, edad, genero)
    this.asignatura = asignatura;
    this.nivel = nivel;
  }
  obtDetalles() { return this.nombre + " es mi nombre y tengo " + this.edad + ". Soy " + this.genero + " y profesora del curso "+this.asignatura + " la dificultad del mismo es "+ this.nivel}
};

const Profesor1 = new Profesor('Mercedes', 29, "Mujer", "Full Stack", "alta");
console.log(Profesor1.obtDetalles());