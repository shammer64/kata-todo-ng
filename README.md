# Kata Design

Create a simple ToDo list app

1. Write structural and visual tests for a ToDoListEntry component

- Generate the component (ng generate component ToDoListEntry)
- Review the creational test generated with the component
- Contains a text entry field
- Contains a submit button

2. Write structural and visual tests for a ToDoListItems component

- Generate the component (ng generate component ...)
- Review the creational test generated with the component
- Contains a list of ToDo items

3. Write structural and visual tests for a ToDoList component

- Generate the component (ng generate component ...)
- Review the creational test generated with the component
- Contains a ToDoListEntry component
- Contains a ToDoListItems component

4. Write functional test for the ToDoListItems

- Renders a list of items passed from parent

5. Write functional tests for the ToDoListEntry component

- Submit button disabled with no text
- Submit button enabled with text
- Calls a callback function when submit button pressed

6. Write functional tests for the ToDoList component

- Handles callback from ToDoListEntry component
- Passes updated ToDo items to ToDoListItems component

# NgTodoKata

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
