import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fees-collection',
  templateUrl: './fees-collection.component.html',
  styleUrls: ['./fees-collection.component.css']
})
export class FeesCollectionComponent {

constructor(private activateRoute:ActivatedRoute){

  activateRoute.params.subscribe((param)=>this.feesColl=param)
}
  feesColl:any
}
