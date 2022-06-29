import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-list-items',
  template: `
    <div data-testid="to-do-list-items">
      <p *ngIf="toDoItems.length === 0">No To-Do items available</p>
      <ul *ngFor="let toDoItem of toDoItems">
        <li>{{toDoItem}}</li>
      </ul>
    </div>
  `,
  styleUrls: ['./to-do-list-items.component.css'],
})
export class ToDoListItemsComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  @Input() toDoItems: string[] = [];
}
