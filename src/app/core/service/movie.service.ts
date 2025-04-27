import {inject, Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Movie} from '../model/movie';
import {isObservable, Observable} from 'rxjs';
import {FormGroup} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  readonly apiUrl = 'https://cinephoria.tuxfarm.ovh/';
  constructor(private http: HttpClient) { }

  getAllMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.apiUrl + 'movie');
  }

  addMovies(movieForm:FormGroup) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json', // Exemple de header Content-Type
      'Authorization': 'bc74694b791f1a5a7c8afd95d425f494', // Exemple d'un header d'autorisation
      });
    console.log(movieForm.value);
    return this.http.post<Movie>(this.apiUrl + 'managemovie', movieForm.value, {headers: headers}).subscribe(movie=>{
        console.log('Upadate : ',movie);
    }
    );
  }
}
