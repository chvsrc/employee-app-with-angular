import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Employee } from '../../models/employee.model';
import { Department } from '../../models/department.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-update',
    imports: [CommonModule, FormsModule], // Declare needed modules here
  templateUrl: './employee-update.html',
  styleUrls: ['./employee-update.css']
})
export class EmployeeUpdateComponent {
  @Input() emp!: Employee;
  @Input() departments: Department[] = [];
  @Output() update = new EventEmitter<Employee>();
  @Output() cancel = new EventEmitter<void>();
}
