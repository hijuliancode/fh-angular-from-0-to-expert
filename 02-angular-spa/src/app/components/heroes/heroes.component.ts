import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Heroe } from '../../types/heroe.interface';

import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = []
  terminoBusqueda: string = ''

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroesService: HeroesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => {
        if ( params['busqueda'] ) {
          this.heroes = this.heroesService.buscarHeroes(params['busqueda'])
          this.terminoBusqueda = params['busqueda']
        } else {
          this.heroes = this.heroesService.getHeroes()
          this.terminoBusqueda = ''
        }
      }
    )
  }

  verHeroe(idx: number) {
    console.log('verHeroe', idx)
    this.router.navigate(['/heroe', idx])
  }

}
