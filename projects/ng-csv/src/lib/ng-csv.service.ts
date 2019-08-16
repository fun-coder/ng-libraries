import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ParseConfig, unparse } from 'papaparse';

@Injectable({
  providedIn: 'root'
})
export class NgCsvService {

  download(filename: string, observable: Observable<any>, config?: ParseConfig) {
    const chunks = [];
    const linkElement = document.createElement('a');
    linkElement.style.display = 'none';
    linkElement.download = filename;
    observable.subscribe(chunk => chunks.push(chunk), console.warn, () => {
      const csv = unparse(chunks, config);
      const blob = new Blob([csv], {type: 'text/plain;charset=utf-8'});
      linkElement.href = URL.createObjectURL(blob);
      linkElement.click();
    });
  }

}
