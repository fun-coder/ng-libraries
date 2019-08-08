import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, scan } from 'rxjs/operators';
import { ParseConfig, unparse } from 'papaparse';


const MIME = 'application/octet-binary';

@Injectable({
  providedIn: 'root'
})
export class NgCsvService {

  constructor() {
  }

  download(filename: string, observable: Observable<any>, config?: ParseConfig) {
    const chunks = [];
    const linkElement = document.createElement('a');
    linkElement.style.display = 'none';
    linkElement.download = filename;
    observable.subscribe(chunk => chunks.push(chunk), console.warn, () => {
      const csv = unparse(chunks, config);
      linkElement.href = `data:application/octet-stream,${csv}`;
      linkElement.click();
    });
  }
}
