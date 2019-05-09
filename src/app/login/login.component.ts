import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: any;
  signForm:any;
  dataSaved = false;
  allEmployees: Observable<Employee[]>;
  employeeIdUpdate = null;
  message = null;
  auth= false;

  constructor(private fb:FormBuilder, private modalService:BsModalService,private employeeService: EmployeeService,  private router: Router,
    private currentRoute: ActivatedRoute ) { }

  modalRef: BsModalRef;
  
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
    this.signForm.reset();
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['',Validators.required],
      password:['',Validators.required]
    }),
    this.signForm = this.fb.group({
      name: ['', Validators.required],
      address:['',Validators.required],
      email:['',Validators.required],
      salary:['',Validators.required],
      password:['',Validators.required]
    });
    this.loadAllEmployees();
  }

  onSubmit() {
    console.log(this.loginForm.value);
    this.router.navigate(['/employee']);
  }

  onFormSubmit() {
    this.dataSaved = false;
    const employee = this.signForm.value;
    this.CreateEmployee(employee);
    this.signForm.reset();
  }
  loadAllEmployees() {
    this.allEmployees = this.employeeService.getAllEmployee();
  }
  
  loadEmployeeToEdit(id: number) {
    this.employeeService.getAllEmployeeById(id).subscribe(employee => {
      this.message = null;
      this.dataSaved = false;
      this.employeeIdUpdate = employee;
      this.loginForm.controls['Name'].setValue(employee.Name);
      this.loginForm.controls['Email'].setValue(employee.Email);
      this.loginForm.controls['Address'].setValue(employee.Address);
      this.loginForm.controls['Salary'].setValue(employee.Salary);
      this.loginForm.controls['Password'].setValue(employee.Password);
    });

  }
  CreateEmployee(employee: Employee) {
    if (this.employeeIdUpdate == null) {
      this.employeeService.createEmployee(employee).subscribe(
        () => {
          this.dataSaved = true;
          this.message = 'Record saved Successfully';
          this.loadAllEmployees();
          this.employeeIdUpdate = null;
          this.signForm.reset();
        }
      );
    }
  }
  authentication(email,password){
    if(email == this.loginForm.controls['Email'].value && password == this.loginForm.controls['Password'].value )
    {
      this.message = 'Log in successfully' ; 
      return this.auth = true;
    }
    else{
      return this.message = 'Invalid Email or Password' ;
    }
  }
}

  

