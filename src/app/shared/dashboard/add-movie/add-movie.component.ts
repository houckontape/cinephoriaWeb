import {Component, inject} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {Movie} from '../../../core/model/movie';
import {MovieService} from '../../../core/service/movie.service';
import {isObservable, Observable} from 'rxjs';

@Component({
  selector: 'app-add-movie',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './add-movie.component.html',
  styleUrl: './add-movie.component.css'
})
export class AddMovieComponent {
  movieService:MovieService=inject(MovieService);

  movieForm=new FormGroup(
    {
      title: new FormControl(''),
      synopsis: new FormControl(''),
      poster: new FormControl(''),
      trailer: new FormControl(''),
      releaseDate: new FormControl(''),
      note: new FormControl(''),
      weLike: new FormControl(''),
      duration: new FormControl(''),
      genreId: new FormControl(''),
    }
  )

   onSubmit(){
     if (this.movieForm.valid) {
       this.movieService.addMovies(this.movieForm)
     }

   }
}
