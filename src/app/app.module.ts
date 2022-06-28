import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ToDoListEntryComponent } from './to-do-list-entry/to-do-list-entry.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { ToDoListItemsComponent } from './to-do-list-items/to-do-list-items.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ToDoListEntryComponent,
    ToDoListComponent,
    ToDoListItemsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
