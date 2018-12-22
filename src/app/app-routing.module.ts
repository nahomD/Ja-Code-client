import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { StudentNotesComponent } from './student-notes/student-notes.component'
import { HeaderComponent } from './header/header.component';
import { AddNoteComponent } from './add-note/add-note.component'

const routes: Routes = [
  {path:"students", component: StudentsComponent},
  {path:"student-notes/:id", component: StudentNotesComponent},
  {path:"header", component: HeaderComponent},
  {path:"addNote", component: AddNoteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
