import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { PagesComponent } from './pages/pages.component';
import { SharedModule } from '../shared.module';

import { ReactiveFormsModule } from '@angular/forms';
import { NewTicketComponent } from './components/new-ticket/new-ticket.component';
import { TicketFormComponent } from './components/ticket-form/ticket-form.component';



@NgModule({
  declarations: [
    PagesComponent,
    NewTicketComponent,
    TicketFormComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
