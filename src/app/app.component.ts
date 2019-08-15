import { Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { Observable, of } from 'rxjs';
import { bufferCount, map, scan } from 'rxjs/operators';
import { NgCsvService } from '../../projects/ng-csv/src/lib/ng-csv.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'angular-csv';
  data: any[];
  model = { text: 'asd', value: 123 + Math.random() };

  constructor(private ngCsvService: NgCsvService) {
    setInterval(() => {
      this.model.value = 123 + Math.random();
    }, 1000);
  }

  upload(data: Observable<any>) {
    data.pipe(
      bufferCount(10),
      scan((all: string[], chunk: any[]) => [...all, ...chunk], [])
    ).subscribe(rows => this.data = rows);
  }

  download() {
    this.ngCsvService.download('test.csv', of({ name: 1, age: '222,asd' }, { name: 2 }));
  }
}
