import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './dashboard/admin-dashboard/admin-dashboard.component';
import { StudentDashboardComponent } from './dashboard/student-dashboard/student-dashboard.component';
import { TeacherDashboardComponent } from './dashboard/teacher-dashboard/teacher-dashboard.component';
import { HomeComponent } from './home/home.component';
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
  {path:'admin',component:AdminDashboardComponent},
  {path:'teachDash',component:TeacherDashboardComponent},
  {path:'studentDash',component:StudentDashboardComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
