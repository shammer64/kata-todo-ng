import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent, ToDoListComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render a ToListComponent', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const childComponent = fixture.debugElement.query(
      By.directive(ToDoListComponent)
    );
    expect(childComponent).toBeTruthy();
  })
});
