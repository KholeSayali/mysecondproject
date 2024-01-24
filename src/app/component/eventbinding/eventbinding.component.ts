import { Component } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrl: './eventbinding.component.css'
})
export class EventbindingComponent {

sum (n1:number,n2:number)
{
  alert(n1+n2)

}

Count=0;
increase()
{
  return this.Count++;
}
}
