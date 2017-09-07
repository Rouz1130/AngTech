import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Technology } from './technology.model';


@Component({
  selector: 'technology-list',
  template: `
    <select (change)="onChange($event.target.value)">
      <option value="all">Show All</option>
      <option value="isUnder5">Show under 5</option>
      <option value="isOver5" selected="selected">Show over 5</option>
    </select>
    <div *ngFor="let currentTechnology of childTechnologyList | completeness:selectedCompleteness">
      <technology-display [technology]="currentTechnology"></technology-display>
      <h3>{{currentTechnology.name}} | {{currentTechnology.description}} | {{currentTechnology.IdNumber}}</h3>
    <form *ngIf="currentTechnology === selectedTechnology">
      <input [(ngModel)]="currentTechnology.name">
      <input [(ngModel)]="currentTechnology.description">
      <input [(ngModel)]="currentTechnology.IdNumber" type="number"  aria-label="amount">
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
