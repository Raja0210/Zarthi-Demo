import { Component } from '@angular/core';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrl: './preferences.component.css'
})
export class PreferencesComponent {
  tableItems:string[][]=[["1","Mark","Otto"],["2","Jacob","Thornton"],["3","Larry","the Bird"]];
}
