import { Component, OnInit } from '@angular/core';
import { StepsModule } from 'primeng/steps';
import { QuestionsService } from '../../../core/services/questions.service';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'radar-form',
  standalone: true,
  imports: [StepsModule],
  templateUrl: './radar-form.component.html',
  styleUrl: './radar-form.component.scss',
})
export class RadarFormComponent implements OnInit {
  items: any[] = [];
  paymentInformation: any;

  constructor(
    private questionsService: QuestionsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.items = this.questionsService.getAllSections();
  }

  nextPage() {
   
  }

  prevPage() {
    
  }
}
