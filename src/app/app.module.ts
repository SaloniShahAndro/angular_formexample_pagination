import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { routing } from './/app-routing.module';

import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {UserService} from "./user.service";
import { AuthService } from 'src/app/auth.service';
import { PagerService } from "./pager.service";


import { FormsModule } from '@angular/forms';
import {FilterPipe} from './filterPipe'



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddUserComponent,
    EditUserComponent,
    ListUserComponent,
    FilterPipe 
  ],
  imports: [
    BrowserModule,
    routing,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    
  ],
  providers: [UserService,AuthService,PagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
