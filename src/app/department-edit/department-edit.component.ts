import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-department-edit',
  templateUrl: './department-edit.component.html',
  styleUrls: ['./department-edit.component.css']
})
export class DepartmentEditComponent {

  constructor(private activateRoute:ActivatedRoute)
  {
    activateRoute.params.subscribe(param=>this.deptEdit=param)
  }

  deptEdit:any
}
