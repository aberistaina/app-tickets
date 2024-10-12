import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { UserTableComponent } from './components/user-table/user-table.component';
import { SharedModule } from '../shared.module';



@NgModule({
  declarations: [
    ProfilePageComponent,
    UserTableComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule
  ]
})
export class ProfileModule { }
