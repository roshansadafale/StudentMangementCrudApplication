import { Component,NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { DeleteStudentComponent } from './delete-student/delete-student.component';


const routes: Routes = [

  {path:'students',component:  StudentListComponent},
  {path:'addstudent',component:  CreateStudentComponent},
  {path:'',component:  StudentListComponent},
  {path:'update-student/:sId',component: UpdateStudentComponent},
  {path:'aboutus',component: AboutusComponent},
  {path:'delete-student/:sId',component: DeleteStudentComponent}
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
