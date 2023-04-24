import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent  implements OnInit{

  constructor(private activeRouter: ActivatedRoute,
    private s1: StudentServiceService,
    private router: Router){}
  sId!: number;
  student: Student=new Student();
  ngOnInit(): void {
   this.sId=this.activeRouter.snapshot.params['sId'];
    console.log(this.sId);
     this.s1.getStudentById(this.sId).subscribe(data=>{
      this.student=data;
         console.log(this.student);
       })

    }
  updateStudentData(){
      
    this.s1.updateStudentData(this.student).subscribe(data=>{
      alert("Updated Sucessfully")
        this.router.navigate(['/students']);
    },error=>alert("sorry Unable to update"))
  }

}
