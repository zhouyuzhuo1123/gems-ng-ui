import { Injectable } from '@angular/core';
import { HEROES } from '../service/mock-heroes';
import { Hero } from '../service/hero'
import http from '../fetch'
@Injectable()
export class CourseService {
  setCourse(params) : Promise<any> {
    return http.post('http://10.86.130.26:3003/api/course',{body:params})
  } 
};


