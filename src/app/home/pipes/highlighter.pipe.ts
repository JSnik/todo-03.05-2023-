import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Pipe({
  name: 'highlighter'
})
export class HighlighterPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(value: any, search: any): unknown {
    let w = search.trim().toString();
    const highlightedValue = value.replace(w, `<span style="color: black">${search}</span>`);
    const sanitizedValue = this.sanitizer.bypassSecurityTrustHtml(`<span style="color: red">${highlightedValue}</span>`);
    return sanitizedValue;
  }


}
