import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';
import { AccountComponent } from './pages/account/account.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginButtonComponent } from './shared/login-button/login-button.component';

const routes: Routes = [
  { 
    path: 'home', 
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: 'account', 
    component: AccountComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: 'logout', 
    component: LoginButtonComponent
  },
  { 
    path: '', 
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DashboardComponent, AccountComponent, LoginButtonComponent]
