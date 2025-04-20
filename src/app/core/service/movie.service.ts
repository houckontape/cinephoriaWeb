import {inject, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Movie} from '../model/movie';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  readonly apiUrl = 'http://cinephoria.tuxfarm.ovh/';
  private http=inject(HttpClient);


  constructor() { }

  getAllMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.apiUrl + 'movies');
  }
}
