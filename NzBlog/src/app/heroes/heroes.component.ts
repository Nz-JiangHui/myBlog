/**
 * Created by tusimple on 2017/10/20.
 */
import {Component, OnInit} from "@angular/core";
import {Hero} from "../class/hero";
import {HeroService} from "../service/hero.service";

@Component({
  selector:'my-heroes',
  templateUrl:'./heroes.component.html',
  providers:[HeroService]
})
export class HeroesComponent implements OnInit{
  constructor(private heroService:HeroService){}
  heroes:Hero[];
  getHeroes():void{
    this.heroService.getHeroesSlowly().then(heroes => this.heroes=heroes);
  }
  selectedHero: Hero;
  onSelect(hero: Hero):void {
    this.selectedHero = hero;
  }
  ngOnInit():void{
    this.getHeroes();
  }
}
