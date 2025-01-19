import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { StudentListComponent } from "./student-list/student-list.component";
import { StudentDetailsComponent } from "./student-details/student-details.component";
import { ReactiveFormsModule } from "@angular/forms";


@NgModule({
  declarations:[AppComponent,StudentListComponent,StudentDetailsComponent],
  imports:[BrowserModule,ReactiveFormsModule],
  bootstrap:[AppComponent]

})

export class AppModule{

}