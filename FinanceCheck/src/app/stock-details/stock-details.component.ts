import { Component, OnInit } from '@angular/core';
import { ComponentUpdateService } from '../component-update.service';
import { APIServiceService, StockDetails } from '../apiservice.service';


@Component({
  selector: 'app-stock-details',
  templateUrl: './stock-details.component.html',
  styleUrls: ['./stock-details.component.css']
})
export class StockDetailsComponent implements OnInit {
  stockDetails: StockDetails = new StockDetails();
  constructor(private componentUpdateService: ComponentUpdateService, private apiService: APIServiceService) { }

  ngOnInit() {
    this.componentUpdateService.updateListsObs.subscribe(res => {
      this.apiService.getStockDetailsForCompany(res).subscribe(stockDetailsObj => {
        let stockDetails = new StockDetails();
        stockDetails.companyName = stockDetailsObj["companyName"];
        stockDetails.marketcap = stockDetailsObj["marketcap"];
        stockDetails.day50MovingAvg = stockDetailsObj["day50MovingAvg"];
        stockDetails.employees = stockDetailsObj["employees"];
        this.stockDetails = stockDetails;
      })
    });
  }
  updateContent(StockDetails: StockDetails) {
    this.stockDetails = StockDetails;
  }
}
