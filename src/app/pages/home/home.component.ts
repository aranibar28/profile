import { Component, OnInit } from '@angular/core';
import { PublicService } from 'src/app/services/public.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  public projects: Array<any> = [];

  constructor(private publicService: PublicService) {}

  ngOnInit(): void {
    this.projects = this.publicService.projects;
    setTimeout(() => {
      this.publicService.init_carrousel();
    }, 100);
  }
}
