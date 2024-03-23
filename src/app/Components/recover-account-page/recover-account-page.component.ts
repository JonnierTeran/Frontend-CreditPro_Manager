import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { AdministratorService } from '../../services/Administrator/administrator.service';
import { HttpErrorResponse } from '@angular/common/http';


//Declaracion del componente
@Component({
  selector: 'app-recover-account-page',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './recover-account-page.component.html',
  styleUrl: './recover-account-page.component.css'
})
export class RecoverAccountPageComponent {

  //Propiedad para el formulario
  public recoverForm: FormGroup;

  //propiedad para el contenido del button submit
  public buttonStatus: string;

  /**
   * @description Inyeccion de servicios como dependecias del componente e inicializacion de propiedades
   * @param _formBuilder 
   * @param _administratorService 
   */
  constructor(private _formBuilder: FormBuilder, private _administratorService: AdministratorService) {

    //Se inicializa formulario reactivo
    this.recoverForm = this._formBuilder.group({
      user: ["", [Validators.required, Validators.email]]
    });


    this.buttonStatus = "Recuperar contraseña";
  }

  //#region  Metodo Recuperar Contraseña
  /**
   * @name recoverAccount
   * @author Jonnier Teran
   * @param null
   * @returns void
   * @description Este método es para solicitar envío de la contraseña al correo electrónico del administrador utilizando la API
   */
  public recoverAccount(): void {
    this.buttonStatus = "Cargando..."
    this._administratorService.getResponseRecoverAcount(this.recoverForm.get("user")!.value).subscribe(
      next => {

        //Cargar mensaje de respuesta de la API
        Swal.fire({
          position: "center",
          icon: "info",
          title: next.message,
        });

        //Actualizar contenido del buttom
        this.buttonStatus = "Recuperar contraseña";
      },

      (error:HttpErrorResponse) => {

        //Manejar error del API
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Algo ha salido mal!",
          showConfirmButton: false,
          timer: 2000
        });

        //Actualizar contenido del buttom
        this.buttonStatus = "Recuperar contraseña";
      }

    )

  }
  //#endregion
}
