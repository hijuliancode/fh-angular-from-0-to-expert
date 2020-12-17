import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Heroe } from '../../types/heroe.interface';

import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = []

  constructor(
    private heroesService: HeroesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.heroes = this.heroesService.getHeroes()
    console.log(this.heroes)
  }

  verHeroe(idx: number) {
    this.router.navigate(['/heroe', idx])
  }

}
