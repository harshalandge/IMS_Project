import { Component } from '@angular/core';
import { StudentlistService } from '../services/studentlist.service';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent {
  constructor(private employeeS:StudentlistService){this.getemp()}
  employeelist:any
  getemp(){
    this.employeeS.getemployeedata().subscribe(res=>this.employeelist=res)
  }
  
  deleteemp(id:number){
    this.employeeS.deleteempdata(id).subscribe((res)=>console.log(res))
    alert("Deleted Successful")
    this.getemp()
  }
}
