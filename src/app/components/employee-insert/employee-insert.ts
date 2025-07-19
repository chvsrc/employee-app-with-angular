import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Employee } from '../../models/employee.model';
import { Department } from '../../models/department.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-insert',
  imports: [CommonModule, FormsModule], // Declare needed modules here
  templateUrl: './employee-insert.html',
  styleUrls: ['./employee-insert.css']
})
export class EmployeeInsertComponent {
  @Input() departments: Department[] = [];
  @Output() save = new EventEmitter<Employee>();
  @Output() cancel = new EventEmitter<void>();

  newEmp: Employee = { empId: 0, name: '', departmentId: 0 };
}
