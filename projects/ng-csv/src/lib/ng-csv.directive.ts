import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { parse, ParseConfig, Parser, ParseResult } from 'papaparse';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { publishReplay } from 'rxjs/operators';
import { listener } from '@angular/core/src/render3';

const createInput = (): HTMLInputElement => {
  const input = document.createElement('input');
  input.setAttribute('type', 'file');
  input.style.display = 'none';
  return input;
};

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[ngCsv]'
})
export class NgCsvDirective {

  @Input()
  config: ParseConfig = {
    header: true
  } as ParseConfig;

  @Output()
  load: EventEmitter<Observable<any[]>> = new EventEmitter();

  constructor(private el: ElementRef) {
  }

  onFileSelect = (inputElement: HTMLInputElement, subject: Subject<any[]>) => (event: Event) => {
    const target = event.target as HTMLInputElement;
    parse(target.files.item(0), {
      ...this.config,
      chunk: (results: ParseResult) => {
        results.errors.length > 0
          ? subject.error(results.errors)
          : results.data.forEach(row => subject.next(row));
      },
      complete: (): void => {
        subject.complete();
        (this.el.nativeElement as HTMLElement).parentElement.removeChild(inputElement);
      }
    });
  }

  @HostListener('click')
  send() {
    const inputElement = createInput();
    const subject = new Subject<any[]>();
    this.load.emit(subject);
    const changeListener = this.onFileSelect(inputElement, subject);
    inputElement.addEventListener('change', changeListener);
    (this.el.nativeElement as HTMLElement).parentElement.appendChild(inputElement);
    inputElement.click();
  }
}
