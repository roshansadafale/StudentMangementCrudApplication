import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from './student';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {
  
 
 
 
  
  

  baseURL ="http://localhost:9002/student";
  

   
  constructor(private h1: HttpClient) { }

  addStudent(student :Student){
    console.log(student);
      return this.h1.post(`${this.baseURL}`,student);
  }
   
  getAllStudent(): Observable<Student[]>{
    return  this.h1.get<Student[]>(`${this.baseURL}`);
  }

  getStudentById(sId:number): Observable<Student> {
    console.log(sId);
   return this.h1.get<Student>(`${this.baseURL}/${sId}`);
  }

  updateStudentData(student: Student): Observable<Student> {
    return this.h1.post<Student>(`${this.baseURL}`,student);
    
  }

  
  
 
    
  }


  
 
  

