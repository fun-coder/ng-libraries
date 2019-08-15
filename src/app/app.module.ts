import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgCsvModule } from '../../projects/ng-csv/src/lib/ng-csv.module';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task/task.component';
import { NgTemplateModule } from '../../projects/ng-template/src/lib/ng-template.module';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    NgCsvModule,
    NgTemplateModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
