import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { EmployeeListComponent } from './components/employee-list/employee-list';

@Component({
  selector: 'app-root',
  imports: [
    // RouterOutlet,
    EmployeeListComponent
  ],
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // protected readonly title = signal('employee-app-with-angular');
}
