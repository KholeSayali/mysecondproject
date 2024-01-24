import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrl: './ng-if.component.css'
})
export class NgIfComponent {

  // active=true;

   active=false;

  // count=1;

  num1=5;
  num2=6;

  changeStatus()
  {
    this.active != this.active;
  }

}
