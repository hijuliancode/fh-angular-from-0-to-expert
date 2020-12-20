import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Heroe } from '../../types/heroe.interface';

@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html'
})
export class HeroeCardComponent implements OnInit {

  @Input() heroe: any;
  @Input() index: string | undefined;

  @Output() heroeSeleccionado: EventEmitter<string>

  constructor(
    private router: Router
  ) {
    this.heroeSeleccionado = new EventEmitter()
  }

  ngOnInit(): void {
  }

  clickHeroe() {
    // this.router.navigate(['/heroe', this.index])
    this.heroeSeleccionado.emit( this.index )
  }
}
