import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StudentlistService } from '../services/studentlist.service';

@Component({
  selector: 'app-studentadd',
  templateUrl: './studentadd.component.html',
  styleUrls: ['./studentadd.component.css']
})
export class StudentaddComponent {

  employeeform=new FormGroup({
    emailId:new FormControl(),
    firstName:new FormControl(),
    lastName:new FormControl()

  })

  constructor(private emplyS:StudentlistService){}

  saveemp(){
    this.emplyS.saveemployeedata(this.employeeform.value).subscribe(res=>console.log(res))
    alert("Added Successful")
  this.employeeform.reset()
  
  }
}
