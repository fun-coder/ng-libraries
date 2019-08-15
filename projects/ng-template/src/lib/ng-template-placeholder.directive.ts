import { Directive, Input, OnChanges, OnInit, SimpleChanges, ViewContainerRef } from '@angular/core';
import { NgTemplateService } from './ng-template.service';
import { filter, map, tap } from 'rxjs/operators';
import { BehaviorSubject, combineLatest } from 'rxjs';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[ngTemplatePlaceholder]'
})
export class NgTemplatePlaceholderDirective implements OnInit, OnChanges {

  @Input() ngTemplatePlaceholder: string;

  @Input() model: any;

  private model$ = new BehaviorSubject<any>(null);

  constructor(private ngTemplateService: NgTemplateService, private viewContainerRef: ViewContainerRef) {
  }

  ngOnInit(): void {
    combineLatest([
      this.ngTemplateService.get(this.ngTemplatePlaceholder),
      this.model$,
    ]).pipe(
      tap(() => this.viewContainerRef.clear()),
      filter(([template]) => template !== null && template !== undefined),
      map(([templateRef, model]) => templateRef.createEmbeddedView({ model })),
    ).subscribe(viewRef => this.viewContainerRef.insert(viewRef));
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.model && changes.model.previousValue !== changes.model.currentValue) {
      this.model$.next(changes.model.currentValue);
    }
  }
}
