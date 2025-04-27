import {Component, inject} from '@angular/core';
import {AuthService} from '../../../core/service/auth.service';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {Auth} from '../../../core/model/auth';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
authService:AuthService=inject(AuthService);

// creation du formulaire
loginForm=new FormGroup(
  {
    login:new FormControl(''),
    password:new FormControl(''),
  }
)

  onSubmit(){
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm)
    }
  }

}
