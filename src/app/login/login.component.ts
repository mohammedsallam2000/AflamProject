import { Component } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {AuthService} from '../auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private _AuthService : AuthService,private _Router:Router){

  }
  error : string = ''

  loginForm = new FormGroup({
    email : new FormControl(null,[Validators.email,Validators.required]),
    password : new FormControl(null,[Validators.required,Validators.pattern('^[A-Z][a-z0-9]{3,8}$')])
 

  })

  SubmitloginForm(loginForm : FormGroup){
    this._AuthService.register(loginForm.value).subscribe((response )=>{

      if(response.message == 'success')
      {
        localStorage.setItem('userTokin',response.token)
        this._Router.navigate(['/home'])
      }
      else{
       this.error = response.error.message
      }
    })
  }
}
