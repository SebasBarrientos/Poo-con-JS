// Construye las siguientes clases:

// Warrior:

// constructor(life, power): Establece el valor de las propiedades life y power

// attack: Devuelve el valor de power del guerrero

// defend(damage): resta el valor del parámetro recibido damage al valor de la propiedad life. Después, imprime el valor de la vida restante.

class Warrior {
    constructor(life, power) {
        this.life = life
        this.power = power
    }
    attack() {
        return this.power
    }
    defend(damage) {
        const remainingLife = this.life - damage
        return this.life = remainingLife
    }
}
const warrior1 = new Warrior(100, 40);



// Maya: extiende de la clase Warrior

// constructor: Aquí establecemos los valores para el maya, que no hay que olvidar que es un guerrero.

// drinkColaCao: Suma 10 al poder.

class Maya extends Warrior {
    constructor(life, power) {
        super(life, power)
    }
    attack() {
        return this.power
    }
    defend(damage) {
        const remainingLife = this.life - damage
        return "Maya se defendio y le quedan " + (this.life = remainingLife) + " vida"
    }
    drinkColaCao() {
        const newLife = this.life + 10
        return "Maya tomo Colacao y su vida aumento! Ahora tiene " + (this.life = newLife)
    }
}
const maya1 = new Maya(100, 40);




// Aztec: extiende de la clase Warrior

// constructor: Aquí establecemos los valores para el azteca, que no hay que olvidar que es un guerrero.

// drinkNesquik: Suma 10 a la vida.

class Aztec extends Warrior {
    constructor(life, power) {
        super(life, power)
    }
    attack() {
        return this.power
    }
    defend(damage) {
        const remainingLife = this.life - damage
        return "Azteca se defendio y le quedan " + (this.life = remainingLife) + " vida"
    }
    drinkNesquik() {
        const newLife = this.life + 10
        return "Azteca tomo Colacao y su vida aumento! Ahora tiene " + (this.life = newLife)
    }
}
const aztec1 = new Aztec(100, 40);
console.log(aztec1.life);
console.log(aztec1.life);
// Realiza la siguiente cadena de intercambio de golpes.

// Azteca bebe nesquik
console.log(aztec1.drinkNesquik());

// Maya bebe Cola Cao
console.log(maya1.drinkColaCao());

// Maya ataca a azteca. Azteca defiende.
console.log(aztec1.defend(maya1.power));

// Azteca ataca a maya. Maya defiende.
console.log(maya1.defend(aztec1.power));