import { Component } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {GmailService} from "./gmail.service";

@Component({
  selector: 'app-gmail',
  templateUrl: './gmail.component.html',
  styleUrl: './gmail.component.css'
})
export class GmailComponent {
  form:FormGroup;
  // selectedOption: string;
  ps:string[]=['4040458000058345229','4040458000059270037','4040458000054869117','4040458000063288265'];

  constructor(private fb:FormBuilder,
              private slMail:GmailService,
              ) {
    this.form = this.fb.group({
      service: ['', Validators.required],
      date: ['', this.slMail.dateValidator],
    });
  }


  onSubmit() {
    console.log(this.form.controls.date.valid);
    if (this.form.valid) {
      console.log('Form Submitted', this.form.value);
    } else {
      console.log('Form is invalid');
      if (this.form.controls.date.errors?.invalidDate) {
        alert('The selected date is in the past. Please choose a valid date.');
      }
    }
  }
}
