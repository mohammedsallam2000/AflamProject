import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient) {

    
   }
   currentUser = null
   saveCurrentUser (){
    let token : any = localStorage.getItem('userToken')
    this.currentUser =  jwtDecode(token)
   
   }
   register(formData : any):Observable <any>
   {
      return this._HttpClient.post('https://route-egypt-api.herokuapp.com/signup',formData); 
   }
   login(formData : any):Observable <any>
   {
      return this._HttpClient.post('https://route-egypt-api.herokuapp.com/signin',formData); 
   }
}
