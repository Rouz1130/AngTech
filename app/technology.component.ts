import { Component, Input } from '@angular/core';
import { Technology } from './technology.model';

@Component({
  selector: 'technology-display',
  template: `
  <div>
    <p *ngIf="technology.IdNumber < 5" ></p>
    <p *ngIf="technology.IdNumber > 5" ></p>
    <label>{{ technology.name }}</label>
  </div>
  `
})
export class TechnologyComponent {
  @Input() technology: Technology;
}
