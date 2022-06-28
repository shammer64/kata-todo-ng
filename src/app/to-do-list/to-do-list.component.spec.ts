import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { render, screen } from '@testing-library/angular';
import { ToDoListComponent } from './to-do-list.component';

describe('ToDoListComponent', () => {
  beforeEach(async () => {
    await render(ToDoListComponent, {
      imports: [BrowserModule, CommonModule, FormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });
  });

  it('should render the component', () => {
    expect(screen.getByTestId('to-do-list')).toBeDefined();
  });

  // should render a ToDoListEntryComponent
  // should render a ToDoListItemsComponent
  // should render no items when no items are passed to ToDoListItemsComponent
  // should render items when items are passed to ToDoListItemsComponent
  // should update state on new item event from ToDoListEntryComponent
});
