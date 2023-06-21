import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListsComponent } from './components/StudentList/student-lists/student-lists.component';
import { AddStudentComponent } from './components/StudentList/add-student/add-student.component';

const routes: Routes = [
  {
    path:'',
    component:StudentListsComponent,
  },
  {
    path:'StudentList',
    component:StudentListsComponent,
  },
  {
    path:'StudentList/add',
    component:AddStudentComponent,
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
