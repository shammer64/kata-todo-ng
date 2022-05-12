import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { ToDoListEntryComponent } from './to-do-list-entry.component';

describe('ToDoListEntryComponent', () => {
  let component: ToDoListEntryComponent;
  let fixture: ComponentFixture<ToDoListEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToDoListEntryComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [FormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoListEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a text entry field', () => {
    const htmlComponent = fixture.nativeElement as HTMLElement;
    expect(htmlComponent.querySelector('.todo-entry-text')).toBeTruthy();
  });

  it('should render a "Submit" button', () => {
    const htmlComponent = fixture.nativeElement as HTMLElement;
    const button = htmlComponent.querySelector('.todo-entry-button');
    expect(button).toBeTruthy();
    expect(button?.innerHTML).toBe('Submit');
  });

  it('should update component property when text is entered', () => {
    const input = fixture.nativeElement.querySelector('.todo-entry-text');
    input.value = 'Mow the lawn';
    input.dispatchEvent(new Event('input'));
 
    fixture.detectChanges();

    expect(component.newToDoItem).toEqual('Mow the lawn');
  });

  it('should disable "Submit" button until text is entered', () => {
    const button = fixture.nativeElement.querySelector('.todo-entry-button');
    expect(button.disabled).toBeTruthy();
  });

  it('should enable "Submit" button after text is entered', () => {
    const button = fixture.nativeElement.querySelector('.todo-entry-button');
    const input = fixture.nativeElement.querySelector('.todo-entry-text');
    input.value = 'Mow the lawn';
    input.dispatchEvent(new Event('input'));

    fixture.detectChanges();
    expect(button.disabled).toBeFalsy();
  });

  xit('should invoke callback when "Submit" button is pressed', () => {
    
  });
});
