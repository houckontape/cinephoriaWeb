import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../model/user';
import {FormGroup} from '@angular/forms';
import {Movie} from '../model/movie';
import {Auth} from '../model/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly apiUrl = 'https://cinephoria.tuxfarm.ovh/';
  auth: Auth | undefined;
  role:string='user';
  isAuthenticated=false;
  constructor(private http: HttpClient) { }

  register(user:any){
    return this.http.post('https://cinephoria.tuxfarm.ovh/register', user).subscribe(
      user=>console.log(user)
    );
  }

  login(user:FormGroup){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json', // Exemple de header Content-Type
    });
    console.log(user.value);

    return this.http.post<Auth>(this.apiUrl + 'login', user.value, {headers: headers})
      .subscribe(auth=>{
        if(auth.apiKey){
          auth.login=user.value.login;
          auth.isAuth=true;
          this.isAuthenticated=true;
          this.role=auth.role;
          sessionStorage.setItem('apiKey', auth.apiKey);
          console.log('api : ',auth);
        }else{
          auth.isAuth=false;
          console.log('error');
        }

      }
    );
  }

  getAPiKey(){
    return this.auth?.apiKey;
  }


}
