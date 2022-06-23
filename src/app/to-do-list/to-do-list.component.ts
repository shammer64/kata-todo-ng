import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  template: `
    <div data-testid="to-do-list">
      to-do-list works!
    </div>
  `,
  styleUrls: ['./to-do-list.component.css'],
})
export class ToDoListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
