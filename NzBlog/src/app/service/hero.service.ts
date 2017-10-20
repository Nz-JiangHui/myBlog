import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';

import {Hero} from '../class/hero';
import {HEROES} from '../mock-heroes';
import {Http} from "@angular/http";

@Injectable()
export class HeroService {
  constructor(
    private http:Http
  ) { }
  private heroesUrl:string = 'api/heroes';
  getHeroes(): Promise<Hero[]> {
    return this.http.get(this.heroesUrl)
      .toPromise()
      .then(
        response =>
        response.json() as Hero[])
      .catch(this.handleError)
  }
  getHeroesSlowly():Promise<Hero[]>{
    return new Promise(resolve => {
      setTimeout(() => resolve(this.getHeroes()),2000);
    })
  }
  getHero(id:number):Promise<Hero>{
    const url=`${this.heroesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response =>response.json() as Hero)
      .catch(this.handleError);
  }
  private handleError(error:any):Promise<any>{
    console.error("An error occurred",error);
    return Promise.reject(error.message|error);
  }
}
