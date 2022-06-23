import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-list-items',
  template: `
    <div data-testid="to-do-list-items">
      to-do-list-items works!
    </div>
  `,
  styleUrls: ['./to-do-list-items.component.css'],
})
export class ToDoListItemsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
