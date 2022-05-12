import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoListItemsComponent } from './to-do-list-items.component';

describe('ToDoListItemsComponent', () => {
  let component: ToDoListItemsComponent;
  let fixture: ComponentFixture<ToDoListItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToDoListItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoListItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should not render a list of items when no data is passed', () => {
    const htmlComponent = fixture.nativeElement as HTMLElement;
    expect(htmlComponent.querySelector('.todo-list-items')).toBeFalsy();
  });

  it('should render a list of items when data is passed', () => {
    component.todoItems = ['Dummy'];
    fixture.detectChanges();
    const htmlComponent = fixture.nativeElement as HTMLElement;
    expect(htmlComponent.querySelector('.todo-list-items')).toBeTruthy();
  });

  it('should render all items passed in a list', () => {
    const expectedItems = ['Take out the trash', 'Weed the garden', 'Mow the lawn'];
    component.todoItems = expectedItems;
    fixture.detectChanges();

    const htmlComponent = fixture.nativeElement as HTMLElement;
    const actualItems = htmlComponent.querySelectorAll('.todo-list-item');
    expect(actualItems.length).toBe(3);
    expect(actualItems[0]?.textContent).toBe(expectedItems[0]);
    expect(actualItems[1]?.textContent).toBe(expectedItems[1]);
    expect(actualItems[2]?.textContent).toBe(expectedItems[2]);
  });

});
