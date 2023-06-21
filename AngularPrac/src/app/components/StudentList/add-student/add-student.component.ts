import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Student } from 'src/app/modals/student.modal';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {

  addStudentRequest: Student={
    autoId:"",
    studentName:"",
    contact:"",
    rollNo:"",
    course:"",
    address:""
  };
  constructor(private StudentsService: StudentsService,private router:Router){}
  ngOnInit(): void {
    
  }
  addStudent(){
    this.StudentsService.addStudent(this.addStudentRequest)
    .subscribe({
      next: (students)=>{
        this.router.navigate(['StudentList']);
      }
    });
  }
}
