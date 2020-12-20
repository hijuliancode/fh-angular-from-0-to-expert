import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../../services/heroes.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(
    public heroesService: HeroesService
  ) { }

  ngOnInit(): void {
  }

  buscarHeroe(termino: string) {
    console.log(termino)
    this.heroesService.buscarHeroes(termino)
  }

}
