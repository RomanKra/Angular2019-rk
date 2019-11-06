import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StockListComponent } from './stock-list/stock-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StockDetailsComponent } from './stock-details/stock-details.component';
import { MatButtonModule } from '@angular/material';
import { LoginBoxComponent } from './login-box/login-box.component'
import { FormsModule } from '@angular/forms';
import { HomePageComponent } from './home-page/home-page.component';
import { StockBrowserComponent } from './stock-browser/stock-browser.component';
import { HeaderComponent } from './header/header.component';
import { StockListEntryComponent } from './stock-list-entry/stock-list-entry.component';
import { HttpClientModule } from '@angular/common/http';
import { MatListModule } from '@angular/material/list'
import { LoginService } from './login.service';

@NgModule({
  declarations: [
    AppComponent,
    StockListComponent,
    NavbarComponent,
    StockDetailsComponent,
    LoginBoxComponent,
    HomePageComponent,
    StockBrowserComponent,
    HeaderComponent,
    StockListEntryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    MatListModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
