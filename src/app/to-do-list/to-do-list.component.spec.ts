import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { fireEvent, render, screen } from '@testing-library/angular';
import { ToDoListEntryComponent } from '../to-do-list-entry/to-do-list-entry.component';
import { ToDoListItemsComponent } from '../to-do-list-items/to-do-list-items.component';
import { ToDoListComponent } from './to-do-list.component';

describe('ToDoListComponent', () => {
  beforeEach(async () => {
    await render(ToDoListComponent, {
      imports: [BrowserModule, CommonModule, FormsModule],
      declarations: [ToDoListEntryComponent, ToDoListItemsComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });
  });

  it('should render the component', () => {
    expect(screen.getByTestId('to-do-list')).toBeDefined();
  });

  it('should render a ToDoListEntryComponent', () => {
    expect(screen.getByTestId('to-do-list-entry')).toBeDefined();
  });

  it('should render a ToDoListItemsComponent', () => {
    expect(screen.getByTestId('to-do-list-items')).toBeDefined();
  });

  it('should render message when no items are passed to ToDoListItemsComponent', () => {
    expect(screen.getByText(/no to-do items/i)).toBeDefined();
  });

  it('should update state on new item event from ToDoListEntryComponent', () => {
    const submitButton: HTMLButtonElement = screen.getByRole('button', {
      name: /add/i,
    });
    const textbox: HTMLInputElement = screen.getByRole('textbox', {
      name: /new to-do/i,
    });

    fireEvent.input(textbox, { target: { value: 'Change the cat litter' } });
    fireEvent.click(submitButton);

    expect(screen.getByText('Change the cat litter')).toBeDefined();
  });

});
