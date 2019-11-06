import { Component, OnInit } from '@angular/core';
import { APIServiceService, StockDetails } from '../apiservice.service';
import { ComponentUpdateService } from '../component-update.service';

@Component({
  selector: 'app-stock-browser',
  templateUrl: './stock-browser.component.html',
  styleUrls: ['./stock-browser.component.css']
})
export class StockBrowserComponent implements OnInit {
  searchstring: string = "";
  stockDetails: StockDetails;
  constructor(private updateService: ComponentUpdateService) { }

  ngOnInit() {
  }
  search() {
    this.updateService.updateListFn(this.searchstring)
  };
}
