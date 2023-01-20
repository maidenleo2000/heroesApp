import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styles: [`
    mat-card{
      margin-top: 20px;
  }
`
  ]
})
export class HeroeTarjetaComponent implements OnInit {
@Input() valor!: Heroe; //el ! es para decirle que confie en mi que siempre va a tener contenido y no de error
//Aca el input recibe el valor desde el tag que llama a este componente pero que esta en listado.component.ts

constructor(private activatedRoute: ActivatedRoute){

}

ngOnInit(): void{
  this.activatedRoute.params.subscribe( ({id}) => console.log(id) )
}
}
