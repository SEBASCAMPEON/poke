
class Pakiman {
    constructor(nombre, vida, tipo, atk, def) {
        this.stamina = new Image();
        this.imagen = new Image();
        this.tipo = tipo;
        this.nombre = nombre;
        this.vida = vida;
        this.atk = atk;
        this.def = def;

        this.imagen.src = images[this.nombre];
        this.imagen.style.height = "100px";
        this.imagen.className = "imagenpokemon";

        this.stamina.src = "img/stamina.png";
        this.stamina.style.height = "20px";
        this.stamina.style.display ="block";
    }
    //dentro de las clases no es necesario escribir function
    talk() {
        console.log(this.nombre);
    }

    showImage(){
        return this.imagen
    }

    showStamina(){
        return this.stamina;
    }

    showInfo() {
        let text = "<div class='text_div_info' style='display:block; margin-right: 10px; padding:5px;'>" + 
        "<div style='display:inline-block; margin-right: 10px; padding:5px;'>" +
        "<br>" +
        "<br><p><strong>" + this.nombre + "</strong></p>" +
        "<p>St: " + this.vida + "</p>" +
        "<p>Atk: " + this.atk + "</p>" +
        "<p>Def: " + this.atk + "</p>" +
        "<p>Tp: " + this.tipo + "</p>" +
        "</div>" +
        "</div>";
        return text;
    }
}