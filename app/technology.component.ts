import { Component, Input } from '@angular/core';
import { Technology } from './technology.model';

@Component({
  selector: 'technology-display',
  template: `
  <div>
    <p *ngIf="technology.calories < 500" ></p>
    <p *ngIf="technology.calories > 500" ></p>
    <label>{{ technology.name }}</label>
  </div>
  `
})
export class TechnologyComponent {
  @Input() technology: Technology;
}
