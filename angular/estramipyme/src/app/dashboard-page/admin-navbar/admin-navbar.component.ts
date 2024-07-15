import { Component } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';

import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'admin-navbar',
  standalone: true,
  imports: [
    MenubarModule,
    AvatarModule,
    AvatarGroupModule,
    BadgeModule,
    CommonModule,
  ],
  templateUrl: './admin-navbar.component.html',
  styleUrl: './admin-navbar.component.scss'
})
export class AdminNavbarComponent {
  items:any[] = [
    {
        label: 'Home',
        icon: 'pi pi-home'
    },
    {
        label: 'Features',
        icon: 'pi pi-star'
    },
    {
        label: 'Contact',
        icon: 'pi pi-envelope',
        badge: '3'
    }
];
}
