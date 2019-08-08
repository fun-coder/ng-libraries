import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgCsvModule } from '../../projects/ng-csv/src/lib/ng-csv.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    NgCsvModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
