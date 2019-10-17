import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight'
})

export class HighlightPipe implements PipeTransform {
  transform(value: any, args: any): any {
    console.log(args);
    if (args.length < 1) { return value;}
    for(const text of args) {
        var reText = new RegExp(text, 'gi');
        //value = value.replace(reText, "<mark>" + text + "</mark>");
        //for your custom css
        value = value.replace(reText, "<span class='highlight-search-text'>" + text + "</span>"); 
    }
    console.log(value);
    return value;
}
}
