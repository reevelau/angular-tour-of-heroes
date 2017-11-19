import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeroesComponent implements OnInit {

  heroes : Hero[];

  constructor(private HeroService : HeroService) { }

  ngOnInit() {
    this.getHeros();
  }

  getHeros() : void {
    this.HeroService.getHeros()
      .subscribe(heros => this.heroes = heros);
  }

}
