import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProcessComponent } from './process/process.component';
import { SharedModule } from '../shared/shared.module';

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
    SharedModule,
    RouterModule,
  ],
})
export class PagesModule {}
