import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { TicketInfoComponent } from './components/ticket-info/ticket-info.component';



const routes: Routes = [
  {
    path:"",
    component:AdminPageComponent
  },
  {
    path: "ticket/:id",
    component: TicketInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
