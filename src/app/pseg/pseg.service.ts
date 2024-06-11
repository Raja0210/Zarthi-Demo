import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PsegService{
  entries:string[] =[
    "Subject - High_Memory Utilisation Dear Team, Please upgrade the below... ",
    "Subject - Production Resources needed Hi Team, Please provision below...",
    "Subject - High_Memory Utilisation Dear Team, Please upgrade the below... ",
    "Subject - High_Memory Utilisation Dear Team, Please upgrade the below... ",
    "Subject - High_Memory Utilisation Dear Team, Please upgrade the below... ",
    "Subject - High_Memory Utilisation Dear Team, Please upgrade the below... "];

  loggedIn= false;
  constructor() { }


}
