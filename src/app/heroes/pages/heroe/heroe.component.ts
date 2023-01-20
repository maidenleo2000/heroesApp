import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe } from '../../interfaces/heroes.interface';
import { switchMap } from 'rxjs';
import { HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [`
    img{
      width: 100%;
      border-radius: 5px;
    }
  `
  ]
})
export class HeroeComponent implements OnInit {

  heroe!:Heroe;

  constructor(private activatedRoute: ActivatedRoute, 
              private heroesService: HeroesService,
              private router: Router){}

  ngOnInit(): void {
    //this.activatedRoute.params.subscribe( ({id}) => console.log(id) )

    //con esto obtengo el ID desde el params o parametros del link o URL, lo saco con switchmap llamando al metodo para obtener la URL que debe ser y con el suscribe paso los datos a heroe
    this.activatedRoute.params.pipe(
      switchMap( ({id}) => this.heroesService.getHeroePorId(id))
    )
    .subscribe(resp => {
      console.log(resp)
      this.heroe=resp;
    })
  }

  regresar(): void{
    this.router.navigate(['/heroes/listado']);
  }
}
