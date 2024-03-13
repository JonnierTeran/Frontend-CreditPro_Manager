import { Routes } from '@angular/router';
import { LogginPageComponent } from './Components/loggin-page/loggin-page.component';
import { ErrorPageComponent } from './Components/error-page/error-page.component';
import { SingUpPageComponent } from './Components/sing-up-page/sing-up-page.component';


//Se exporta Arrays con Objetos que contienen las rutas y componentes
export const routes: Routes = [
    { path: "", component: LogginPageComponent, title: "Loggin Page" }, //Pagina defoult
    { path: "loggin", component: LogginPageComponent, title: "Loggin Page" }, // pagina de loggin
    {path: "singUp" , component: SingUpPageComponent, title: "Registro Admin page"}, //pagina de singUp
    {path: '404', component: ErrorPageComponent }, // Pagina de not found
    { path: '**', redirectTo: '/404' } // Redirige cualquier ruta no encontrada a la página de error
];
