import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../services/peliculas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pelicula-detail',
  standalone: true,
  imports: [],
  templateUrl: './pelicula-detail.component.html',
  styleUrl: './pelicula-detail.component.css'
})
export class PeliculaDetailComponent implements OnInit{
  pelicula: any;

  constructor(private peliculaService: PeliculasService, private route:ActivatedRoute){}
  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      let id:string = params['id'];
      this.peliculaService.getPelicula(id).subscribe(pelicula=>{
        this.pelicula = pelicula;
        console.log(pelicula);
      })
    })
  }


}
