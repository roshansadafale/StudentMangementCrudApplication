import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentServiceService } from '../student-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
deletestudent(arg0: Student[]) {

}
deleteEmployee(sId: Student[]) {

}

  constructor(private s1:StudentServiceService, private router: Router){}
 
  students : Student[]=[];

  ngOnInit(): void {
    
    this.s1.getAllStudent().subscribe(data=>{
      this.students=data;
    })
  }

  updateStudent(sId:number){
    console.log(sId);
    this.router.navigate(['update-student',sId]);
  }
  deleteStudent(sId:number){
    console.log(sId);
    this.router.navigate(['delete-student',sId]);
  }

  

}
