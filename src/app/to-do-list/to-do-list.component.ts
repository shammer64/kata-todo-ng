import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  toDoListItems: string[] = [];
  handleNewToDoItem(newToDoItem: string) {
    this.toDoListItems.push(newToDoItem);
    console.log('Received event' + newToDoItem);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
