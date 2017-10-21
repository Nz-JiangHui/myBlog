/**
 * Created by tusimple on 2017/10/20.
 */
import {Component, OnInit} from "@angular/core";
import {Hero} from "../class/hero";
import {HeroService} from "../service/hero.service";
import {Router} from "@angular/router";

@Component({
  selector:'my-heroes',
  templateUrl:'./heroes.component.html',
  providers:[HeroService],
  styleUrls:['./heroes.component.css']
})
export class HeroesComponent implements OnInit{
  constructor(
    private heroService:HeroService,
    private router:Router
  ){}
  heroes:Hero[];
  getHeroes():void{
    this.heroService.getHeroes().then(
      heroes =>
        this.heroes=heroes
    );
  }
  selectedHero: Hero;
  onSelect(hero: Hero):void {
    this.selectedHero = hero;
  }
  ngOnInit():void{
    this.getHeroes();
  }
  gotoDetail():void{
    this.router.navigate(['/detail',this.selectedHero.id]);
  }
}
