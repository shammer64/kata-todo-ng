import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-list-entry',
  templateUrl: './to-do-list-entry.component.html',
  styleUrls: ['./to-do-list-entry.component.css'],
})
export class ToDoListEntryComponent implements OnInit {
  handleNewToDoItem() {
    console.log("Button clicked")
  }
  newToDoItem: string = '';

  constructor() {}

  ngOnInit(): void {}
}
