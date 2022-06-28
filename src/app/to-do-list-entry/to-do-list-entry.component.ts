import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-to-do-list-entry',
  template: `
    <div data-testid="to-do-list-entry">
      <form #entryForm="ngForm" (ngSubmit)="submitItem();entryForm.reset()">
        <label for="newItem">Enter a new To-Do</label>
        <input
          type="text"
          id="newItem"
          name="newItem"
          [(ngModel)]="model.newItem"
        />
        <button
          [disabled]="model.newItem === ''">
          Add Item
        </button>
      </form>
    </div>
  `,
  styleUrls: ['./to-do-list-entry.component.css'],
})
export class ToDoListEntryComponent {
  model = { newItem: '' };
  @Output() onNewItem = new EventEmitter<string>();

  submitItem() {
    this.onNewItem.emit(this.model.newItem);
  }
  constructor() {}
}
