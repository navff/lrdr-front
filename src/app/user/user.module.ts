import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserComponent } from './user.component';

import { SharedModule } from '../shared/_shared.module';
import { UserRoutingModule } from './user-routing.module';
import { OrdersComponent } from './orders/orders.component';
import { OrderComponent } from './orders/order/order.component';
import { ClientsComponent } from './clients/clients.component';
import { ClientComponent } from './clients/client/client.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    UserRoutingModule
  ],
  declarations: [
    UserComponent,
    OrdersComponent,
    ClientsComponent,
    OrderComponent,
    ClientComponent,
  ]
})
export class UserModule { }
