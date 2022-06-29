import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  template: `
    <div data-testid="to-do-list">
      <app-to-do-list-entry (onNewTodo)="handleNewToDoItem($event)"></app-to-do-list-entry>
      <app-to-do-list-items [toDoItems]="toDoItemList"></app-to-do-list-items>
    </div>
  `,
  styleUrls: ['./to-do-list.component.css'],
})
export class ToDoListComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  toDoItemList: string[] = [];
  handleNewToDoItem(newItem: string) {
    this.toDoItemList = [...this.toDoItemList, newItem];
  }
}
