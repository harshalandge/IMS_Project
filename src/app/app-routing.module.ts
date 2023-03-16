import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentAddComponent } from './department-add/department-add.component';
import { DepartmentEditComponent } from './department-edit/department-edit.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { FeesCollectionComponent } from './fees-collection/fees-collection.component';
import { AdminDashboardComponent } from './dashboard/admin-dashboard/admin-dashboard.component';
import { StudentDashboardComponent } from './dashboard/student-dashboard/student-dashboard.component';
import { TeacherDashboardComponent } from './dashboard/teacher-dashboard/teacher-dashboard.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { StudentlistComponent } from './student/studentlist/studentlist.component';
import { StudentaddComponent } from './student/studentadd/studentadd.component';
import { StudenteditComponent } from './student/studentedit/studentedit.component';
import { StudentviewComponent } from './student/studentview/studentview.component';


const routes: Routes = [
  {path:'',redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'studentlist', component:StudentlistComponent},
  {path:'studentedit', component:StudenteditComponent},
  {path:'studentview', component:StudentviewComponent},
  {path:'studentadd', component:StudentaddComponent},
  {path:'departmentlist', component:DepartmentListComponent},
  {path:'departmentadd', component:DepartmentAddComponent},
  {path:'departmentedit', component:DepartmentEditComponent},
  {path:'feesCollection', component:FeesCollectionComponent},
  {path:'register', component:RegisterComponent},
  {path:'admin',component:AdminDashboardComponent},
  {path:'teachDash',component:TeacherDashboardComponent},
  {path:'studentDash',component:StudentDashboardComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
