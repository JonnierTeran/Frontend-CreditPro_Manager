import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { nextTick } from 'process';
import Swal from 'sweetalert2';
import { AdministratorModels } from '../../models/administrator-models';
import { ResponseModels } from '../../models/response-models';
import { AdministratorService } from '../../services/Administrator/administrator.service';

@Component({
  selector: 'app-sing-up-page',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './sing-up-page.component.html',
  styleUrl: './sing-up-page.component.css'
})
export class SingUpPageComponent {

  public singUpForm: FormGroup;

  public passwordAlert: Boolean;

  constructor(private _formBulder: FormBuilder, private _administratorService: AdministratorService) {

    this.singUpForm = this._formBulder.group({
      identificacion: ["", Validators.required],
      name: ["", Validators.required],
      lastName: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required],
      passwordConfirm: ["", Validators.required],
      apiKey: [""]
    });

    this.passwordAlert = false;
  }


  //#region  REGISTRAR ADMINISTRADOR


  public registrarAdmin(): void {

    if (this.singUpForm.get('password')!.value == this.singUpForm.get('passwordConfirm')!.value) {

      let Admin: AdministratorModels = new AdministratorModels(this.singUpForm.get('identificacion')!.value,
        this.singUpForm.get('lastName')!.value, this.singUpForm.get('name')!.value, this.singUpForm.get('password')!.value,
        this.singUpForm.get('email')!.value,this.singUpForm.get('apiKey')!.value);

      this._administratorService.saveAdmin(Admin).subscribe(
        
        // Función de éxito (Res es la respuesta de la API)
        Next => {

          const Toast = Swal.mixin({
            toast: true,
            position: "center",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: "success",
            title: Next.message
          });

          this.singUpForm.reset();

        },
        // Función de error (Err contiene información sobre el error)
        Error => {
          // Imprimir el error en la consola
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

      this.passwordAlert = true;
      setTimeout(() => {
        this.passwordAlert = false;
      }, 3500);

    }
  }

  //#endregion
}
