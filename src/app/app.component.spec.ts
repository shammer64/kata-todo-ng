import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserModule, By } from '@angular/platform-browser';
import { render } from '@testing-library/angular';
import { AppComponent } from './app.component';
import { ToDoListEntryComponent } from './to-do-list-entry/to-do-list-entry.component';
import { ToDoListItemsComponent } from './to-do-list-items/to-do-list-items.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ToDoListComponent,
        ToDoListEntryComponent,
        ToDoListItemsComponent,
      ],
      imports: [BrowserModule, CommonModule, FormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the ToDoListComponent', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const childComponent = fixture.debugElement.query(By.css('[data-testid="to-do-list"]'));

    expect(childComponent).toBeDefined();
  });

});
