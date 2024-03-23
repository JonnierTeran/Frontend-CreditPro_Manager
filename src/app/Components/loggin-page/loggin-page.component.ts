//Modulos, servicios, componentes y librerias necesarias para el componente
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AdministratorService } from '../../services/Administrator/administrator.service';
import { HttpErrorResponse } from '@angular/common/http';
import Swal from 'sweetalert2';


//Decorador del componente
@Component({
  selector: 'app-loggin-page',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './loggin-page.component.html',
  styleUrl: './loggin-page.component.css'
})
//Clase para el componente que maneja el inicio de sesion
export class LogginPageComponent {

  //Propiedad para el formulario reactivo
  public logginForm: FormGroup;

  //Propiedad para el contenido del button submit
  public loadingButton: string;

  /**
   * Injeccion de servicios como Depenencias del componente 
   * @param _formBuilder 
   * @param _administratorService 
   * @param _routerNav 
   */
  constructor(private _formBuilder: FormBuilder, private _administratorService: AdministratorService, private _routerNav: Router) {

    //Se inicializa el formulario reactivo
    this.logginForm = this._formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required]
    })

    //Se inicializa el texto del botón
    this.loadingButton = "Iniciar Sessión";
  }


  //#region  Metodo para iniciar session


  /**
   * @author Jonier Teran
   * @description Metodo para iniciar session en la aplicacion por medio del user y password
   */
  public loggin(): void {

    //Modifica el contenido del submit
    this.loadingButton = "Cargando...";

    //Consumo del servicio y suscripcion del mismo
    this._administratorService.getAdminEmail(this.logginForm.get("email")!.value).subscribe(
      next => {

        //Validacion de contraseña ingresada con contraseña obtenida del backend
        if (this.logginForm.get("password")!.value == next.password) {

          //Se registra en la session del navegador los datos necesarios
          sessionStorage.setItem("identificatión", next.identificacion.toString());
          sessionStorage.setItem("userName", next.name);
          sessionStorage.setItem("lastName", next.lastName);

          //Rediereccion al componente inicial
          this._routerNav.navigate(["/Home"]);

          //Efecto de carga a la aplicacion luego de logguear
          let timerInterval: any;
          Swal.fire({
            title: "Inicio de sesión",
            html: "Cárgando su información en <b></b> milliseconds.",
            timer: 2000,
            timerProgressBar: true,
            didOpen: () => {
              Swal.showLoading();
              const timer = Swal.getPopup()!.querySelector("b");
              timerInterval = setInterval(() => {
                timer!.textContent = `${Swal.getTimerLeft()}`;
              }, 100);
            },
            willClose: () => {
              clearInterval(timerInterval);
            }
          }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
              console.log("I was closed by the timer");
            }
          });


          //Resetear form de loggin
          this.logginForm.reset();

        }
        //Si las contraseñas no coinciden
        else {

          //Reset campo de contraseña
          this.logginForm.patchValue({
            password: ''
          });

          //Anuncio de error
          Swal.fire({
            icon: "warning",
            title: "Oops...",
            text: "Contraseña incorrecta!",
            footer: '<p>Ingrese nuevamente su contraseña</p>'
          });

        }
        //Cambiar contenido del button submit
        this.loadingButton = "Iniciar Sessión";
      },

      //Validacion de errores en la subscripcion del servicio
      (error: HttpErrorResponse) => {

        //Tipos de estados de error del servidor API

        console.log(error);
        if (error.status == 404) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Usuario no registrado!",
            footer: '<p>Intente nuevamente</p>'
          });
        } else if (error.status == 400) {
          Swal.fire({
            icon: "warning",
            title: "Oops...",
            text: "Ingrese correctamente los campos requeridos!",
          });
        } else {
          Swal.fire({
            icon: "warning",
            title: "Oops...",
            text: "Algo ha salido mal!",
          });
        }

        //Se cambia el contenido del button submit
        this.loadingButton = "Iniciar Sessión";
      });

  }


  //#endregion

}
