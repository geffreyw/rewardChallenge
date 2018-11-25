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
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import {HttpClientModule} from '@angular/common/http';
import { UserOpdrachtListComponent } from './user-opdracht-list/user-opdracht-list.component';
import { UserOpdrachtItemComponent } from './user/user-opdracht-item/user-opdracht-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgBootstrapModule,
    HttpClientModule,
    SharedModule,
    UserModule,
    LoginModule,
    ErrorModule,
    AdminModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
