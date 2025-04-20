import {Component, Input} from '@angular/core';
import {Movie} from '../../core/model/movie';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-movie-card',
  imports: [
    NgIf
  ],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.css'
})
export class MovieCardComponent {
  @Input() movie!:Movie;
  constructor() { }
}
