import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Technology } from './technology.model';


@Component({
  selector: 'technology-list',
  template: `
    <select (change)="onChange($event.target.value)">
      <option value="all">Show All</option>
      <option value="isUnder500">Show under 500</option>
      <option value="isOver500" selected="selected">Show over 500</option>
    </select>
    <div *ngFor="let currentTechnology of childTechnologyList | completeness:selectedCompleteness">
      <technology-display [technology]="currentTechnology"></technology-display>
      <h3>{{currentTechnology.name}} | {{currentTechnology.description}} | {{currentTechnology.calories}}</h3>
    <form *ngIf="currentTechnology === selectedTechnology">
      <input [(ngModel)]="currentTechnology.name">
      <input [(ngModel)]="currentTechnology.description">
      <input [(ngModel)]="currentTechnology.calories" type="number"  aria-label="amount">
    </form>
      <button (click)="editButtonHasBeenClicked(currentTechnology)">Edit</button>
    </div>
  `
})

export class TechnologyListComponent {
  @Input() childTechnologyList: Technology[];
  @Output() clickSender = new EventEmitter();
  public selectedCompleteness: string = "notDone";
  onChange(optionFromMenu) {
    this.selectedCompleteness = optionFromMenu;
    console.log(this.selectedCompleteness);
  }
  editButtonHasBeenClicked(technologyToEdit: Technology) {
    this.clickSender.emit(technologyToEdit);
  }
}
