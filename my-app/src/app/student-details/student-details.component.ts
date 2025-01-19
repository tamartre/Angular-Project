import { Component, EventEmitter, Input, output, Output } from '@angular/core';
import { Student } from '../student.model';

@Component({
  standalone:false,
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.css'
})

export class StudentDetailsComponent {
  @Input()
  student:Student|null=null;

  @Output()
  onSaveNewStudent:EventEmitter<any>=new EventEmitter();

  saveNewStudent(){

  }


}
