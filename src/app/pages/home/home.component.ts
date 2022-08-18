import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { PublicService } from 'src/app/services/public.service';
declare function init_carrousel(): any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  public isBrowser: boolean = false;
  public services: Array<any> = [];
  public projects: Array<any> = [];
  public questions: Array<any> = [];
  public frontend: Array<any> = [];
  public backend: Array<any> = [];

  constructor(private publicService: PublicService, @Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    this.services = this.publicService.services;
    this.questions = this.publicService.questions;
    this.frontend = this.publicService.frontend;
    this.backend = this.publicService.backend.reverse();
  }

  ngAfterViewInit(): void {
    if (this.isBrowser) {
      init_carrousel();
    }
  }
}
