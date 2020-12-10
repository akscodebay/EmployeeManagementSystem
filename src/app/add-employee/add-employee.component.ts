import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Title } from '@angular/platform-browser';
import { Globals } from '../globals';
import { AppModule } from '../app.module';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  addForm: FormGroup;
  employee: any = { id: '', name: '', location: '', email: '', mobile: '' };

  constructor(private employeeService: EmployeeService, private titleService: Title, private globals: Globals, private fb: FormBuilder, private router: Router) {

  }

  ngOnInit() {
    this.addForm = this.fb.group({
      empName: ['', [Validators.required, Validators.minLength(3), Validators.pattern('[A-Za-z]*')]],
      location: ['', [Validators.required]],
      email: ['', [Validators.required]],
      mobile: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(10), Validators.pattern('[0-9]*')]]
    });
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle('Add Employee');
  }

  private onSubmit(form: FormGroup) {
    console.log('form submitted' + form.value.empName);
    this.addEmployee(form);
    this.getBack();
  }

  public addEmployee(form) {
    this.globals.idCounter += 1;
    this.employee.id = this.globals.idCounter;
    this.employee.name = form.value.empName;
    this.employee.location = form.value.location;
    this.employee.email = form.value.email;
    this.employee.mobile = form.value.mobile;
    this.employeeService.createEmployee(this.employee).subscribe((ret) => {
      console.log("Employee Details created: ", ret);
    });
  }

  public getBack() {
    this.router.navigate(['/employees']);
  }
}