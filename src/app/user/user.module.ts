import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { HeaderComponent } from './header/header.component';
import { UserinfoComponent } from './header/userinfo/userinfo.component';
import { ScoreComponent } from './header/score/score.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UserComponent, HeaderComponent, UserinfoComponent, ScoreComponent, NavbarComponent]
})
export class UserModule { }
