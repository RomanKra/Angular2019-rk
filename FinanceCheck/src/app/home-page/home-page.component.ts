import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { APIServiceService } from '../apiservice.service';
import {StockListComponent} from './../stock-list/stock-list.component';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  username:String="";
  companies = [];
  constructor(private route: ActivatedRoute, private router:Router, private apiService:APIServiceService, private loginService:LoginService) { }
  savedStocks:Array<object>=[];
  ngOnInit() {
    let username=this.loginService.getUsername();
    
    //TODO: will have to use this once getSavedStocksForUser is implemented correctly.
    //this.apiService.getSavedStocksForUser(username).subscribe(arg => {this.companies = arg;this.getStockData()});
    this.companies = this.apiService.getSavedStocksForUser(username);
    this.getStockData();

    if (username != null){
      this.username = username;
    }else{
      //route back to login - as you are not logged in.
      this.router.navigate(['login'])
    }
  }

  getStockData(){
    for(let company of this.companies){
      this.apiService.getStockDataForCompany(company).subscribe(arg => {this.savedStocks.push({name:company, data:arg}); console.log(arg)});
    }
  }
}
