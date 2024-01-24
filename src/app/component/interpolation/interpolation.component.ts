import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrl: './interpolation.component.css'
})
export class InterpolationComponent {

  firstname="sayali";
  lastname="khole";
  mobileno=8554011270;
  age:number=21;

  flag=true;

  getFullName()
  {
    return this.firstname+ " "+this.lastname;
  }

  currentDate=new Date();

}
