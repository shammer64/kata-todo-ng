import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-list-items',
  template: `
    <p>
      to-do-list-items works!
    </p>
  `,
  styleUrls: ['./to-do-list-items.component.css']
})
export class ToDoListItemsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
