import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { StudentService } from '../student.service';
import { Student } from '../student';
import { Note } from '../note';
import { isArray } from 'util';

@Component({
  selector: 'app-student-notes',
  templateUrl: './student-notes.component.html',
  styleUrls: ['./student-notes.component.css']
})
export class StudentNotesComponent implements OnInit {
  notes:Note[] = [];
  constructor(private route: ActivatedRoute,
              private location: Location,
              private studentService: StudentService) { }

  ngOnInit() {
    this.getNotes(1);
  }

  getNotes(id: number):void {
    this.studentService
      .getNotes(id)
      .subscribe(student => {
        this.notes = student.notes;
      });
  }
}
