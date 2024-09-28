import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {

  public namelower: string = 'fernando';
  public nameUpper: string = 'FERNANDO';
  public fullName: string = 'FerNaNDO gOmEz';


  public customDate: Date = new Date();

}
