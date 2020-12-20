import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Heroe } from '../../types/heroe.interface';

@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html'
})
export class HeroeCardComponent implements OnInit {

  @Input() heroe: any;
  @Input() index: any;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  verHeroe() {
    this.router.navigate(['/heroe', this.index])
  }
}
