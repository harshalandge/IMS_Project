import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-department-add',
  templateUrl: './department-add.component.html',
  styleUrls: ['./department-add.component.css']
})
export class DepartmentAddComponent {

  constructor(private activateRoute:ActivatedRoute){

    activateRoute.params.subscribe(param=>this.deptAdd=param)
  }

  deptAdd:any
}
