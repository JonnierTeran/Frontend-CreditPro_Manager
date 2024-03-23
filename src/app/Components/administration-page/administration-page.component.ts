import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-administration-page',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './administration-page.component.html',
  styleUrl: './administration-page.component.css'
})
export class AdministrationPageComponent {

  money = 1000000;

}
