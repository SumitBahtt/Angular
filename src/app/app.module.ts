import { BrowserModule } from '@angular/platform-browser';  
import { NgModule } from '@angular/core';  
import { EmployeeService } from './employee.service';  
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
import { HttpClientModule } from '@angular/common/http';  
import {    
  MatButtonModule, MatMenuModule, MatDatepickerModule,MatNativeDateModule , MatIconModule, MatCardModule, MatSidenavModule,MatFormFieldModule,  
  MatInputModule, MatTooltipModule, MatToolbarModule  
} from '@angular/material';  
import { MatRadioModule } from '@angular/material/radio';  
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  
import { ModalModule } from 'ngx-bootstrap/modal';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
  
import { AppRoutingModule } from './app-routing.module';  
import { AppComponent } from './app.component';  
import { EmployeeComponent } from './employee/employee.component';  
import 'hammerjs';
import { HeaderComponent } from './header/header.component'
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

  
@NgModule({  
  declarations: [  
    AppComponent,  
    EmployeeComponent, 
    HeaderComponent, 
    LoginComponent, HomeComponent 
  ],  
  imports: [  
    BrowserModule,  
    FormsModule,  
    ReactiveFormsModule,  
    HttpClientModule,  
    BrowserAnimationsModule,  
    MatButtonModule,  
    MatMenuModule,  
    MatDatepickerModule,  
    MatNativeDateModule,  
    MatIconModule,  
    MatRadioModule,  
    MatCardModule,  
    MatSidenavModule,  
    MatFormFieldModule,  
    MatInputModule,  
    MatTooltipModule,  
    MatToolbarModule,  
    AppRoutingModule,
    ModalModule.forRoot(),
    AngularFontAwesomeModule
  ],  
  providers: [HttpClientModule, EmployeeService,MatDatepickerModule],  
  bootstrap: [AppComponent]  
})  
export class AppModule { }  
