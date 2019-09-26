import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HeroesService, Heroe} from '../../service/HeroesService';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {
  heroe: Heroe;
  constructor(private ar: ActivatedRoute, private sh: HeroesService) {
    this.ar.params.subscribe( params => {
      this.heroe = this.sh.getHeroe(params.id);
    });
  }
}
