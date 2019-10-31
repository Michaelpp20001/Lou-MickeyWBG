import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight'
})

export class HighlightPipe implements PipeTransform {
  transform(value: any, args: any): any {
    //console.log(args);
    if (args.length < 1) { return value;}
    for(const text of args) {
        var reText = new RegExp(text, 'gi');

        let startIdx = value.indexOf(text) // -1 if word is uppercase
        let textLength = text.length
        let endIdx; 
        let newWord;
        let startIdxCap;

        if(startIdx === -1){
          //Handle original word is uppercase or word was not found
          startIdxCap = value.indexOf(text[0].toUpperCase() + text.substring(1, text.length))
          endIdx = startIdxCap + textLength
          newWord = value.substring(startIdxCap, endIdx)
          console.log("start idx Cap", startIdxCap)
          console.log("endIdx", endIdx)
          console.log("newword:", newWord)
        }
        else{
          // handle lowercase
          endIdx = startIdx + textLength 
          newWord = value.substring(startIdx, endIdx)
          console.log("start idx", startIdx)
          console.log("endIdx", endIdx)
          console.log("newword:", newWord)
        }

        //for custom css for the highlighted text
        if(newWord[0] === newWord[0].toUpperCase()) {
          value = value.replace(reText, "<span class='highlight-search-text'>" + newWord + "</span>");
        } 
        else{
          value = value.replace(reText, "<span class='highlight-search-text'>" + text + "</span>");
        }
    }
    //console.log(value);
    return value;
}
}
