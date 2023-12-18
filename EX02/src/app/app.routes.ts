import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ListaPeliculasComponent } from './lista-peliculas/lista-peliculas.component';
import { ListaSeriesComponent } from './lista-series/lista-series.component';
import { SerieDetailComponent } from './serie-detail/serie-detail.component';
import { PeliculaDetailComponent } from './pelicula-detail/pelicula-detail.component';

export const routes: Routes = [
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "home",
        component: HomeComponent
    },
    {
        path: "peliculas",
        component: ListaPeliculasComponent
    },
    {
        path: "series",
        component: ListaSeriesComponent
    },
    {
        path: "series/:id",
        component: SerieDetailComponent
    },
    {
        path: "peliculas/:id",
        component: PeliculaDetailComponent
    }
];
