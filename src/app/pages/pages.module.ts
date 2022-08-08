import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProcessComponent } from './process/process.component';

@NgModule({
  declarations: [
    HomeComponent,
    ServicesComponent,
    AboutComponent,
    ContactComponent,
    ProcessComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
})
export class PagesModule {}
