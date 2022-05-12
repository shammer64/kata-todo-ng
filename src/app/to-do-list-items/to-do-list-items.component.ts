import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-to-do-list-items',
  templateUrl: './to-do-list-items.component.html',
  styleUrls: ['./to-do-list-items.component.css']
})
export class ToDoListItemsComponent implements OnInit {

  @Input() todoItems: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
