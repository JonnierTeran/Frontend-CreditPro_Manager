import { Component, OnInit } from '@angular/core';
import { NavPageComponent } from '../nav-page/nav-page.component';
import { IntroComponentPageComponent } from '../intro-component-page/intro-component-page.component';
import { RouterLink, RouterLinkActive } from '@angular/router';


//Componente Decorador
@Component({
  selector: 'app-sidebar-page',
  standalone: true,
  imports: [NavPageComponent, IntroComponentPageComponent, RouterLink, RouterLinkActive],
  templateUrl: './sidebar-page.component.html',
  styleUrl: './sidebar-page.component.css'
})
export class SidebarPageComponent implements OnInit {

  //Propiedad para el Nombre se Usuario
  userName: string;


  constructor() {
    this.userName = "";
  }

  //Ciclo de vida
  ngOnInit(): void {
    //Obtiene el userName del SessionStorage
    this.userName = sessionStorage.getItem("userName")!;
  }
}
