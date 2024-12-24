import { Component } from "@angular/core";

@Component({
    standalone:false,
    selector: 'app-root',
    template: `<h1>Value of x: {{ x }}</h1>`
})

export class AppComponent{
  x:number=5;
  constructor(){

  }
}