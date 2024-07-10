import { Component } from '@angular/core';
import { IntroComponent } from './intro/intro.component';
import { FeaturesComponent } from './features/features.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    IntroComponent,
    FeaturesComponent,
    TestimonialsComponent,
    FooterComponent
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {

}
