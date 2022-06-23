import { render, screen } from '@testing-library/angular';
import { ToDoListEntryComponent } from './to-do-list-entry.component';

describe('ToDoListItemsComponent', () => {
  beforeEach(async () => {
    await render(ToDoListEntryComponent, {});
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
    })

    expect(button).toBeDefined();
  });
  // should disable button when textbox is empty
  // should enable button when texbox is not empty
  // should emit an event when button is pressed
});
