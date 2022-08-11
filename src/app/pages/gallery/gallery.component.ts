import { Component, OnInit } from '@angular/core';
declare function init_gallery(): any;

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
})
export class GalleryComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    init_gallery();
  }
}
