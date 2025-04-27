import {Component, inject} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {NgIf} from '@angular/common';
import {AuthService} from '../../core/service/auth.service';
import {Auth} from '../../core/model/auth';

@Component({
  selector: 'app-nav-bar',
  imports: [
    RouterLink,
    RouterLinkActive,
    NgIf
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
authService:AuthService=inject(AuthService);
auth:Auth|null=null;
}
