import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginBoxComponent } from './login-box/login-box.component'
import { HomePageComponent } from './home-page/home-page.component';
import { StockBrowserComponent } from './stock-browser/stock-browser.component';

const routes: Routes = [
  {path: "", component: LoginBoxComponent},
  {path: "homepage", component: HomePageComponent},
  {path: "stockbrowser", component: StockBrowserComponent},
  {path: "login", component: LoginBoxComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
