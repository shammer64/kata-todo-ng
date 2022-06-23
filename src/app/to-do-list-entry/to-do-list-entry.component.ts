import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-list-entry',
  template: `
    <p>
      to-do-list-entry works!
    </p>
  `,
  styleUrls: ['./to-do-list-entry.component.css']
})
export class ToDoListEntryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
