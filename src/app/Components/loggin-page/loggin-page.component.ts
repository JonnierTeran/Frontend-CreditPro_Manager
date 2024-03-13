import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AdministratorService } from '../../services/Administrator/administrator.service';
import { HttpErrorResponse } from '@angular/common/http';
import Swal from 'sweetalert2';


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
  public loadingButton: string;

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
  public loggin(): void {
    this.loadingButton = "Cargando...";

    this._administratorService.getAdminEmail(this.logginForm.get("email")!.value).subscribe(
      next => {
        if (this.logginForm.get("password")!.value == next.password) {

          this._routerNav.navigate(["/404"]);
          sessionStorage.setItem("Identificación", next.identificacion.toString());

          let timerInterval: any;
          Swal.fire({
            title: "Inicio de sesión",
            html: "I will close in <b></b> milliseconds.",
            timer: 4000,
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

          this.logginForm.reset();

        } else {
          this.logginForm.patchValue({
            password: ''
          });
          Swal.fire({
            icon: "warning",
            title: "Oops...",
            text: "Contraseña incorrecta!",
            footer: '<p>Ingrese nuevamente su contraseña</p>'
          });

        }
        this.loadingButton = "Iniciar Sessión";
      },
      (error: HttpErrorResponse) => {
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
        this.loadingButton = "Iniciar Sessión";
      }

    )


  }


  //#endregion

}
