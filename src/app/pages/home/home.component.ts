import { Component, OnInit } from '@angular/core';
import { PublicService } from 'src/app/services/public.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  public services: Array<any> = [];
  public projects: Array<any> = [];
  public questions: Array<any> = [];
  public frontend: Array<any> = [];
  public backend: Array<any> = [];

  constructor(private publicService: PublicService) {}

  ngOnInit(): void {
    this.services = this.publicService.services;
    this.questions = this.publicService.questions;
    this.frontend = this.publicService.frontend;
    this.backend = this.publicService.backend.reverse();
    setTimeout(() => {
      this.publicService.init_carrousel();
    }, 100);
  }
}
