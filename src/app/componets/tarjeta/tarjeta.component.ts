import { Component, OnInit, Input , Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {
  @Input() heroe: any = {};
  @Input() idx: number;
  @Output() heroeSeleccionado: EventEmitter<number>;
  constructor( private route: Router) {
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit() {
  }


  verHeroe() {
    this.route.navigate(['Heroes/Heroe', this.idx]);
    //this.heroeSeleccionado.emit( this.idx );
  }

}
