import { Component, OnInit } from '@angular/core';
import { PublicService } from 'src/app/services/public.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
})
export class AboutComponent implements OnInit {
  public services: Array<any> = [];

  constructor(private publicService: PublicService) {}

  ngOnInit(): void {
    this.services = this.publicService.services;
  }
}
