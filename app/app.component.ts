import { Component } from '@angular/core';
import { Technology } from './technology.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Technology</h1>
    <technology-list
      [childTechnologyList]="masterTechnologyList"
      (clickSender)="showDetails($event)"
     ></technology-list>
    <edit-technology
      [childSelectedTechnology]="selectedTechnology"
      (doneClickedSender)="finishedEditing()"
    ></edit-technology>
    <new-technology
      (newTechnologySender)="addTechnology($event)"
    ></new-technology>
  </div>
  `
})
export class AppComponent {
  public masterTechnologyList: Technology[] = [
      new Technology("JavaScript", "Body", 1),
      new Technology("Node.js", "Body", 2),
      new Technology("C#", "Body", 3),
      new Technology("Java", "Body", 4),
  ];
  selectedTechnology: Technology = null;
  showDetails(clickedTechnology: Technology) {
    this.selectedTechnology = clickedTechnology;
  }
  finishedEditing() {
    this.selectedTechnology = null;
  }
  addTechnology(newTechnologyFromChild: Technology) {
    this.masterTechnologyList.push(newTechnologyFromChild);
  }
}
