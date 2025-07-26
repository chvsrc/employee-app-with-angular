import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest';
import { Employee } from '../../models/employee.model';
import { Department } from '../../models/department.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmployeeInsertComponent } from '../employee-insert/employee-insert';
import { EmployeeUpdateComponent } from '../employee-update/employee-update';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.html',
  styleUrls: ['./employee-list.css'],
  imports: [
    CommonModule,
    FormsModule,
    EmployeeInsertComponent,
    EmployeeUpdateComponent,
    ConfirmDialogComponent
  ]
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];
  departments: Department[] = [];
  activeComponent: 'list' | 'insert' | 'update' | 'delete' = 'list';
  selectedEmp: Employee | null = null;

  constructor(private restService: RestService) {}

  ngOnInit(): void {
    this.loadData();
  }

  async loadData() {
    // this.employees = await this.restService.getEmployees();
    // this.departments = await this.restService.getDepartments();
    const [emps, deps] = await Promise.all([
      this.restService.getEmployees(),
      this.restService.getDepartments()
    ]);
    this.employees = await emps;
    this.departments = await deps;
  }

  startInsert() {
    this.selectedEmp = null;
    this.activeComponent = 'insert';
  }

  startUpdate(emp: Employee) {
    this.selectedEmp = { ...emp };
    this.activeComponent = 'update';
  }

  startDelete(emp: Employee) {
    this.selectedEmp = emp;
    this.activeComponent = 'delete';
  }

  async onAdd(emp: Employee) {
    emp.empId = Math.max(...this.employees.map(e => e.empId), 0) + 1;
    await this.restService.addEmployee(emp);
    this.activeComponent = 'list';
    this.loadData();
  }

  async onUpdate(emp: Employee) {
    await this.restService.updateEmployee(emp);
    this.activeComponent = 'list';
    this.loadData();
  }

  async confirmDelete() {
    if (this.selectedEmp) {
      await this.restService.deleteEmployee(this.selectedEmp.empId);
      this.activeComponent = 'list';
      this.selectedEmp = null;
      this.loadData();
    }
  }

  cancelAction() {
    this.activeComponent = 'list';
    this.selectedEmp = null;
  }
  
  getDepartmentName(departmentId: number): string {
    const dept = this.departments.find(d => d.departmentId === departmentId);
    return dept ? dept.department : '';
  }
}
