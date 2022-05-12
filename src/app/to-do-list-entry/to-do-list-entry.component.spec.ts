import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoListEntryComponent } from './to-do-list-entry.component';

describe('ToDoListEntryComponent', () => {
  let component: ToDoListEntryComponent;
  let fixture: ComponentFixture<ToDoListEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToDoListEntryComponent ]
    })
    .compileComponents();
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
    let button = htmlComponent.querySelector('.todo-entry-button');
    expect(button).toBeTruthy();
    expect(button?.innerHTML).toBe('Submit');
  });
});
