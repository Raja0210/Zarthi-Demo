import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {PsegComponent} from "./pseg/pseg.component";
import {PreferencesComponent} from "./pseg/preferences/preferences.component";
import {GmailComponent} from "./pseg/gmail/gmail.component";

const appRoutes: Routes = [
  {path:'',redirectTo:'login',pathMatch: "full"},
  {path:'login',component:LoginComponent},
  {path:'pseg',component:PsegComponent, children:[
      {path:'preference',component:PreferencesComponent}
    ]},
  {path:'eg',component:GmailComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule{

}
