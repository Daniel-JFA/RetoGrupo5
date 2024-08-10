import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ImportsModule } from 'src/app/imports';

@Component({
  selector: 'sub-menu',
  standalone: true,
  imports: [ImportsModule],
  templateUrl: './sub-menu.component.html',
  styleUrl: './sub-menu.component.scss'
})
export class SubMenuComponent implements OnInit {
  items: MenuItem[] = [];
  ngOnInit() {
    this.items = [
      {
        label: 'Correo',
        icon: 'pi pi-envelope',
        badge: '5',
        items: [
          {
            label: 'Nuevo',
            icon: 'pi pi-file-edit',
          },
          {
            label: 'Bandeja',
            icon: 'pi pi-inbox',
            badge: '5',
          },
          {
            label: 'Enviados',
            icon: 'pi pi-send',
          },
          {
            label: 'Papelera',
            icon: 'pi pi-trash',
          },
        ],
      },
      {
        label: 'Reportes',
        icon: 'pi pi-chart-bar',
        items: [
          {
            label: 'Empresas',
            icon: 'pi pi-chart-line',
            badge: '3',
          },
          {
            label: 'Usuarios',
            icon: 'pi pi-list',
            badge: '6',
          },
        ],
      },
      {
        label: 'Perfil',
        icon: 'pi pi-user',
        items: [
          {
            label: 'Editar',
            icon: 'pi pi-cog',
          },
          {
            label: 'Privacidad',
            icon: 'pi pi-shield',
          },
        ],
      },
    ];
  }
}
