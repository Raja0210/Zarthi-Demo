import {Component, ElementRef, ViewChild} from '@angular/core';
import {PsegService} from "./pseg.service";
import {NgForm} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-pseg',
  templateUrl: './pseg.component.html',
  styleUrl: './pseg.component.css'
})
export class PsegComponent {
  @ViewChild('copied')
  copied:ElementRef;

  constructor(private psegService: PsegService,
              private router: Router,
              private route: ActivatedRoute
  ) {
  }
  entries=this.psegService.entries;
  temp:string='';

  onClick(i:number){
    this.copied.nativeElement.value= this.entries[i];;
  }

  onPreference(){
    this.router.navigate(['preference'], {relativeTo: this.route});
  }
}
