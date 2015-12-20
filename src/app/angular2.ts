import {Component} from 'angular2/core';


@Component({
  selector: 'angular2-app',
  providers: [],
  templateUrl: 'app/angular2.html',
  directives: [],
  pipes: []
})
export class Angular2App {
  defaultMeaning: number = 42;
  
  meaningOfLife(meaning) {
    return `The meaning of life is ${meaning || this.defaultMeaning}`;
  }
}
