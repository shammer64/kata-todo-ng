import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { fireEvent, render, screen } from '@testing-library/angular';
import { ToDoListEntryComponent } from './to-do-list-entry.component';

describe('ToDoListEntryComponent', () => {
  const callback = new EventEmitter<string>();

  beforeEach(async () => {
    await render(ToDoListEntryComponent, {
      imports: [BrowserModule, CommonModule, FormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      componentProperties: {
        onNewTodo: callback,
      }
    });
  });

  it('should render the component', () => {
    expect(screen.getByTestId('to-do-list-entry')).toBeDefined();
  });

  it('should render a textbox', () => {
    expect(screen.getByRole('textbox', { name: /new to-do/i })).toBeDefined();
  });

  it('should render a button', () => {
    expect(screen.getByRole('button', { name: /add/i })).toBeDefined();
  });

  it('should disable button when textbox is empty', () => {
    const submitButton: HTMLButtonElement = screen.getByRole('button', { name: /add/i });

    expect(submitButton.disabled).toBeTrue();
  });

  it('should enable button when texbox is not empty', () => {
    const submitButton: HTMLButtonElement = screen.getByRole('button', {
      name: /add/i,
    });
    const textbox: HTMLInputElement = screen.getByRole('textbox', { name: /new to-do/i });

    fireEvent.input(textbox, { target: { value: 'Change the cat litter'}});

    //expect(textbox.value).toBe('Change the litter');
    expect(submitButton.disabled).toBeFalse();
  });

  it('should emit an event when button is pressed', () => {
    const submitButton: HTMLButtonElement = screen.getByRole('button', {
      name: /add/i,
    });
    const textbox: HTMLInputElement = screen.getByRole('textbox', {
      name: /new to-do/i,
    });

    let emittedValue: string = '';
    callback.subscribe((newItem) => { emittedValue = newItem});
    fireEvent.input(textbox, { target: { value: 'Change the cat litter' } });
    fireEvent.click(submitButton);

    expect(emittedValue).toBe('Change the cat litter');
  });
});
