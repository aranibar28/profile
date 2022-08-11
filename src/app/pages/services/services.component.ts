import { Component, OnInit } from '@angular/core';
import { PublicService } from 'src/app/services/public.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
})
export class ServicesComponent implements OnInit {
  public services: Array<any> = [];

  constructor(public publicService: PublicService) {}

  ngOnInit(): void {
    this.services = this.publicService.services;
  }
}
