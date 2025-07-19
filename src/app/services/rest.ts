import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';
import { Department } from '../models/department.model';

@Injectable({ providedIn: 'root' })
export class RestService {
  private employees: Employee[] = [
    { empId: 1, name: 'John', departmentId: 1 },
    { empId: 2, name: 'Jane', departmentId: 2 },
    { empId: 3, name: 'Alice', departmentId: 1 },
    { empId: 4, name: 'Bob', departmentId: 3 }
  ];

  private departments: Department[] = [
    { departmentId: 1, department: 'IT', head: 'David' },
    { departmentId: 2, department: 'HR', head: 'Sophie' },
    { departmentId: 3, department: 'Finance', head: 'Emma' }
  ];

  private delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async getEmployees(): Promise<Employee[]> {
    await this.delay(1000);
    return [...this.employees];
  }

  async addEmployee(emp: Employee): Promise<void> {
    await this.delay(5000);
    this.employees.push(emp);
  }

  async updateEmployee(updatedEmp: Employee): Promise<void> {
    // debugger;
    await this.delay(300);
    const index = this.employees.findIndex(e => e.empId === updatedEmp.empId);
    if (index > -1) this.employees[index] = updatedEmp;
  }

  async deleteEmployee(id: number): Promise<void> {
    await this.delay(300);
    this.employees = this.employees.filter(e => e.empId !== id);
  }

  async getDepartments(): Promise<Department[]> {
    await this.delay(300);
    return [...this.departments];
  }

  async addDepartment(dep: Department): Promise<void> {
    await this.delay(300);
    this.departments.push(dep);
  }

  async updateDepartment(updatedDep: Department): Promise<void> {
    await this.delay(300);
    const index = this.departments.findIndex(d => d.departmentId === updatedDep.departmentId);
    if (index > -1) this.departments[index] = updatedDep;
  }

  async deleteDepartment(id: number): Promise<void> {
    await this.delay(300);
    this.departments = this.departments.filter(d => d.departmentId !== id);
  }
}
