import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-student-notes',
  templateUrl: './student-notes.component.html',
  styleUrls: ['./student-notes.component.css']
})
export class StudentNotesComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
  }

}
