import {Component, OnChanges, OnInit} from '@angular/core';
import {ActivatedRoute, Router, UrlSegment} from "@angular/router";
import {Observable, Subscription} from "rxjs";
import {PsegService} from "../pseg.service";

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrl: './toggle.component.css'
})
export class ToggleComponent implements OnInit,OnChanges{
  currentUrl:Subscription;
  constructor(protected route:ActivatedRoute,
              private routes:Router,
              protected pseg:PsegService
              ) {
  }

  ngOnInit() {
    this.currentUrl=this.route.url.subscribe(console.log);
    console.log(this.currentUrl+"hi!");
  }

  ngOnChanges() {
    this.currentUrl=this.route.url.subscribe(console.log);
    console.log(this.currentUrl);
    // this.currentUrl = this.route.snapshot.url[0].path;
    // if(this.currentUrl=='\pseg'){
    // }
  }
}
