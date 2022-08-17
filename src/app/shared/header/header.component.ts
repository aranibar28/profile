import { ViewportScroller } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {
  public path: string = this.router.url;
  public event$: any;

  constructor(private router: Router, private vs: ViewportScroller) {}

  ngOnInit(): void {
    this.event$ = this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationStart) {
        this.path = event.url;
        this.vs.scrollToPosition([0, 0]);
      }
    });
  }

  ngOnDestroy() {
    this.event$.unsubscribe();
  }
}
