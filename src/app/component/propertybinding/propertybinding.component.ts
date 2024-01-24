import { Component } from '@angular/core';

@Component({
  selector: 'app-propertybinding',
  templateUrl: './propertybinding.component.html',
  styleUrl: './propertybinding.component.css'
})
export class PropertybindingComponent {

  active:boolean=true;

  title="<b>This is my project</b>";

  ob={
    color:'red',
    backgroundcolor:'yellow'

  }

}
