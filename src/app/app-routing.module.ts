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
import { StudentaddComponent } from './studentadd/studentadd.component';
import { StudenteditComponent } from './studentedit/studentedit.component';
import { StudentlistComponent } from './studentlist/studentlist.component';

const routes: Routes = [
  {path:'',redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'studentlist',component:StudentlistComponent},
  {path:'studentadd',component:StudentaddComponent},
  {path:'studentedit',component:StudenteditComponent},
  {path:'edit/:id',component:StudenteditComponent},
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
