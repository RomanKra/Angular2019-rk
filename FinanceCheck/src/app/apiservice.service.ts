import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {IStockInfo} from "./component-update.service";

//TODO: /ref-data/symbols for all company codes

@Injectable({
    providedIn: 'root'
})
export class APIServiceService {
    getStockDetailsForCompany(company:string) {
        //TODO: find correct api-link
        alert("THis link is not right!")
        return this.http.get("https://cloud.iexapis.com/stable/tops?token=pk_52281111b1c640cbb6947335fdca9dea&symbols="+company);
    }

    constructor(private http: HttpClient) { }
    getSavedStocksForUser(username: string) {
        //TODO: get user presets from database
        return ["aapl","msft","intc"]
    }
    getStockDataForCompany(company: string) {
        return this.http.get("https://cloud.iexapis.com/stable/tops?token=pk_52281111b1c640cbb6947335fdca9dea&symbols="+company);
    }
    getStockHistoryForCompany(company: string){
        //TODO: fiddle with the api
        return this.http.get("https://cloud.iexapis.com/stable/stock/" + company + "/chart/6m?token=pk_52281111b1c640cbb6947335fdca9dea");
    }
}
