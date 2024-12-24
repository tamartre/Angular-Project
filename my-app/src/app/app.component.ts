import { Component } from "@angular/core";

@Component({
    standalone:false,
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent{
  
  title:string="The Title"

  FuncHour(){
    const currentHour=new Date().getHours();
    if(currentHour>5&&currentHour<12)
      return "good morning";
    else if(currentHour>12 && currentHour<18)
      return "good noon";
    else 
      return "good night";
  }
  constructor(){

  }
}