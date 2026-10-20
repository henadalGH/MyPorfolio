import { Routes } from '@angular/router';
import { Home } from './home/home';
import { MisProyectos } from './mis-proyectos/mis-proyectos';


export const routes: Routes = [

    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {path:'home', component: Home},
    {path: 'misProyectos', component: MisProyectos}
];
