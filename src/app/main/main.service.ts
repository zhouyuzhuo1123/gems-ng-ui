import { Injectable } from '@angular/core';
import { HEROES } from '../service/mock-heroes';
import { Hero } from '../service/hero'
import http from '../fetch'
@Injectable()
export class HeroService {
  getHeroes(pages:number = 1,tab:string = '') : Promise<any> {
    return http.get('https://cnodejs.org/api/v1/topics'+`?page=${pages}&tab=${tab}`)
  } 

  getHeroesDetal(id:string) :Promise<any> {
  	console.log(id)
  	return http.get('https://cnodejs.org/api/v1/topic/'+`${id}`)
  }
};

//ask share job good