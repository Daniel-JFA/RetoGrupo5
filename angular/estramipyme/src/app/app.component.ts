import { Component, numberAttribute } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing.component';
import { HtmlParser } from '@angular/compiler';

// head del component - informacion de angular para Html
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    LandingPageComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
// logica del componente en javascript o typescript
export class AppComponent {
  //propiedades(son variables propias de una clase)
  //metodos (son funciones propias de una clase)
}