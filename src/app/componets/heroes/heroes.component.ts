import {Component, OnInit} from '@angular/core';
import { HeroesService , Heroe} from '../../service/HeroesService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  Heroes: Heroe[] = [];

  constructor( private HService: HeroesService, private route: Router ) {
  }

  ngOnInit() {
    this.Heroes = this.HService.getHeroes();
  }

  verHeroe( idx: number ) {
    this.route.navigate(['Heroes/Heroe', idx]);
  }
}
