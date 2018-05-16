import { Injectable } from '@angular/core';
import { HEROES } from '../service/mock-heroes';
import { Hero } from '../service/hero'
import http from '../fetch'
import config from '../config'
@Injectable()
export class CourselistService {
  getCourseList() : Promise<any> {
    return http.get('http://10.86.130.26:3003/api/courselist')
  } 

  putCourse(params) : Promise<any> {
    return http.put(`${config.url}/api/course`,{body:params})
  } 
  getHeroesDetal(id:string) :Promise<any> {
  	console.log(id)
  	return http.get('https://cnodejs.org/api/v1/topic/'+`${id}`)
  }
};
