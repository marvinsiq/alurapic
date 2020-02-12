import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SigninComponent } from './signin/signin.component';
import { RouterModule } from '@angular/router';
import { VmessageModule } from '../shared/components/vmessage/vmessage.module';
import { SignUpComponent } from './signup/signup.component';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [SigninComponent, SignUpComponent, HomeComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    VmessageModule,
    RouterModule
  ]
})
export class HomeModule { }
