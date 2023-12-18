import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../services/peliculas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-peliculas',
  standalone: true,
  imports: [],
  templateUrl: './lista-peliculas.component.html',
  styleUrl: './lista-peliculas.component.css'
})
export class ListaPeliculasComponent implements OnInit {
  peliculas: any;
  generos: any = ["Action","Adventure","Animation", "Comedy", "Crime", "Documentary", "Drama", 
  "Family", "Fantasy", "History", "Horror", "Music", "Mystery", "Romance", "Science Fiction", 
  "Thriller", "TV Movie", "War","Western"
  ]
  
  constructor(private peliculaService: PeliculasService, private router: Router){}

  ngOnInit(): void {
    this.peliculaService.getAllPeliculas().subscribe(body => {
      this.peliculas = body.results;
      console.log(body);
    })
  }

  onPeliculaClick(id:string){
    this.peliculaService.getPelicula(id).subscribe(body => {
      this.router.navigate(['/peliculas/'+id]);
    });
  }

  search(){
    let searchInput:any = document.getElementById("searchInput");
    if(searchInput.value != ""){
      this.peliculaService.searchPelicula(searchInput.value).subscribe(peliculas => {
        this.peliculas = peliculas.results;
      })
    }else{
      this.peliculaService.getAllPeliculas().subscribe(peliculas => {
        this.peliculas = peliculas.results;
      })
    }
  }

  populares(){
    this.peliculaService.getPeliculasPopulares().subscribe(pelicuas => {
      this.peliculas = pelicuas.results;
    })
  }

  filtrarGenero(){
    let generos:any = document.getElementsByClassName("genereInput");
    let generosFiltrar = "";
    for (let i = 0; i < generos.length; i++) {
      const element = generos[i];
      if(element.checked){
        generosFiltrar += element.value.toLowerCase() + "%2";
      }
    }
    if(generosFiltrar != ""){
      generosFiltrar = generosFiltrar.substring(0,generosFiltrar.length-1);
      console.log(generosFiltrar);
      this.peliculaService.getPeliculasByGenero(generosFiltrar).subscribe(peliculas => {
        console.log(peliculas);
        this.peliculas = peliculas.results;
      })
    }
  }
}
