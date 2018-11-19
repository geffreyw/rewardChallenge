import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {ErrorComponent} from './error/error.component';
import {UserComponent} from './user/user.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'user', component: UserComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  // Niet gedefinieerde routes ook doorverwijzen. Zoniet krijg je fouten in de console!
  {path: '**',  component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
