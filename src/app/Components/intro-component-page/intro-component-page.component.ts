import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-intro-component-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './intro-component-page.component.html',
  styleUrl: './intro-component-page.component.css'
})
export class IntroComponentPageComponent implements OnInit {

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
