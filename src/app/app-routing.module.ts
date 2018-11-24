import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {ErrorComponent} from './error/error.component';
import {AdminComponent} from './admin/admin.component';
import {UserComponent} from './user/user.component';
import {OpdrachtenComponent} from './user/opdrachten/opdrachten.component';
import {RewardsComponent} from './user/rewards/rewards.component';
import {AuthGuard} from './guards/auth.guard';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'admin/rewards', component: AdminComponent, canActivate: [AuthGuard]},
  {path: 'admin/opdrachten', component: AdminComponent, canActivate: [AuthGuard]},
  {path: 'admin/gebruikers', component: AdminComponent, canActivate: [AuthGuard]},
  {path: 'user', component: UserComponent, canActivate: [AuthGuard]},
  {path: 'opdrachten', component: OpdrachtenComponent, canActivate: [AuthGuard]},
  {path: 'rewards', component: RewardsComponent, canActivate: [AuthGuard]},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  // Niet gedefinieerde routes ook doorverwijzen. Zoniet krijg je fouten in de console!
  {path: '**',  component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
