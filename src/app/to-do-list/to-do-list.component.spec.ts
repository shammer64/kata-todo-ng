import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { ToDoListEntryComponent } from '../to-do-list-entry/to-do-list-entry.component';
import { ToDoListItemsComponent } from '../to-do-list-items/to-do-list-items.component';

import { ToDoListComponent } from './to-do-list.component';

describe('ToDoListComponent', () => {
  let component: ToDoListComponent;
  let fixture: ComponentFixture<ToDoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ToDoListComponent,
        ToDoListEntryComponent,
        ToDoListItemsComponent,
      ],
      imports: [FormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a ToDoListEntryComponent', () => {
    const childComponent = fixture.debugElement.query(
      By.directive(ToDoListEntryComponent)
    );

    expect(childComponent).toBeTruthy();
  });

  it('should render a ToDoListItemsComponent', () => {
    const childComponent = fixture.debugElement.query(
      By.directive(ToDoListItemsComponent)
    );

    expect(childComponent).toBeTruthy();
  });

  it('should render title', () => {
    const htmlComponent = fixture.nativeElement as HTMLElement;
    
    expect(htmlComponent.querySelector('.todo-title')?.textContent)
      .toContain("My To-Do List");
  });

});
