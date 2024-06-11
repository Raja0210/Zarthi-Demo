import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { PsegComponent } from './pseg/pseg.component';
import {AppRoutingModule} from "./app-routing.module";
import { PreferencesComponent } from './pseg/preferences/preferences.component';
import { ToggleComponent } from './pseg/toggle/toggle.component';
import { GmailComponent } from './pseg/gmail/gmail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    PsegComponent,
    PreferencesComponent,
    ToggleComponent,
    GmailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
