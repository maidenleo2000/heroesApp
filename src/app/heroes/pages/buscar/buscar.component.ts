import { Component } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent {

  constructor(private heroesService:HeroesService){}
  termino:string = '';
  heroes: Heroe[] = [];
  heroeSeleccionado: Heroe | undefined;


  buscando(){
    
    this.heroesService.getSugerencias(this.termino.trim()) //limpio espacios en blanco en la busqueda
    .subscribe(heroes => this.heroes = heroes);
    
  }

  opcionSeleccionada(event: MatAutocompleteSelectedEvent){
    if(!event.option.value){
      this.heroeSeleccionado=undefined
      console.log('no hay valor')
      return
    }

    const heroe: Heroe = event.option.value;
    console.log(heroe);
    this.termino = heroe.superhero; //esto es paca que aparezca el heroe en el input una vez seleccionado de la lista

    this.heroesService.getHeroePorId(heroe.id!) 
    .subscribe(heroe => this.heroeSeleccionado=heroe);


  }

}
