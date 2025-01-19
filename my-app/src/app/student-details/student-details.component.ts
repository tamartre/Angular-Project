import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from '../student.model';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone: false,
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent {
  @Input()
  student: Student | null = null;

  studentForm!: FormGroup;

  @Output()
  onSaveNewStudent: EventEmitter<Student> = new EventEmitter();

  constructor() {
    this.studentForm = new FormGroup({
      id: new FormControl(null),
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      address: new FormControl(''),
      phone: new FormControl(''),
      isActive: new FormControl(false),
      marksAverage: new FormControl(0),
      leaveDate: new FormControl('')
    });
  }

  ngOnChanges() {
    if (this.student) {
      this.studentForm.patchValue(this.student);
    }
  }
  saveNewStudent() {
    if (this.studentForm.valid) {
      this.onSaveNewStudent.emit(this.studentForm.value);
    }
  }
}