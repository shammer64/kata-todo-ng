import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  template: `
    <div data-testid="to-do-list">
      <app-to-do-list-entry
        (onNewItem)="handleNewItem($event)"
      ></app-to-do-list-entry>
      <app-to-do-list-items [toDoItems]="toDoItems"></app-to-do-list-items>
    </div>
  `,
  styleUrls: ['./to-do-list.component.css'],
})
export class ToDoListComponent implements OnInit {
  toDoItems: string[] = [];
  handleNewItem = (newItem: string) => {
    this.toDoItems = [...this.toDoItems, newItem];
  };
  constructor() {}
  ngOnInit(): void {}
}
