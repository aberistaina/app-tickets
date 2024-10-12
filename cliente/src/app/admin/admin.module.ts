import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { TableTicketsComponent } from '../admin/components/table-tickets/table-tickets.component';
import { SharedModule } from '../shared.module';
import { TicketInfoComponent } from './components/ticket-info/ticket-info.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdminPageComponent,
    TableTicketsComponent,
    TicketInfoComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class AdminModule { }
