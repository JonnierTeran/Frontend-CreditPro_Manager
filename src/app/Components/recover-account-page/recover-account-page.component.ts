import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-recover-account-page',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './recover-account-page.component.html',
  styleUrl: './recover-account-page.component.css'
})
export class RecoverAccountPageComponent implements OnInit {

  //Propiedad para el formulario
  public recoverForm: FormGroup;

  constructor(private _formBuilder: FormBuilder) {

    //Se inicializa formulario reactivo
    this.recoverForm = this._formBuilder.group({
      user: ["", [Validators.required, Validators.email]]
    });
  }

  ngOnInit(): void { }

  //#region  Metodo Recuperar Contraseña
  /**
   * @name recoverAccount
   * @param null
   * @returns void
   * @description Este método es para solicitar envío de la contraseña al correo electrónico del administrador utilizando la API
   */
  public recoverAccount(): void {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "La información de recuperacion de cuenta ha sido enviada a la dirección de correo: " + this.recoverForm.get("user")!.value,
      showConfirmButton: false,
      timer: 2000
    });
  }
  //#endregion
}
