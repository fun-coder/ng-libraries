# NgCsv

### Import Module
```typescript
import { NgCsvModule } from '@qlee/ng-csv';

@NgModule({
  declarations: [],
  imports: [ NgCsvModule ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
```

### Upload csv

```html
<button ngCsv (upload)="upload($event)">选择文件</button>
```

```typescript
class Component {
  upload(data: Observable<any>) {
      data.pipe(
        scan((all: string[], row: any[]) => [...all, row], [])
      ).subscribe(rows => this.data = rows);
    }
}
```

### Download

```typescript
import { of } from 'rxjs';
import { NgCsvService } from '@qlee/ng-csv';

class Component {
  constructor(private ngCsvService: NgCsvService) {}
  
  download() {
      this.ngCsvService.download('test.csv', of({ name: 1, age: '222,asd' }, { name: 2 }));
  }
}
```
