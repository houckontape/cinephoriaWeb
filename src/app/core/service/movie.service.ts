import {inject, Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Movie} from '../model/movie';
import {isObservable, Observable, throwError} from 'rxjs';
import {FormGroup} from '@angular/forms';
import {Auth} from '../model/auth';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  readonly apiUrl = 'https://cinephoria.tuxfarm.ovh/';

  constructor(private http: HttpClient , private auth:AuthService) { }

  getAllMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.apiUrl + 'movie');
  }

  addMovies(movieForm:FormGroup) {
    const key=sessionStorage.getItem('apiKey');
    console.log('cle'+key);
    if(!key){
      console.error("Clé API manquante.");
      return throwError(() => new Error("Clé API manquante.")); // Retourner une erreur observable
    }
    const headers = new HttpHeaders({
      'Content-Type': 'application/json', // Exemple de header Content-Type
      'Authorization': key, // Exemple d'un header d'autorisation
      });
    console.log(movieForm.value);
    return this.http.post<Movie>(this.apiUrl + 'managemovie', movieForm.value, {headers: headers}).subscribe(movie=>{
        console.log('Update : ',movie);
    }
    );
  }
}
