import { Component, OnInit } from '@angular/core';
import { ComponentUpdateService } from '../component-update.service';
import { APIServiceService } from '../apiservice.service';

@Component({
  selector: 'app-stock-details',
  templateUrl: './stock-details.component.html',
  styleUrls: ['./stock-details.component.css']
})
export class StockDetailsComponent implements OnInit {

  constructor(private componentUpdateService: ComponentUpdateService, private apiService: APIServiceService) { }

  ngOnInit() {
    this.componentUpdateService.updateListsObs.subscribe(res => { this.apiService.getStockDetailsForCompany(res) });
  }

}
