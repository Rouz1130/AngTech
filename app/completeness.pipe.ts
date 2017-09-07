import {Pipe, PipeTransform} from '@angular/core';
import {Technology} from './technology.model';

@Pipe({
  name: "completeness",
  pure: false
})
export class CompletenessPipe implements PipeTransform {
  transform(input: Technology[], desiredCompleteness) {


    var output: Technology[] = [];
    if(desiredCompleteness === "isUnder5") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].IdNumber <5) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredCompleteness === "isOver5") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].IdNumber > 5) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
