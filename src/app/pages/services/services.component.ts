import { Component, OnInit } from '@angular/core';
import { PublicService } from 'src/app/services/public.service';
declare function init_gallery(): any;

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
})
export class ServicesComponent implements OnInit {
  public services: Array<any> = [];
  public gallery: Array<any> = [];

  constructor(public publicService: PublicService) {}

  ngOnInit(): void {
    this.services = this.publicService.services;
    this.gallery = this.publicService.gallery;
    setTimeout(() => {
      init_gallery();
    }, 100);
  }
}
