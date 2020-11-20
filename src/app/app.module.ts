import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { CardsComponent } from './components/cards/cards.component';
import { Cards2Component } from './components/cards2/cards2.component';
import { Cards3Component } from './components/cards3/cards3.component';
import { Cards4Component } from './components/cards4/cards4.component';
import { Cards5Component } from './components/cards5/cards5.component';
import { Cards6Component } from './components/cards6/cards6.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CardsComponent,
    Cards2Component,
    Cards3Component,
    Cards4Component,
    Cards5Component,
    Cards6Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
