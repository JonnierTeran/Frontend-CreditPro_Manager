import { Component, OnInit } from '@angular/core';
//Import de liberia para el tiempo
import moment from 'moment';


@Component({
  selector: 'app-nav-page',
  standalone: true,
  imports: [],
  templateUrl: './nav-page.component.html',
  styleUrl: './nav-page.component.css'
})
export class NavPageComponent implements OnInit {

  //Atributo para el reloj dinamico
  public dateTime: string;

  //Constructor Inicializa atributos locales
  constructor() {
    this.dateTime = '';
  }

  //Hooks inicial
  ngOnInit(): void {

    //Metodo que se ejecuta cada 1000ms
    setInterval(() => { //Arrow functions que formatea y ejecuta la hora local en la variable reloj
      moment.locale("es")
      //this.reloj = moment().format('MMMM Do YYYY, h:mm:ss a');
      const hoy = Date.now();                // obtenemos la fecha actual
      this.dateTime = moment(hoy).format("YYYY-MM-DD - hh:mm:ss A"); // 2021-02-16 05:46 PM
    }, 1000);



  }
}
