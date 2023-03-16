import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

constructor(private activateRoute:ActivatedRoute){

  activateRoute.params.subscribe((param)=>this.reg=param)
}
  reg:any
}
