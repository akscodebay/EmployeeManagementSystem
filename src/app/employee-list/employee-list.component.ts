import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { EmployeeService } from '../employee.service';
import { Globals } from '../globals';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public constructor(private titleService: Title, private employeeService: EmployeeService, private globals: Globals) { }

  public setTitle(newTitle: string) {
    this.titleService.setTitle('Employee List');
  }

  employees: any[] = [];

  ngOnInit() {
    this.employeeService.getEmployees().subscribe((data: any[]) => {
      console.log(data);
      this.employees = data;
      this.globals.empcount = data.length;
    })
  }

  public setId(id) {
    this.globals.id = id;
    console.log('id set in global is: ' + id);
  }

}