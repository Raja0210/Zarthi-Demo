import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {PsegService} from "../pseg/pseg.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  constructor(private route:Router,
              private pseg:PsegService,
              ) {
  }
  logInForm: FormGroup;
  passWord:string = '123';
  passwordCheck:boolean = false;

  ngOnInit(){
    this.logInForm = new FormGroup({
      'password' : new FormControl(null,Validators.required)
    })
  }

  onSubmit(){
    console.log(this.logInForm.get('password'));
    if(this.logInForm.get('password').value==this.passWord){
      this.pseg.loggedIn=true;
      this.route.navigate(['/pseg']);
    }
    else{
      this.passwordCheck=true;
    }
    if(this.passwordCheck){
      alert("Invalid Password!!!!");
    }
  }
}
