import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { StudentNotesComponent } from './student-notes/student-notes.component'

const routes: Routes = [
  {path:"students", component: StudentsComponent},
  {path:"student-notes/:id", component: StudentNotesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
