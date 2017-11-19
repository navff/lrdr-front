import { CreateComponent } from './orders/create/create.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderComponent } from './orders/order/order.component';
import { ClientsComponent } from './clients/clients.component';
import { ClientComponent } from './clients/client/client.component';
import { ProfileComponent } from './profile/profile.component';
import { PaymentsComponent } from './payments/payments.component';
import { StaticComponent } from './../shared/components/static/static.component';
import { EnterComponent } from './enter/enter.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      { path: '', component: OrdersComponent },
      { path: 'order/create', component: CreateComponent},
      { path: 'order/:code', component: OrderComponent},
      { path: 'clients', component: ClientsComponent },
      { path: 'clients/:id', component: ClientComponent },
      { path: 'payments', component: PaymentsComponent},
      { path: 'profile', component: ProfileComponent},
      { path: 'enter', component: EnterComponent},
      { path: 'enter/success', component: StaticComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
