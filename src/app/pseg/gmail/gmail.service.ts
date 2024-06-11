import { Injectable } from '@angular/core';
import {AbstractControl} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class GmailService {
  dateValidator(control: AbstractControl) {
    const dateValue = control.value;
    if (!dateValue) {
      return null;
    }
    const selectedDate = new Date(dateValue);
    const currentDate = new Date();

    if (selectedDate < currentDate) {
      return { invalidDate: true };
    }
    return null;
  }

  
  constructor() { }
}
