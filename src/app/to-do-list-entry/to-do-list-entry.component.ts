import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-to-do-list-entry',
  templateUrl: './to-do-list-entry.component.html',
  styleUrls: ['./to-do-list-entry.component.css'],
})
export class ToDoListEntryComponent implements OnInit {
  @Output() newToDoRequest: EventEmitter<string> = new EventEmitter();
  handleNewToDoItem() {
    this.newToDoRequest.emit(this.newToDoItem);
    this.newToDoItem = '';
  }
  newToDoItem: string = '';

  constructor() {}

  ngOnInit(): void {}
}
