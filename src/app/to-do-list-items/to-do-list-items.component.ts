import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-list-items',
  template: `
    <div data-testid="to-do-list-items">
      <ul>
        <p *ngIf="toDoItems.length === 0">No To-Do Items to show.</p>
        <li *ngFor="let item of toDoItems">{{item}}</li>
      </ul>
    </div>
  `,
  styleUrls: ['./to-do-list-items.component.css'],
})
export class ToDoListItemsComponent implements OnInit {
  @Input() toDoItems: string[] = [];

  constructor() {}

  ngOnInit(): void {}
}
