import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { AdministratorModels } from '../../models/administrator-models';
import { AdministratorService } from '../../services/Administrator/administrator.service';

@Component({
  selector: 'app-sing-up-page',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './sing-up-page.component.html',
  styleUrl: './sing-up-page.component.css'
})
export class SingUpPageComponent {

  //pripiedad para el formulario reactivo
  public singUpForm: FormGroup;

  //Propiedad para mostrar alerta de contraseña diferente
  public passwordAlert: Boolean;

  //propiedad para cambiar el contenido del button sumbmit
  public loadingButton: string;

  /**
   * 
   * @param _formBuilder  * @description Inyeccion de servicios como dependecias del componente e inicializacion de propiedades
   * @param _administratorService 
   */
  constructor(private _formBuilder: FormBuilder, private _administratorService: AdministratorService) {

    //Formulario Reactivo
    this.singUpForm = this._formBuilder.group({
      identificacion: ["", Validators.required],
      name: ["", Validators.required],
      lastName: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required],
      passwordConfirm: ["", Validators.required],
      apiKey: [null]
    });


    this.passwordAlert = false;
    this.loadingButton = "Registrar Administrador";
  }


  //#region  REGISTRAR ADMINISTRADOR

  /**
   * @author Jonnier Teran
   * @description Metodo para registrar Un Admin usando la API del servicio
   */
  public registrarAdmin(): void {

    this.loadingButton = "Cargando..."

    //Validacion de campos de password
    if (this.singUpForm.get('password')!.value == this.singUpForm.get('passwordConfirm')!.value) {

      //Genera Objeto Admin del Reactive Forms
      let Admin: AdministratorModels = new AdministratorModels(this.singUpForm.get('identificacion')!.value,
        this.singUpForm.get('lastName')!.value, this.singUpForm.get('name')!.value,
        this.singUpForm.get('password')!.value, this.singUpForm.get('email')!.value,
        this.singUpForm.get('apiKey')!.value);

      //Consumo del servicio                                        
      this._administratorService.saveAdmin(Admin).subscribe(

        // Función de éxito (Next es la respuesta de la API)
        Next => {

          this.loadingButton = "Registrar Administrador";

          const Toast = Swal.mixin({
            toast: true,
            position: "center",
            showConfirmButton: false,
            timer: 5000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: "success",
            title: Next.message   //Mensaje de respuesta del API
          });


          this.singUpForm.reset();

        },
        // Función de error (Err contiene información sobre el error)
        Error => {

          this.loadingButton = "Registrar Administrador";

          // Imprimir el error en la consola y al user
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Algo salio mal",
            footer: '<p> Intenta nuevamente </p>'
          });
          window.console.log(Error);
        }
      );



    } else {

      // si las contraseñas no coinciden se muestra la alerta por 3.5 segundos

      this.passwordAlert = true;
      setTimeout(() => {
        this.passwordAlert = false;
      }, 3500);

      this.loadingButton = "Registrar Administrador";

    }
  }

  //#endregion
}
