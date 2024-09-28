import { MenuItem } from 'primeng/api';
import { Component } from '@angular/core';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: ``
})
export class MenuComponent {


  public MenuItems: MenuItem[] | undefined;

  ngOnInit() {
    this.MenuItems = [
      {
        label: 'pipes de Angular',
        icon: 'pi pi-desktop',
        items:[
          {
            label:'Textos y Fechas',
            icon: 'pi pi-aling-left',
            routerLink: '/'
          },
          {
            label:'Numeros',
            icon: 'pi pi-dollar',
             routerLink: 'numbers'
          },
          {
            label:'No comunes',
            icon: 'pi pi-globe',
             routerLink: 'uncommon'
          },
        ]
      },
      {
        label:'Pipes personalizados',
        icon: 'pi pi-cog',
        items: [
          {
            label:'Custom pipes',
            icon: 'pi pi-cog',
            routerLink:'custom'
          }
        ]
      }
    ];
  }
}
