import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { RadarComponent } from './dashboard-page/radar/radar.component';
import { RadarChartComponent } from './dashboard-page/radar/radar-chart/radar-chart.component';

// vistas de la pagina web
export const routes: Routes = [
    { path: '', component: LandingPageComponent }, // Landing page
    { path: 'dashboard', component: DashboardPageComponent }, // Dashboard
    { path: 'radar', component: RadarComponent }, // Formulario
    { path: 'radar-resultados', component: RadarChartComponent }, // Formulario
    //{ path:'**', component: ''} //404
];
