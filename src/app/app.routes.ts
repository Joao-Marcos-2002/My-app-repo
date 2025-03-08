import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NaograduadoListComponent } from './components/naograduado-list/naograduado-list.component';
import { GraduadoListComponent } from './components/graduado-list/graduado-list.component'; 

export const routes: Routes = [
    { path: 'nao-graduado', component: NaograduadoListComponent },
    { path: 'graduado', component: GraduadoListComponent },
    { path: '', component: HomeComponent}
    // component: HomeComponent
];
