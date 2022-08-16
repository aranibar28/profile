import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  public event$: any;
  public path: string = '/';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.event$ = this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationStart) {
        this.path = event.url;       
        window.scroll({
          top: 0,
          behavior: 'smooth',
        });
      }
    });
  }
}
