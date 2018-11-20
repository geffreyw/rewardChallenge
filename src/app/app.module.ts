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

@NgModule({
  // are to make directives (including components and pipes) from the current module available to other directives in the current module.
  declarations: [
    AppComponent,
    NavbarComponent],

    // makes the exported declarations of other modules available in the current module
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
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
