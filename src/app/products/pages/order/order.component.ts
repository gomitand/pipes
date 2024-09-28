import { Component } from '@angular/core';
import { Color, hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: ``
})
export class OrderComponent {

  public isUpperCase: boolean = false;
  public orderBy?: keyof hero ;

  public heroes:hero[] =[
    {
      name:'Superman',
      canFly: true,
      color: Color.blue,
    },
    {
      name:'Batman',
      canFly: false,
      color: Color.black,
    },
    {
      name:'Dead pool',
      canFly: false,
      color: Color.red,
    },
    {
      name:'Linterna Verde',
      canFly: true,
      color: Color.green,
    },
  ]


  toggleUpperCase():void{
    this.isUpperCase = !this.isUpperCase;
  }

  changeOrder( value: keyof hero){
     this.orderBy = value;
  }

}
