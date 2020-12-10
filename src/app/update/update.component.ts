import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Title } from '@angular/platform-browser';
import { Globals } from '../globals';
import { AppModule } from '../app.module';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})

export class UpdateEmpComponent implements OnInit {

  employees: any = [];
  updateForm: FormGroup;

  constructor(private employeeService: EmployeeService, private titleService: Title, private globals: Globals, private fb: FormBuilder, private router: Router) {
    this.getEmployee(this.globals.id);
  }

  ngOnInit() {
    this.updateForm = this.fb.group({
      empName: ['' + this.employees.name, [Validators.required, Validators.minLength(3), Validators.pattern('[A-Za-z]*')]],
      location: ['' + this.employees.location, [Validators.required]],
      email: ['' + this.employees.email, [Validators.required]],
      mobile: ['' + this.employees.mobile, [Validators.required, Validators.minLength(8), Validators.maxLength(10), Validators.pattern('[0-9]*')]]
    });
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle('Employee Details');
  }

  private getEmployee(id) {
    this.employeeService.getEmployee(id).subscribe((data: any[]) => {
      console.log(data);
      this.employees = data;
      console.log("name: " + this.employees.name);
      this.setValueForm();
    })
  }

  private setValueForm() {
    this.updateForm.setValue({
      empName: '' + this.employees.name,
      location: '' + this.employees.location,
      email: '' + this.employees.email,
      mobile: '' + this.employees.mobile
    });
  }

  private onSubmit(form: FormGroup) {
    console.log('form submitted' + form.value.empName);
    this.updateEmployee(form);
    this.getBack();
  }

  public updateEmployee(form) {
    this.employees.id = this.globals.id;
    this.employees.name = form.value.empName;
    this.employees.location = form.value.location;
    this.employees.email = form.value.email;
    this.employees.mobile = form.value.mobile;
    this.employeeService.updateEmployee(this.employees).subscribe((ret) => {
      console.log("Employee Details updated: ", this.employees);
    });
  }

  public getBack() {
    this.router.navigate(['/employees']);
  }

}