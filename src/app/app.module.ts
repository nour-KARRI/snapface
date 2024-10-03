import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app.routing.module';
import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { LandingPageModule } from './landing-page/landing-page.module';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    AppRoutingModule,
    RouterLink,
    CommonModule,
    CoreModule,
    LandingPageModule,
    AuthModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }