import { Component, Output, EventEmitter } from '@angular/core';
import { Technology } from './technology.model';

@Component({
  selector: 'new-technology',
  template: `
    <h1>New Technology</h1>
    <div>
      <label>Enter Technology Description:</label>
    </div>
    <div>
      <form class="add-new-technology">
  <label for="">Name:</label>
  <input class="form-control" type="text" name="name" value="" #newName>
  <label for="">Description:</label>
  <input class="form-control" type="text" name="name" value="" #newDescription>
  <label for="">IdNumber:</label>
  <input  class="form-control" type="text" name="name" value="" #newIdNumber>
  <button (click)="
    addClicked(newName.value,newDescription.value ,newIdNumber.value);
    newName.value='';
    newDescription.value='';
    newIdNumber.value='';
  ">Add</button>
  `
})

export class NewTechnologyComponent {
  @Output() newTechnologySender = new EventEmitter();
  addClicked(name: string, description: string, IdNumber: number) {
    var newTechnologyToAdd: Technology = new Technology(name, description, IdNumber);
    this.newTechnologySender.emit(newTechnologyToAdd);
  }
}
