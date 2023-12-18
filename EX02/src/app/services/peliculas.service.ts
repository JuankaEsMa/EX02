import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(private httpClient: HttpClient) { }

  getAllPeliculas():Observable<any>{
    return this.httpClient.get("https://api.themoviedb.org/3/discover/movie?api_key=da50fee3e098cfaed7579eff87a80c33")
  };
  getPelicula(id:string):Observable<any>{
    return this.httpClient.get("https://api.themoviedb.org/3/movie/"+id+"?api_key=da50fee3e098cfaed7579eff87a80c33")
  }
  searchPelicula(query:string):Observable<any>{
    return this.httpClient.get("https://api.themoviedb.org/3/search/movie?query="+query+"&api_key=da50fee3e098cfaed7579eff87a80c33")
  }
  getPeliculasPopulares():Observable<any>{
    return this.httpClient.get("https://api.themoviedb.org/3/trending/movie/day?api_key=da50fee3e098cfaed7579eff87a80c33")
  }
  getPeliculasByGenero(generes:string):Observable<any>{
    return this.httpClient.get("https://api.themoviedb.org/3/discover/movie?api_key=da50fee3e098cfaed7579eff87a80c33&with_genres="+generes)
  }
}
