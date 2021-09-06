
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
        this.imagen.style.height = "80px";

        this.stamina.src = "img/stamina.png";
        this.stamina.style.height = "20px";
    }
    //dentro de las clases no es necesario escribir function
    talk() {
        console.log(this.nombre);
    }

    showInfo() {
        document.write("<div style='display:block; margin-right: 10px; padding:5px;'>");
        document.body.appendChild(this.imagen);
        document.body.appendChild(this.stamina);
        document.write("</div>");
        document.write("<div style='display:inline-block; margin-right: 10px; padding:5px;'>");
        document.write("<br>");
        document.write("<br><strong>" + this.nombre + "</strong><br />");
        document.write("St: " + this.vida + "<br>");
        document.write("Atk: " + this.atk + "<br/>");
        document.write("Def: " + this.atk + "<br>");
        document.write("</div>");
    }
}