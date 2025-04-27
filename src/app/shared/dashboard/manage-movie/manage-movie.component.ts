import {Component, inject, OnInit} from '@angular/core';
import {NgForOf} from '@angular/common';
import {Movie} from '../../../core/model/movie';
import {MovieService} from '../../../core/service/movie.service';
import {AddMovieComponent} from '../add-movie/add-movie.component';
@Component({
  selector: 'app-manage-movie',
  imports: [
    NgForOf,
    AddMovieComponent
  ],
  templateUrl: './manage-movie.component.html',
  styleUrl: './manage-movie.component.css'
})


export class ManageMovieComponent implements OnInit {
  movieList:Movie[]=[];
  movieService:MovieService=inject(MovieService);

  ngOnInit(): void {
    this.movieService.getAllMovies().subscribe(
      (data:Movie[])=>{
        console.log(this.movieList=data);
      }
    )
  }
  ajouterFilm() {
    // Logique pour ajouter un film (par exemple, ouvrir une modale)
    console.log("Ajouter un film");
  }

  modifierFilm(id:number) {
    // Logique pour modifier un film
    console.log("Modifier le film ", id);
  }

  supprimerFilm(id: number) {
    // Logique pour supprimer un film
    console.log("Supprimer le film ", id);
  }

}
