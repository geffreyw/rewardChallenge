import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {ErrorComponent} from './error/error.component';
import {AdminComponent} from './admin/admin.component';
import {UserComponent} from './user/user.component';
import {AuthGuard} from './guards/auth.guard';
import {AllOpdrachtenComponent} from './user/all-opdrachten/all-opdrachten.component';
import {AllRewardsComponent} from './user/all-rewards/all-rewards.component';
import {ApproveTasksComponent} from './admin/approve-oprdachten/approve-tasks.component';
import {ApproveRewardsComponent} from './admin/approve-rewards/approve-rewards.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'admin/rewards', component: AdminComponent, canActivate: [AuthGuard]},
  {path: 'admin/opdrachten', component: AdminComponent, canActivate: [AuthGuard]},
  {path: 'admin/gebruikers', component: AdminComponent, canActivate: [AuthGuard]},
  {path: 'admin/aproveOpdrachten', component: ApproveTasksComponent, canActivate: [AuthGuard]},
  {path: 'admin/aproveRewards', component: ApproveRewardsComponent, canActivate: [AuthGuard]},
  {path: 'user', component: UserComponent, canActivate: [AuthGuard]},
  {path: 'allOpdrachten', component: AllOpdrachtenComponent, canActivate: [AuthGuard]},
  {path: 'allRewards', component: AllRewardsComponent, canActivate: [AuthGuard]},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  // Niet gedefinieerde routes ook doorverwijzen. Zoniet krijg je fouten in de console!
  {path: '**',  component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
