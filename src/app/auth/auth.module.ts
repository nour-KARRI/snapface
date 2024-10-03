import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login.component';
import { AuthRoutingModule } from './auth-routing.module';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule
  ],
  exports:[
    LoginComponent
  ]
})
export class AuthModule { }
