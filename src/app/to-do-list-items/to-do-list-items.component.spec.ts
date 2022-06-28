import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { render, screen } from '@testing-library/angular';
import { ToDoListItemsComponent } from './to-do-list-items.component';

describe('ToDoListItemsComponent', () => {

  beforeEach(async () => {
    await render(ToDoListItemsComponent, {
      componentProperties: {
        toDoItems: [],
      },
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });
  });

  it('should render the component', () => {
    expect(screen.getByTestId('to-do-list-items')).toBeDefined();
  });

  it('should render a message when none are passed', () => {
    const noItemsMessage = screen.getByText(/no to-do items/i);

    expect(noItemsMessage).toBeDefined();
  });
});

describe('ToDoListItemsComponent', () => {
  it('should render items when items are passed', async () => {
    const inputItems = [
      'Mow the lawn',
      'Take out the trash',
      'Weed the garden',
    ];
    await render(ToDoListItemsComponent, {
      componentProperties: {
        toDoItems: inputItems,
      },
    });

    expect(screen.getByText('Mow the lawn')).toBeDefined();
    expect(screen.getByText('Take out the trash')).toBeDefined();
    expect(screen.getByText('Weed the garden')).toBeDefined();
  });

});
