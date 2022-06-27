import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { render, screen, fireEvent } from '@testing-library/angular';
import { ToDoListEntryComponent } from './to-do-list-entry.component';

describe('ToDoListItemsComponent', () => {
  const callback: any = jasmine.createSpy();

  beforeEach(async () => {
    await render(ToDoListEntryComponent, {
      imports: [BrowserModule, FormsModule],
      componentProperties: {
        onNewItem: callback,
      },
    });
  });

  it('should render the component', () => {
    expect(screen.getByTestId('to-do-list-entry')).toBeDefined();
  });

  it('should render a textbox', () => {
    const textbox = screen.getByRole('textbox', {
      name: /new to-do/i,
    });

    expect(textbox).toBeDefined();
  });

  it('should render a button', () => {
    const button = screen.getByRole('button', {
      name: /add item/i
    });

    expect(button).toBeDefined();
  });

  it('should disable button when textbox is empty', () => {
    const button: HTMLButtonElement = screen.getByRole('button', {
      name: /add item/i,
    });

    expect(button.disabled).toBeTrue();
  });

  it('should enable button when texbox is not empty', () => {
    const button: HTMLButtonElement = screen.getByRole('button', {
      name: /add item/i,
    });
    const textbox: HTMLInputElement = screen.getByRole('textbox', {
      name: /new to-do/i,
    });

    fireEvent.input(textbox, { target: { value: 'Mow the lawn' } });

    expect(textbox.value).toBe('Mow the lawn');
    expect(button.disabled).toBeFalsy();
  });

  it('should emit an event when button is pressed', () => {
    const button: HTMLButtonElement = screen.getByRole('button', {
      name: /add item/i,
    });
    const textbox: HTMLInputElement = screen.getByRole('textbox', {
      name: /new to-do/i,
    });

    fireEvent.input(textbox, { target: { value: 'Mow the lawn' } });
    fireEvent.click(button);

    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith('Mow the lawn');
  });
});
