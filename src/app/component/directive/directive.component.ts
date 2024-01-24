import { Component } from '@angular/core';
import { Student } from '../../model/student';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrl: './directive.component.css'
})
export class DirectiveComponent {
  // city=["pune","Delhi","Mumbai"]

  stu=[new Student("Ajay",8888,"cs"),
      new Student("Vijay",8888,"cs"),
      new Student("Sujay",8888,"cs")]

}
