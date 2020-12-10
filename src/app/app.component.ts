import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public constructor(private titleService: Title, private employeeService: EmployeeService) { }

  public setTitle(newTitle: string) {
    this.titleService.setTitle('Edit Employee ');
  }

  private name: String = 'Employee Management System';

  employees: any[] = [];

  ngOnInit() {

  }
}
