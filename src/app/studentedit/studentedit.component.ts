import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { StudentlistService } from '../services/studentlist.service';

@Component({
  selector: 'app-studentedit',
  templateUrl: './studentedit.component.html',
  styleUrls: ['./studentedit.component.css']
})
export class StudenteditComponent {
  employeeid:any
  constructor(private eserve:StudentlistService,
    private activateRoute:ActivatedRoute)

    {
      activateRoute.params.subscribe(para=>this.employeeid=para)
      this.getempbyid()
    }

    employeeform=new FormGroup({
      emailId:new FormControl(),
      firstName:new FormControl(),
      id:new FormControl(),
      lastName:new FormControl(),

    })

    updateemp(){
      this.eserve.updateempdata(this.employeeid.id,this.employeeform.value).subscribe((res)=>console.log(res))
      alert("Updated Successful")

     }


    getempbyid(){
      this.eserve.getempdatabyid(this.employeeid.id).subscribe((res:any)=>this.employeeform.setValue(res))
      
    }
}
