import { Routes } from '@angular/router';
import { LogginPageComponent } from './Components/loggin-page/loggin-page.component';
import { ErrorPageComponent } from './Components/error-page/error-page.component';
import { SingUpPageComponent } from './Components/sing-up-page/sing-up-page.component';
import { RecoverAccountPageComponent } from './Components/recover-account-page/recover-account-page.component';


//Se exporta Arrays con Objetos que contienen las rutas y componentes
export const routes: Routes = [
    {path: "", component: LogginPageComponent, title: "Loggin Page" }, //pagina por defoult
    {path: "loggin", component: LogginPageComponent, title: "Loggin Page" }, // Pagina de loggin
    {path: "singUp" , component: SingUpPageComponent, title: "Registro Admin page"}, // Pagina de Registro
    {path: "recoverAccount", component: RecoverAccountPageComponent, title: "Recuperar cuenta"}, // Pagina de Recuperacion
    {path: '404', component: ErrorPageComponent }, // Pagina de not found
    {path: '**', redirectTo: '/404' } // Redirige cualquier ruta no encontrada a la página de error
];
