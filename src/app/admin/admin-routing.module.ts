import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { SettingsComponent } from './settings/settings.component';
import { SearchComponent } from './search/search.component';
import { TasksComponent } from './tasks/tasks.component';
import { ChatsComponent } from './chats/chats.component';
import { CustomerComponent } from '../customer/customer.component';

const routes: Routes = [
  { path: '', component: AdminComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'search', component: SearchComponent },
  { path: 'tasks', component: TasksComponent },
  { path: 'chats', component: ChatsComponent },
  { path: 'customers', component: CustomerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
