import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentServiceService } from '../student-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent  implements OnInit{

  student: Student= new Student();

  constructor(private s1: StudentServiceService, private router: Router){}
  ngOnInit(): void {
    
  }
  addStudentData(){
   this.s1.addStudent(this.student).subscribe(data=>{
    alert("Student Data Insert Sucessfully");
    this.gotoListOfStudent();
   },error=>alert("Sorry Unable to insert Student data"))
   
  }
   gotoListOfStudent(){
    this.router.navigate(['/students']);

   }
  

}
