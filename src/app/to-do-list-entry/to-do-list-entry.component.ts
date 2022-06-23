import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-list-entry',
  template: `
    <div data-testid="to-do-list-entry">
      to-do-list-entry works!
    </div>
  `,
  styleUrls: ['./to-do-list-entry.component.css'],
})
export class ToDoListEntryComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
