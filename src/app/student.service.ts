import { Injectable } from '@angular/core';
import { STUDENTS } from './students'
import { Student } from './student'
import { Observable, of } from 'rxjs'
import { Note } from './note'
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class StudentService {
  private studentUrl = 'api/students';
  constructor(private http: HttpClient) { }

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.studentUrl);
  }

  getNotes(id: number): Observable<Student> {
    return this.http.get<Student>(this.studentUrl + '/'+id); 
  }

  getBio(): Observable<Note[]> {
    return this.http.get<Note[]>(this.studentUrl + '/1/notes');
  }
}
