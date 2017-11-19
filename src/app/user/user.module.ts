import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserComponent } from './user.component';

import { SharedModule } from '../shared/_shared.module';
import { UserRoutingModule } from './user-routing.module';
import { OrdersComponent } from './orders/orders.component';
import { OrderComponent } from './orders/order/order.component';
import { ClientsComponent } from './clients/clients.component';
import { ClientComponent } from './clients/client/client.component';
import { ProfileComponent } from './profile/profile.component';
import { PaymentsComponent } from './payments/payments.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    UserRoutingModule
  ],
  declarations: [
    UserComponent,
    OrdersComponent, OrderComponent,
    ClientComponent, ClientsComponent,
    PaymentsComponent,
    ProfileComponent
  ]
})
export class UserModule { }
