import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToDoListEntryComponent } from './to-do-list-entry/to-do-list-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoListEntryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
