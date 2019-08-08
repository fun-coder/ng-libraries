import { Component } from '@angular/core';
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

  constructor(private ngCsvService: NgCsvService) {
  }

  load(data: Observable<any>) {
    data.pipe(
      map(row => JSON.stringify(row)),
      bufferCount(10),
      scan((all: string[], chunk: any[]) => [...all, ...chunk], [])
    ).subscribe(rows => this.data = rows);
  }

  download() {
    this.ngCsvService.download('test.csv', of({ name: 1, age: '222,asd' }, { name: 2 }));
  }
}
