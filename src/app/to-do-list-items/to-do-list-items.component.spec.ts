import { render, screen } from '@testing-library/angular';
import { ToDoListItemsComponent } from './to-do-list-items.component';

describe('ToDoListItemsComponent', () => {
  beforeEach(async () => {
    await render(ToDoListItemsComponent, {});
  });

  it('should render the component', () => {
    expect(screen.getByTestId('to-do-list-items')).toBeDefined();
  });

  // should render no items when none are passed
  // should render items when items are passed
 
});
