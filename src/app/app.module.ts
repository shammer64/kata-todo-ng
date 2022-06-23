import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToDoListEntryComponent } from './to-do-list-entry/to-do-list-entry.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { ToDoListItemsComponent } from './to-do-list-items/to-do-list-items.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoListEntryComponent,
    ToDoListComponent,
    ToDoListItemsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
