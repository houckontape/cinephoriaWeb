import {Component, inject, OnInit} from '@angular/core';
import {Movie} from '../../core/model/movie';
import {MovieService} from '../../core/service/movie.service';
import {MovieCardComponent} from '../../shared/movie-card/movie-card.component';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [
    MovieCardComponent,
    NgForOf
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  movieList:Movie[]=[];
  movieService:MovieService=inject(MovieService);
    constructor() {}
  ngOnInit(): void {
    this.movieService.getAllMovies().subscribe(
      (data:Movie[])=>{
        console.log(this.movieList=data);
      }
    )
  }

}
