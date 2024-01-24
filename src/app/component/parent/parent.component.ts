import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {

  parentCounter=0;
  parentMethod(event:any)
  {
    console.log(event);
    this.parentCounter=event;
  }
}
