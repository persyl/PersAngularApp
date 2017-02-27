import { Component } from '@angular/core';
import { Hero } from './hero';
import {HeroService} from './hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})
export class AppComponent {
  title = 'Pers Angular (2) app works!';
  heroes: Hero[];
  age:number = 43;

  constructor(private heroService: HeroService){
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
}
