import { Injectable, TemplateRef } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NgTemplateService {
  templates$ = new BehaviorSubject({});
  constructor() { }

  public register(id: string, templateRef: TemplateRef<any>) {
    this.templates$.next({ ...this.templates$.value, [id]: templateRef });
  }

  public unregister(id: string) {
    this.templates$.next({ ...this.templates$.value, [id]: null });
  }

  public get(id: string): Observable<TemplateRef<any>> {
    return this.templates$.pipe(
      map(templates => templates[id]),
    );
  }
}
