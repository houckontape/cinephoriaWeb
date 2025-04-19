import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavBarComponent} from './shared/nav-bar/nav-bar.component';
import {FooterComponent} from './shared/footer/footer.component';
import {LowerCasePipe, TitleCasePipe, UpperCasePipe} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBarComponent, FooterComponent, UpperCasePipe, LowerCasePipe, TitleCasePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cinephoria';
  subTittle = ' un cinema qui ne fait pas son cinema !!! '
}
