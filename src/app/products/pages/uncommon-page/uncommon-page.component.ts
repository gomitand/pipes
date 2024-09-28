import { Component } from '@angular/core';
import { resolve } from 'path';
import { interval, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  public name: string ='Nicolas';
  public gender: 'male' |'female' | 'no existe' = 'male';
  public invitationMap ={
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  changeClient():void{
    this.name = 'Melisa';
    this.gender = 'female';
  }


  public clientes: string[] = ['maria','Pedro','Fernando','Miguelito','Nicolas',];

  public clientsMap = {
    '=0':'no tenemos ningun cliente esperando.',
    '=1':'tenemos un cliente esperando.',
    '=2':'tenemos 2 personas esperando.',
    'other': 'tenemos # clientes esperando.',

  }

  deleteClient(): void{
    this.clientes.shift();
  }

  public person ={
    name: ' Nicolas',
    age:20,
    address: 'Bogota, Colombia'
  }

  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap( value => console.log('tap:',value) ),
  );

  public promiseValue: Promise<string> = new Promise(( resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos la promesa.');
      console.log('Tenemos la promesa.');
      this.person.name =' Otro nombre'
    }, 3500);
  })
}
