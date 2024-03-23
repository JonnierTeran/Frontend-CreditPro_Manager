import { Routes } from '@angular/router';
import { LogginPageComponent } from './Components/loggin-page/loggin-page.component';
import { ErrorPageComponent } from './Components/error-page/error-page.component';
import { SingUpPageComponent } from './Components/sing-up-page/sing-up-page.component';
import { RecoverAccountPageComponent } from './Components/recover-account-page/recover-account-page.component';
import { SidebarPageComponent } from './Components/sidebar-page/sidebar-page.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { IntroComponentPageComponent } from './Components/intro-component-page/intro-component-page.component';
import { AdministrationPageComponent } from './Components/administration-page/administration-page.component';


//Se exporta Arrays con Objetos que contienen las rutas y componentes
export const routes: Routes = [
    { path: "", component: LogginPageComponent, title: " CreditPro - Loggin" }, //pagina por defoult
    { path: "loggin", component: LogginPageComponent, title: "CreditPro - Loggin" }, // Pagina de loggin
    {   path: "Home", component: HomePageComponent, title: "CreditPro - Home",
        children: [
            { path: "", component: IntroComponentPageComponent, title: "CreditPro - Bienvenido(a)" },
            { path: "Inicio", component: IntroComponentPageComponent, title: "CreditPro - Inicio" },
            { path: "Administration" , component: AdministrationPageComponent, title: "CreditPro - Administración"}
        ]
    }, // Rutass Hijas y navegacion dinamica
    { path: "singUp", component: SingUpPageComponent, title: "CreditPro - Registro Admin" }, // Pagina de Registro
    { path: "recoverAccount", component: RecoverAccountPageComponent, title: "CreditPro - Recuperar cuenta" }, // Pagina de Recuperacion
    { path: '404', component: ErrorPageComponent, title: "No disponible" }, // Pagina de not found
    { path: '**', redirectTo: '/404' } // Redirige cualquier ruta no encontrada a la página de error
];
