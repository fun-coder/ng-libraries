import { NgModule } from '@angular/core';
import { NgCsvDirective } from './ng-csv.directive';
import { NgCsvService } from './ng-csv.service';

@NgModule({
  declarations: [NgCsvDirective],
  imports: [
  ],
  providers: [NgCsvService],
  exports: [NgCsvDirective]
})
export class NgCsvModule { }
