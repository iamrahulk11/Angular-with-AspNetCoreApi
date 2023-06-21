import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/modals/student.modal';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-student-lists',
  templateUrl: './student-lists.component.html',
  styleUrls: ['./student-lists.component.scss']
})
export class StudentListsComponent implements OnInit {


  students: Student[]=[];

  constructor(private StudentsService: StudentsService){

  }
  ngOnInit(): void{
    this.StudentsService.GetAllStudents()
    .subscribe({
      next:(Student) => {
        this.students = Student;
        console.log(Student);
      },
      error:(Response)=>{
        console.log(Response);
      }
    });
    
  }
}
