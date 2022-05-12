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
  
  it('should render a list of items', () => {
    const htmlComponent = fixture.nativeElement as HTMLElement;
    expect(htmlComponent.querySelector('.todo-list-items')).toBeTruthy();
  });

});
