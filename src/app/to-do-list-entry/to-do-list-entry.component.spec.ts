import { render, screen } from '@testing-library/angular';
import { ToDoListEntryComponent } from './to-do-list-entry.component';

describe('ToDoListItemsComponent', () => {
  beforeEach(async () => {
    await render(ToDoListEntryComponent, {});
  });

  it('should render the component', () => {
    expect(screen.getByTestId('to-do-list-entry')).toBeDefined();
  });

  // should render a textbox
  // should render a button
  // should disable button when textbox is empty
  // should enable button when texbox is not empty
  // should emit an event when button is pressed
});
