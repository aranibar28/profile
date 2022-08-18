import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { PublicService } from 'src/app/services/public.service';
declare function init_gallery(): any;

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
})
export class ServicesComponent implements OnInit {
  public isBrowser: boolean = false;
  public services: Array<any> = [];
  public gallery: Array<any> = [];

  constructor(public publicService: PublicService, @Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    this.services = this.publicService.services;
    this.gallery = this.publicService.gallery;
  }

  ngAfterViewInit(): void {
    if (this.isBrowser) {
      init_gallery();
    }
  }
}
