import { Component } from '@angular/core';
import { Student } from '../student.model';

@Component({
  standalone:false,
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  
})
export class StudentListComponent {
  students:Student[]=[
    {id:1,firstName:"Tamar",lastName:"Treger",address:"26 Henry",phone:556772499,isActive:false,marksAverage:100},
    {id:2,firstName:"Shifra",lastName:"Choen",address:"2 Hagefen",phone:527123425,isActive:true,marksAverage:87},
    {id:3,firstName:"Noa",lastName:"Levi",address:"",phone:"12 Sderot",isActive:true,marksAverage:92}
  ]

  constructor(){

  }


}
