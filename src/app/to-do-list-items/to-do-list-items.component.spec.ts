import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { render, screen } from '@testing-library/angular';
import { ToDoListItemsComponent } from './to-do-list-items.component';

describe('ToDoListItemsComponent', () => {
  beforeEach(async () => {
    await render(ToDoListItemsComponent, {
      imports: [BrowserModule, CommonModule, FormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });
  });

  it('should render the component', () => {
    expect(screen.getByTestId('to-do-list-items')).toBeDefined();
  });

  it('should render a message when none are passed', () => {
    expect(screen.getByText(/no to-do items/i)).toBeDefined();
  });

});

describe('ToDoListItemsComponent', () => {

  it('should not render message when items are passed', async () => {
    const input = [
      'Change the cat litter',
      'Vacuum the floors',
      'Dust the living room',
    ];
    await render(ToDoListItemsComponent, {
      imports: [BrowserModule, CommonModule, FormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      componentProperties: {
        toDoItems: input,
      },
    });

    expect(screen.queryByText(/no to-do items/i)).toBeFalsy();
  });

  it('should render items when items are passed', async () => {
    const input = [
      'Change the cat litter',
      'Vacuum the floors',
      'Dust the living room',
    ];
    await render(ToDoListItemsComponent, {
      imports: [BrowserModule, CommonModule, FormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      componentProperties: {
        toDoItems: input,
      },
    });

    expect(screen.getByText('Change the cat litter')).toBeDefined();
    expect(screen.getByText('Vacuum the floors')).toBeDefined();
    expect(screen.getByText('Dust the living room')).toBeDefined();
  });

});
