import { Component, OnInit } from '@angular/core';
import { SeriesService } from '../services/series.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-serie-detail',
  standalone: true,
  imports: [],
  templateUrl: './serie-detail.component.html',
  styleUrl: './serie-detail.component.css'
})
export class SerieDetailComponent implements OnInit{
  serie: any;

  constructor(private serieService: SeriesService, private route:ActivatedRoute){}
  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      let id:string = params['id'];
      this.serieService.getSerie(id).subscribe(serie=>{
        this.serie = serie;
        console.log(serie);
      })
    })
  }
}
