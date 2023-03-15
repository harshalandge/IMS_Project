import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent {

  constructor(private activateRoute:ActivatedRoute){
    activateRoute.params.subscribe(param=>this.deptList = param)
  }
   deptList:any
}
