import { Component } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {AuthService} from '../auth.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent  {

  error : string = ''
  registerForm = new FormGroup({
    first_name : new FormControl(null,[Validators.minLength(3),Validators.maxLength(10),Validators.required]),
    last_name : new FormControl(null,[Validators.minLength(3),Validators.maxLength(10),Validators.required]),
    age : new FormControl(null,[Validators.min(16),Validators.max(60),Validators.required]),
    email : new FormControl(null,[Validators.email,Validators.required]),
    password : new FormControl(null,[Validators.required,Validators.pattern('^[A-Z][a-z0-9]{3,8}$')])
 

  })
  constructor(private _AuthService : AuthService, private _Router : Router){
  }
  ngOnInit():void 
  {
    
  }

  SubmitRegisterForm(registerForm : FormGroup){
this._AuthService.register(registerForm.value).subscribe((response )=>{

  if(response.message == 'success')
  {
    localStorage.setItem('userTokin',response.token)
    this._Router.navigate(['/login'])
  }
  else{
   this.error = response.error.email.message
  }
})
  } 
} 