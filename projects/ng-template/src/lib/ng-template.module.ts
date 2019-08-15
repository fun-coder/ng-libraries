import { NgModule } from '@angular/core';
import { NgTemplatePlaceholderDirective } from './ng-template-placeholder.directive';
import { NgTemplateDirective } from './ng-template.directive';
import { NgTemplateService } from './ng-template.service';

@NgModule({
  declarations: [NgTemplateDirective, NgTemplatePlaceholderDirective],
  providers: [NgTemplateService],
  exports: [NgTemplateDirective, NgTemplatePlaceholderDirective]
})
export class NgTemplateModule {}
