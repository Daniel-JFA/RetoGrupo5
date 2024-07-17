import { Component, OnChanges, OnInit, EventEmitter } from '@angular/core';
import { QuestionsService } from '../../../core/services/questions.service';
import { ImportsModule } from '../../../imports';
import { CommonModule } from '@angular/common';
import { FormPanelComponent } from './form-panel/form-panel.component';

@Component({
  selector: 'radar-form',
  standalone: true,
  imports: [ImportsModule, CommonModule, FormPanelComponent],
  templateUrl: './radar-form.component.html',
  styleUrl: './radar-form.component.scss',
})
export class RadarFormComponent implements OnInit {
  items: any[] = [];
  constructor(private questionsService: QuestionsService) {}

  ngOnInit() {
    this.items = [
      { icon: 'pi pi-home', route: '/dashboard' },
      { label: 'Radar Estratetigo' },
    ];
  }
}
