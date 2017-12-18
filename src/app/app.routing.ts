import { RouterModule, Routes } from '@angular/router';
import { Component } from '@angular/core/src/metadata/directives';
import { InicioComponent } from './components/inicio/inicio.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BuscadorComponent } from './components/buscador/buscador.component';

const APP_ROUTINGS: Routes = [
    {
        path: 'inicio',
        component: InicioComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'heroes',
        component: HeroesComponent
    },
    {
        path: 'heroe/:id',
        component: HeroeComponent
    },
    {
        path: 'buscar/:termino',
        component: BuscadorComponent
    }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTINGS);