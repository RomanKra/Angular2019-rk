import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { IStockInfo } from "./component-update.service";
import { retry, catchError } from 'rxjs/operators';

//TODO: /ref-data/symbols for all company codes
export class StockDetails {
    companyName: string = "";
    marketcap: number = 0;
    day50MovingAvg: number = 0;
    employees: number = 0;
}
@Injectable({
    providedIn: 'root'
})
export class APIServiceService {
    getStockDetailsForCompany(company: string) {

        return this.http.get("https://cloud.iexapis.com/stable/stock/" + company + "/stats?token=pk_52281111b1c640cbb6947335fdca9dea").pipe(
            retry(1),
            catchError(this.handleErrors)
        );
    }

    constructor(private http: HttpClient) { }
    getSavedStocksForUser(username: string) {
        //TODO: get user presets from database
        if (username == "Test") {
            return ["amd", "msft", "intc"]
        } else {
            return ["aapl", "msft"]
        }
    }
    getStockDataForCompany(company: string) {
        return this.http.get("https://cloud.iexapis.com/stable/tops?token=pk_52281111b1c640cbb6947335fdca9dea&symbols=" + company);
    }
    getStockHistoryForCompany(company: string) {
        //TODO: fiddle with the api
        return this.http.get("https://cloud.iexapis.com/stable/stock/" + company + "/chart/6m?token=pk_52281111b1c640cbb6947335fdca9dea");
    }

    handleErrors(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
          // client-side error
          errorMessage = `Error: ${error.error.message}`;
        } else {
          // server-side error
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        window.alert("Could not find that company-code.(" + errorMessage +")");
        return throwError(errorMessage);
      }
}
