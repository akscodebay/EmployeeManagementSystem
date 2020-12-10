import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  SERVER_URL: string = "../";

  constructor(private httpClient: HttpClient) {
    console.log(this.SERVER_URL + 'employees');
  }

  public getEmployees() {
    return this.httpClient.get(this.SERVER_URL + 'employees');
  }

  public getEmployee(empId) {
    return this.httpClient.get(`${this.SERVER_URL + 'employees'}/${empId}`);
  }
  public createEmployee(employee: { id: number, name: string, location: string, email: string, mobile: number }) {
    return this.httpClient.post(`${this.SERVER_URL + 'employees'}`, employee);
  }

  public deleteEmployee(empId) {
    return this.httpClient.delete(`${this.SERVER_URL + 'employees'}/${empId}`)
  }
  public updateEmployee(employee: { id: number, name: string, location: string, email: string, mobile: number }) {
    return this.httpClient.put(`${this.SERVER_URL + 'employees'}/${employee.id}`, employee);
  }

}