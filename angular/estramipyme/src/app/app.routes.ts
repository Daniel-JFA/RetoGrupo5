import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';


// vistas de la pagina web
export const routes: Routes = [
    { path: '', component: LandingPageComponent }, // Landing page
    //{ path: 'login', component: LoginComponent }, // Login
    { path: 'dashboard', component: DashboardPageComponent }, // Dashboard
    //{ path: 'formulario', component: FormularioComponent }, // Formulario
    //{ path: 'resultados', component: ResultadosComponent }, // Resultados
];
