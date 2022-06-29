import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-to-do-list-entry',
  template: `
    <div data-testid="to-do-list-entry" >
      <form #entryForm="ngForm" (ngSubmit)="handleSubmit();entryForm.reset()">
        <label for="newItem">Add a new To-Do</label>
        <input
          type="text"
          name="newItem"
          id="newItem"
          [(ngModel)]="model.newToDoItem"
        />
        <button [disabled]="model.newToDoItem === ''">Add</button>
      </form>
    </div>
  `,
  styleUrls: ['./to-do-list-entry.component.css'],
})
export class ToDoListEntryComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  @Output() onNewTodo = new EventEmitter<string>();
  handleSubmit() {
    this.onNewTodo.emit(this.model.newToDoItem);
  }
  model = {
    newToDoItem: '',
  };
}
