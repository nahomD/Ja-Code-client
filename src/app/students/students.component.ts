import { Component, OnInit } from '@angular/core';
import { Student } from '../student'
//import { STUDENTS } from '../students'
import { StudentService } from '../student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})

export class StudentsComponent implements OnInit {
  student:Student = {
    id:1,
    name:"name",
    bio:"bio",
    notes:[]
  };

  students:Student[] = [];
  selectedStudent:Student;

  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.getStudents();
  }

  getStudents(): void{
    this.studentService
      .getStudents()
      .subscribe(students => this.students = students);
  }

  onSelect(student: Student): void {
    this.selectedStudent = student;
  }

}
