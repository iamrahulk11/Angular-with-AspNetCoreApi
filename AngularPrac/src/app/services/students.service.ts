import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Student } from '../modals/student.modal';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class StudentsService {

  BaseApiUrl: string = environment.baseApiUrl;
  constructor(private http:HttpClient) { }

  GetAllStudents():Observable<Student[]>{
   return this.http.get<Student[]>(this.BaseApiUrl + '/api/Student');
  }
  addStudent(addStudentRequest:Student):Observable<Student>{
    return this.http.post<Student>(this.BaseApiUrl+'/api/Student',addStudentRequest);
  }
}
