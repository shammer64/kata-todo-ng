import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-to-do-list-entry',
  template: `
    <div data-testid="to-do-list-entry">
      <label for="new-item">Enter a new To-Do</label>
      <input
        type="text"
        id="new-item"
        [(ngModel)]="newItem"
      />
      <button [disabled]="newItem === ''"
        (click)="onNewItem(newItem)">Add Item</button>
    </div>
  `,
  styleUrls: ['./to-do-list-entry.component.css'],
})
export class ToDoListEntryComponent implements OnInit {
  newItem: string = '';
  @Output() onNewItem: any;

  constructor() {}

  ngOnInit(): void {}
}
