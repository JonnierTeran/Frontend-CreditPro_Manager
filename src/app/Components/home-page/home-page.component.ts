import { Component } from '@angular/core';
import { IntroComponentPageComponent } from '../intro-component-page/intro-component-page.component';
import { NavPageComponent } from '../nav-page/nav-page.component';
import { SidebarPageComponent } from '../sidebar-page/sidebar-page.component';
import { FooterPageComponent } from '../footer-page/footer-page.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterOutlet ,NavPageComponent, IntroComponentPageComponent, SidebarPageComponent, FooterPageComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {}
