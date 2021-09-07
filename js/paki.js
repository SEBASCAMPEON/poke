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
/*
let sounds = [];
sounds["Gyarados"] = "sounds/gyaradoss.mp3";
sounds["Pikachu"] = "sounds/pikachuu.mp3";
sounds["Charizard"] = "sounds/charizard.mp3";
sounds["Bulbasaur"] = "sounds/bulbasaurr.mp3";
sounds["Squirtle"] = "sounds/squirtle.mp3";
sounds["Pidgeotto"] = "sounds/pidgeotto.mp3";
*/
//Reproducir musica de fondo
const playSound = function() {
    document.getElementById('audio').play();
    document.removeEventListener('click', playSound);
}
let pikarepor = document.getElementById("pikarepro");
pikarepor.addEventListener('click', playSound);

let images = [];
images["Gyarados"] = "img/gyaradoss.png";
images["Pikachu"] = "img/pikachuu.png";
images["Charizard"] = "img/charizard.png";
images["Bulbasaur"] = "img/bulbasaurr.png";
images["Squirtle"] = "img/squirtle.png";
images["Pidgeotto"] = "img/pidgeotto.png";

let gyarados = new Pakiman("Gyarados", 100, "Agua", 95, 60, "Tiene una gran cola con la que puede atravesar ríos a contracorriente. También tiene una aleta dorsal con la que puede cortar muchos objetos por la mitad.");
let pikachu = new Pakiman("Pikachu", 92, "Electrico", 80, 30, "Cuanto más potente es la energía eléctrica que genera este Pokémon, más suaves y elásticas se vuelven las bolsas de sus mejillas.");
let charizard = new Pakiman("Charizard", 100, "Fuego", 120, 70, "Escupe un fuego tan caliente que funde las rocas. Causa incendios forestales sin querer.");
let squirtle = new Pakiman("Squirtle", 85, "Agua", 85, 70, "Cuando retrae su largo cuello en el caparazón, dispara agua a una presión increíble.");
let pidgeotto = new Pakiman("Pidgeotto", 90, "Volador", 90, 35, "Su extraordinaria vitalidad y resistencia le permiten cubrir grandes distancias del territorio que habita en busca de presas.");

let coleccion = [];
coleccion.push(gyarados)
coleccion.push(pikachu)
coleccion.push(charizard)
coleccion.push(squirtle)
coleccion.push(pidgeotto)
coleccion.push(new Pakiman("Bulbasaur", 95, "Planta", 75, 50, "Este Pokémon nace con una semilla en el lomo, que brota con el paso del tiempo."))

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
    for (var i = 0; i < coleccion.length; i++) {
        let poke = coleccionImages[i];
        console.log(poke);
        let infopoke = coleccionInfo[i];
        infopoke.innerHTML = coleccion[i].showInfo();
        poke.appendChild(coleccion[i].showImage());
        poke.appendChild(coleccion[i].showStamina());
    }
}

//Información logic


let infopokemon = document.getElementById("infopokemon");

poke1.addEventListener("click", function(){showPokemon(this)}, false );
poke2.addEventListener("click", function(){showPokemon(this)}, false);
poke3.addEventListener("click", function(){showPokemon(this)}, false);
poke4.addEventListener("click", function(){showPokemon(this)}, false);
poke5.addEventListener("click", function(){showPokemon(this)}, false);
poke6.addEventListener("click", function(){showPokemon(this)}, false);

function showPokemon(param) {
    let infoinner;
    console.log(param)
    switch(param){
        case poke1:
            infoinner = coleccion[0].showDesc();
        break;
        case poke2:
            infoinner = coleccion[1].showDesc();
        break;
        case poke3:
            infoinner = coleccion[2].showDesc();
        break;
        case poke4:
            infoinner = coleccion[3].showDesc();
        break;
        case poke5:
            infoinner = coleccion[4].showDesc();
        break;
        case poke6:
            infoinner = coleccion[5].showDesc();
        break;
        default:
            infoinner = "...";

    }

    infopokemon.innerHTML = infoinner;
}


