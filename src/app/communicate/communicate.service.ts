import { Injectable } from '@angular/core';
import { HEROES } from '../service/mock-heroes';
import { Hero } from '../service/hero'
import http from '../fetch'
@Injectable()
export class ServiceCodeService {
  getServiceList() : Promise<any> {
    return http.get('http://10.86.130.26:3003/api/servicecode')
  } 

  getHeroesDetal(id:string) :Promise<any> {
  	console.log(id)
  	return http.get('https://cnodejs.org/api/v1/topic/'+`${id}`)
  }
};
