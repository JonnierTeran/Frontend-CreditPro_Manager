import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-recover-account-page',
  standalone: true,
  imports: [],
  templateUrl: './recover-account-page.component.html',
  styleUrl: './recover-account-page.component.css'
})
export class RecoverAccountPageComponent implements OnInit{

  ngOnInit(): void {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Esta vaina sirve",
      showConfirmButton: false,
      timer: 3000
    });
  }

}
