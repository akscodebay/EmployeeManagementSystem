import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  public id: string;

  constructor(private employeeService: EmployeeService, private route: ActivatedRoute, private router: Router, private titleService: Title) {
    this.id = this.route.snapshot.paramMap.get('id'); console.log('id ' + this.id);

    this.getEmployee();
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle('Employee Details');
  }

  employees: any[] = [];

  public getEmployee() {
    this.employeeService.getEmployee(this.id).subscribe((data: any[]) => {
      console.log(data);
      this.employees = data;
      console.log(this.employees);
    })

  }

  public getBack() {
    this.router.navigate(['/employees']);
  }

  ngOnInit() {
  }

}