import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent {
    nombre :String = 'Spiderman';
    edad   :number = 30;

    funcion () :string{
        return `${this.nombre} - ${this.edad}`;
    };
    //Get trae informacion y set guarda informacion 
    get nombreCapitalizado() :string{
        return this.nombre.toUpperCase();
    };

    cambiarNombre ():void {
        this.nombre = 'Hulk';
    };

    cambiarEdad ():void{
        this.edad = 40;
    }
}