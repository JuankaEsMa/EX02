import { Component } from '@angular/core';
import { SeriesService } from '../services/series.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-series',
  standalone: true,
  imports: [],
  templateUrl: './lista-series.component.html',
  styleUrl: './lista-series.component.css'
})
export class ListaSeriesComponent {
  series: any;
  generos: any = ["Action","Adventure","Animation", "Comedy", "Crime", "Documentary", "Drama", 
  "Family", "Fantasy", "History", "Horror", "Music", "Mystery", "Romance", "Science Fiction", 
  "Thriller", "TV Movie", "War","Western"
  ]
  
  constructor(private seriesService: SeriesService, private router: Router){}

  ngOnInit(): void {
    this.seriesService.getAllSeries().subscribe(body => {
      this.series = body.results;
      console.log(body);
    })
  }

  onPeliculaClick(id:string){
    this.seriesService.getSerie(id).subscribe(body => {
      this.router.navigate(['/series/'+id]);
    });
  }

  search(){
    let searchInput:any = document.getElementById("searchInput");
    if(searchInput.value != ""){
      this.seriesService.searchSerie(searchInput.value).subscribe(series => {
        this.series = series.results;
      })
    }else{
      this.seriesService.getAllSeries().subscribe(series => {
        this.series = series.results;
      })
    }
  }

  populares(){
    this.seriesService.getSeriesPopulares().subscribe(series => {
      this.series = series.results;
    })
  }
}
