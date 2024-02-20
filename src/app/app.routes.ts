import { Routes } from '@angular/router';
import { LogginPageComponent } from './Components/loggin-page/loggin-page.component';
import { ErrorPageComponent } from './Components/error-page/error-page.component';

export const routes: Routes = [
    { path: "", component: LogginPageComponent, title: "Loggin Page" },
    { path: "loggin", component: LogginPageComponent, title: "Loggin Page" },
    { path: '404', component: ErrorPageComponent }, // Pagina de not found
    { path: '**', redirectTo: '/404' } // Redirige cualquier ruta no encontrada a la página de error
];
