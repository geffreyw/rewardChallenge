import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgBootstrapModule} from './sharedModules/ng-bootstrap.module';
import { UserModule } from './user/user.module';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginModule } from './login/login.module';
import { ErrorModule } from './error/error.module';
import { AdminModule } from './admin/admin.module';
import {SharedModule} from './sharedModules/shared.module';
import {OpdrachtListComponent} from './opdracht-list/opdracht-list.component';
import {OpdrachtItemComponent} from './opdracht-list/opdracht-item/opdracht-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgBootstrapModule,
    SharedModule,
    UserModule,
    LoginModule,
    ErrorModule,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
