import { Component, OnInit } from '@angular/core';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [
    AdminNavbarComponent,
    RouterLink
  ],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.scss'
})
export class DashboardPageComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    const menuToggle = document.getElementById('menu-toggle');
    const wrapper = document.getElementById('wrapper');

    menuToggle?.addEventListener('click', (e) => {
      e.preventDefault();
      wrapper?.classList.toggle('toggled');
    });
  }
}
