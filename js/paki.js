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
let images = [];
images["Gyarados"] = "img/gyaradoss.png";
images["Pikachu"] = "img/pikachuu.png";
images["Charizard"] = "img/charizard.png";
images["Bulbasaur"] = "img/bulbasaurr.png";
images["Squirtle"] = "img/squirtle.png";
images["Pidgeotto"] = "img/pidgeotto.png";

let gyarados = new Pakiman("Gyarados", 100, "Agua", 60, 40);
let pikachu = new Pakiman("Pikachu", 80, "Electrico", 20, 18);
let charizard = new Pakiman("Charizard", 100, "Fuego", 50, 35);
let squirtle = new Pakiman("Squirtle", 100, "Agua", 50, 35);
let pidgeotto = new Pakiman("Pidgeotto", 100, "Volador", 50, 35);

let coleccion = [];
coleccion.push(gyarados)
coleccion.push(pikachu)
coleccion.push(charizard)
coleccion.push(squirtle)
coleccion.push(pidgeotto)
coleccion.push(new Pakiman("Bulbasaur", 90, "Planta", 40, 30))

//poner en la tabla
let poke1 = document.getElementById("nombrepoke1");
let infopoke1 = document.getElementById("infopoke1");
let poke2 = document.getElementById("nombrepoke2");
let infopoke2 = document.getElementById("infopoke2");
let poke3 = document.getElementById("nombrepoke3");
let infopoke3 = document.getElementById("infopoke3");
let poke4 = document.getElementById("nombrepoke4");
let infopoke4 = document.getElementById("infopoke4");
let poke5 = document.getElementById("nombrepoke5");
let infopoke5 = document.getElementById("infopoke5");
let poke6 = document.getElementById("nombrepoke6");
let infopoke6 = document.getElementById("infopoke6");
console.log(poke1);

let coleccionInfo = [];
coleccionInfo.push(infopoke1)
coleccionInfo.push(infopoke2)
coleccionInfo.push(infopoke3)
coleccionInfo.push(infopoke4)
coleccionInfo.push(infopoke5)
coleccionInfo.push(infopoke6)

let coleccionImages = [];
coleccionImages.push(poke1)
coleccionImages.push(poke2)
coleccionImages.push(poke3)
coleccionImages.push(poke4)
coleccionImages.push(poke5)
coleccionImages.push(poke6)

fillTableCol();
function fillTableCol() {
    for(var i = 0; i < coleccion.length; i++){
        let poke = coleccionImages[i];
        let infopoke = coleccionInfo[i];
        infopoke.innerHTML = coleccion[i].showInfo();
        poke.appendChild(coleccion[i].showImage());
        poke.appendChild(coleccion[i].showStamina());
    }
}

