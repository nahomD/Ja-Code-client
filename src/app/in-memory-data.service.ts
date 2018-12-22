import { Injectable } from '@angular/core';
import { Student } from './student'
import { InMemoryDbService } from 'angular-in-memory-web-api'

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
  constructor() { }

  createDb() {
    const students = [
      {id:1, name:'nah', bio:'biod', notes:[{id:1, title:"test", body:"body"},{
        id:2, title:"test06", body:"body09"
      }]},
      {id:2, name:'naho', bio:'biod'},
      {id:3, name:'nah', bio:'biod'}      
    ];
    return {students};
  }

  // genId(students: Student[]):number {
  //   return students.length > 0 ? Math.max(...students.map(student => student.id))+1:11;
  // }
}
