import { Component } from '@angular/core';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss'
})
export class IntroComponent {
  videoURL = 'assets/videos/estramipyme.mp4';  // Corregir la ruta del video
  imageURL = 'assets/images/eafit-logo.png';
}
