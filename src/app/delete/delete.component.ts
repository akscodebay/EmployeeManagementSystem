import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router'
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteEmpComponent implements OnInit {

  public id: string;

  constructor(private employeeService: EmployeeService, private route: ActivatedRoute, private router: Router) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.deleteEmployee(this.id);
    console.log('id' + this.id);
    this.router.navigate(['/employees']);
  }

  ngOnInit() {
  }

  public deleteEmployee(empId) {
    this.employeeService.deleteEmployee(empId).subscribe((newdata) => {
      console.log("Employee deleted: ", empId);
    })
  }
}