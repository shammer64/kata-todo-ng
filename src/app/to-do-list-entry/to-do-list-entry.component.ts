import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-list-entry',
  template: `
    <div data-testid="to-do-list-entry">
    <label for="new-item">Enter a new To-Do</label>  
    <input type="text" id="new-item" />
    </div>
  `,
  styleUrls: ['./to-do-list-entry.component.css'],
})
export class ToDoListEntryComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
