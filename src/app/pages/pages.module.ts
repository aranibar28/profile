import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { ImagePipe } from '../pipes/image.pipe';
import { SharedModule } from '../shared/shared.module';
import { PagesComponent } from './pages.component';

import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProcessComponent } from './process/process.component';


@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    ServicesComponent,
    AboutComponent,
    ContactComponent,
    ProcessComponent,
    ImagePipe,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule,
  ],
})
export class PagesModule {}
