import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderComponent } from './orders/order/order.component';
import { ClientsComponent } from './clients/clients.component';
import { ClientComponent } from './clients/client/client.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      { path: '', component: OrdersComponent },
      { path: 'orders/:id', component: OrderComponent },
      { path: 'clients', component: ClientsComponent },
      { path: 'clients/:id', component: ClientComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
