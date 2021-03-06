import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe } from '../../types/heroe.interface';
import { HeroesService } from '../../services/heroes.service';
@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent implements OnInit {

  heroe: any = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroesService: HeroesService,
  ) {
    console.log('this.activatedRoute.params => ', this.activatedRoute.params)
    this.activatedRoute.params.subscribe (
      params => this.heroe = this.heroesService.getHeroe( params['id'] )
    )
  }

  ngOnInit(): void {
    console.log(this.heroe)
  }

}
