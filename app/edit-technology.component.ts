import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Technology } from './technology.model';

@Component({
  selector: 'edit-technology',
  template: `
    <div *ngIf="childSelectedTechnology">
      <h1>Edit Technology</h1>
      <div>
        <label>Enter Technology Name:</label>
        <input [(ngModel)]="childSelectedTechnology.name">
      </div>
      <div>
        <label>Enter Technology description:</label>
        <input [(ngModel)]="childSelectedTechnology.description">
      </div>
      <div>
        <label>Enter Technology number:</label>
        <input [(ngModel)]="childSelectedTechnology.IdNumber">
      </div>
      <button (click)="doneClicked()">Done</button>
    </div>
  `
})

export class EditTechnologyComponent {
  @Input() childSelectedTechnology: Technology;
  @Output() doneClickedSender = new EventEmitter();
  doneClicked() {
    this.doneClickedSender.emit();
  }
}
