import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  template: `
    <p>
      to-do-list works!
    </p>
  `,
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
