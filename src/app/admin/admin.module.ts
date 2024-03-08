import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TasksComponent } from './tasks/tasks.component';
import { CustomersComponent } from './customers/customers.component';
import { ChatsComponent } from './chats/chats.component';
import { SettingsComponent } from './settings/settings.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { SearchComponent } from './search/search.component';
import { MaterialsModule } from '../materials/materials.module';
import { AppModule } from '../app.module';


@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    TasksComponent,
    CustomersComponent,
    ChatsComponent,
    SettingsComponent,
    NotificationsComponent,
    SearchComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialsModule,
    AppModule
  ]
})
export class AdminModule { }
