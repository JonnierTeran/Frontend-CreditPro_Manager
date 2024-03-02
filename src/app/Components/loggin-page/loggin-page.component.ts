import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';


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

  constructor(private _formBuilder: FormBuilder) {
    
    //Se inicializa el formulario reactivo
    this.logginForm = this._formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required]
    })
  }

  //#region  Metodo para iniciar session
  public loggin(): void {
    window.console.log(this.logginForm.value);
    this.logginForm.reset();

  }

  //#endregion

}
