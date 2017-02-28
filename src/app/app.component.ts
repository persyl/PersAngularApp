import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import {HeroService} from './hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})
export class AppComponent implements OnInit {
  title = 'Pers Angular (2) app works!';
  heroes: Hero[];
  age:number = 30;
  greeting:string = 'Change this text...';
  beers:Array<string> = ['IPA', 'APA', 'DIPA', 'Session'];

  ngOnInit(){
    this.age = 43;
  }

  constructor(private heroService: HeroService){
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
}
