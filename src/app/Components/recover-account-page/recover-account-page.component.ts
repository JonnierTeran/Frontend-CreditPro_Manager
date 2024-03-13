import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { AdministratorService } from '../../services/Administrator/administrator.service';

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

  public buttonStatus: string;

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
   * @param null
   * @returns void
   * @description Este método es para solicitar envío de la contraseña al correo electrónico del administrador utilizando la API
   */
  public recoverAccount(): void {
    this.buttonStatus = "Cargando..."
    this._administratorService.getResponseRecoverAcount(this.recoverForm.get("user")!.value).subscribe(
      next => {
        Swal.fire({
          position: "center",
          icon: "info",
          title: next.message,
        });

        this.buttonStatus = "Recuperar contraseña";
      },
      error => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Algo ha salido mal!",
          showConfirmButton: false,
          timer: 2000
        });

        this.buttonStatus = "Recuperar contraseña";
      }

    )

  }
  //#endregion
}
