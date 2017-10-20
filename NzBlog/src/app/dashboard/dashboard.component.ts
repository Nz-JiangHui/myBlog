import { Component, OnInit } from '@angular/core';
import {HeroService} from "../service/hero.service";
import {Hero} from "../class/hero";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes:Hero[]=[];
  constructor(private heroService:HeroService) { }


  ngOnInit() {
    this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes.slice(1,5));
  }

}
