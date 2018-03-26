import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/_shared.module';
import { UserRoutingModule } from './user-routing.module';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

import { MainComponent } from './main/main.component';
import { UserComponent } from './user.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderComponent } from './orders/order/order.component';
import { CreateComponent } from './orders/create/create.component';
import { ClientsComponent } from './clients/clients.component';
import { ClientComponent } from './clients/client/client.component';
import { ProfileComponent } from './profile/profile.component';
import { PaymentsComponent } from './payments/payments.component';
import { EnterComponent } from './enter/enter.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    UserRoutingModule,
    ScrollToModule.forRoot(),

  ],
  declarations: [
    MainComponent,
    UserComponent,
    OrdersComponent, OrderComponent, CreateComponent,
    ClientComponent, ClientsComponent,
    PaymentsComponent,
    ProfileComponent, EnterComponent,
  ]
})
export class UserModule { }
