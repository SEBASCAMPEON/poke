//trabajo con arrays, clases y objetos
/*
**Resumen de la clase: ** En Javascript 
existe la programación orientada a objetos 
(OOP en sus siglas en inglés), la cual se crea a
 partir de una clase, donde se define las características 
 del objeto o atributos y sus capacidades o métodos.

Así como otros lenguajes, este concepto conlleva lo siguiente:

Objeto
Una instancia de una Clase.

Propiedad
Una característica del Objeto, como el color.

Método
Una capacidad del Objeto, como caminar.

Constructor
Es un método llamado en el momento de la creación de instancias.

Herencia
Una Clase puede heredar características de otra Clase.

Encapsulamiento
Una Clase sólo define las características del Objeto, un Método sólo define cómo se ejecuta el Método.

Abstracción
La conjunción de herencia compleja, métodos y propiedades 
que un objeto debe ser capaz de simular en un modelo de la realidad.

Polimorfismo
Diferentes Clases podrían definir el mismo método o propiedad.
*/
let columnastabla = document.getElementById("columnstable");


let images = [];
images["Gyarados"] = "img/Gyarados.png";
images["Pikachu"] = "img/Pikachu.png";
images["Charizard"] = "img/Charizard.png";
images["Bulbasaur"] = "img/bulbasaur.png";


let gyarados = new Pakiman("Gyarados", 100, "Agua", 60, 40);
let pikachu = new Pakiman("Pikachu", 80, "Electrico", 20, 18);
let charizard = new Pakiman("Charizard", 100, "Fuego", 50, 35);

let coleccion = [];
coleccion.push(gyarados)
coleccion.push(pikachu)
coleccion.push(charizard)
coleccion.push(new Pakiman("Bulbasaur", 90, "Planta", 40, 30))

fillTableCol();
function fillTableCol() {
    for (let pakimones of coleccion) {
        console.log(pakimones);
        pakimones.showInfo();
    }
}