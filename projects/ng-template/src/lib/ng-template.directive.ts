import { Directive, Input, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { NgTemplateService } from './ng-template.service';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[ngTemplate]',
  exportAs: 'model'
})
export class NgTemplateDirective<T> implements OnInit, OnDestroy {
  @Input() ngTemplate: string;

  constructor(private templateRef: TemplateRef<T>, private ngTemplateService: NgTemplateService) {
  }

  ngOnInit(): void {
    this.ngTemplateService.register(this.ngTemplate, this.templateRef);
  }

  ngOnDestroy(): void {
    this.ngTemplateService.unregister(this.ngTemplate);
  }
}
