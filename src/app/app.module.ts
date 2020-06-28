import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { ButtonComponent } from './button/button.component';
import { FormComponent } from './form/form.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesService } from './courses.service';
import {SummaryPipe} from './summary.pipe';


@NgModule({
  declarations: [
    AppComponent,
    DialogBoxComponent,
    ButtonComponent,
    FormComponent,
    CoursesComponent,
    SummaryPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [CoursesService],   // DI  has to notify module that which services is provided. what is denpendency  then where to inject it.
  bootstrap: [AppComponent]
})
export class AppModule { }
