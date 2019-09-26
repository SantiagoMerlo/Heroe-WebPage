import {Component, OnInit} from '@angular/core';
import { HeroesService , Heroe} from '../../../service/HeroesService';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  Heroes: Heroe[] = [];
  termino: string;

  constructor(private HService: HeroesService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.termino = params.termino;
      this.Heroes = this.HService.BuscarHeroes(params.termino);
    });
  }

}
