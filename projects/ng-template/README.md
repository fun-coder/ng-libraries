# NgTemplate

### Import Module
```typescript
import { NgTemplateModule } from '@qlee/ng-template';

@NgModule({
  declarations: [],
  imports: [ NgTemplateModule ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
```

### Define template

```html
<ng-template ngTemplate="customTemplate" let-model="model">
  <h3>{{ title }}</h3> // `title` is current component variable
  <h2>{{model.name}}</h2>
  <h2>{{model.age}}</h2>
</ng-template>
```

### Use template
```html
// data is the model which is passed to template
<template ngTemplatePlaceholder="customTemplate" [model]="data"></template>
```
