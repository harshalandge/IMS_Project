import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';

import { TeacheraddComponent } from './teacher/teacheradd/teacheradd.component';
import { TeachereditComponent } from './teacher/teacheredit/teacheredit.component';
import { TeacherlistComponent } from './teacher/teacherlist/teacherlist.component';
import { TeacherviewComponent } from './teacher/teacherview/teacherview.component';


const routes: Routes = [
  {path:'',redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'dashboard', component:DashboardComponent},
  
  {path:'teacherlist',component:TeacherlistComponent},
      {path:'teacheradd',component:TeacheraddComponent},
     {path:'teacheredit',component:TeachereditComponent},
     {path:'teacherview',component:TeacherviewComponent}
      
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
