import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  constructor(private httpClient: HttpClient) { }

  getAllSeries():Observable<any>{
    return this.httpClient.get("https://api.themoviedb.org/3/discover/tv?api_key=da50fee3e098cfaed7579eff87a80c33")
  };
  getSerie(id:string):Observable<any>{
    return this.httpClient.get("https://api.themoviedb.org/3/tv/"+id+"?api_key=da50fee3e098cfaed7579eff87a80c33")
  }
  searchSerie(query:string):Observable<any>{
    return this.httpClient.get("https://api.themoviedb.org/3/search/tv?query="+query+"&api_key=da50fee3e098cfaed7579eff87a80c33")
  }
  getSeriesPopulares():Observable<any>{
    return this.httpClient.get("https://api.themoviedb.org/3/trending/tv/day?api_key=da50fee3e098cfaed7579eff87a80c33")
  }
}
