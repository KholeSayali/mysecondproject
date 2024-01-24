import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  @Input() name="Ajay"
  @Input() age=20

  @Input() Counter=0;
  @Output() customEvent=new EventEmitter<number>();

  increaseCounter()
  {
    this.Counter++;
    this.customEvent.emit(this.Counter);
  }
}

