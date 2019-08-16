import { Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
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
    const rows$ = new Subject();
    this.ngCsvService.download('test.csv', rows$);
    let i = 0;
    while (i < 1000000) {
      rows$.next({ name: `n-${ i }`, age: '222,asd' });
      i++;
    }
    rows$.complete();
  }
}
