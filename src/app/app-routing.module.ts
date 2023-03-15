import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentaddComponent } from './studentadd/studentadd.component';
import { StudenteditComponent } from './studentedit/studentedit.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { AddsubjectComponent } from './subject/addsubject/addsubject.component';
import { EditsubjectComponent } from './subject/editsubject/editsubject.component';
import { ListsubjectComponent } from './subject/listsubject/listsubject.component';

const routes: Routes = [
  {path:'',redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'studentlist',component:StudentlistComponent},
  {path:'studentadd',component:StudentaddComponent},
  {path:'studentedit',component:StudenteditComponent},
  {path:'edit/:id',component:StudenteditComponent},
  {path:'listsubject',component:ListsubjectComponent},
  {path:'addsubject', component:AddsubjectComponent},
  {path:'editsubject',component:EditsubjectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
