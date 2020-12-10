import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { DeleteEmpComponent } from './delete/delete.component';
import { UpdateEmpComponent } from './update/update.component';


const routes: Routes = [
  { path: 'employees', component: EmployeeListComponent },
  { path: 'addEmployee', component: AddEmployeeComponent },
  { path: 'employees/details/:id', redirectTo: '/details/:id' },
  { path: 'details/:id', component: EmployeeDetailsComponent },
  { path: 'employees/deleteEmployee/:id', redirectTo: '/deleteEmployee/:id' },
  { path: 'deleteEmployee/:id', component: DeleteEmpComponent },
  { path: 'employees/update', redirectTo: '/editEmployee' },
  { path: 'editEmployee', component: UpdateEmpComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [EmployeeListComponent, AddEmployeeComponent, EmployeeDetailsComponent, DeleteEmpComponent, UpdateEmpComponent];