import { Component, OnInit, Input } from '@angular/core';
import { StockListEntryComponent} from './../stock-list-entry/stock-list-entry.component'

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {
  @Input() savedStocks:object;
  
  constructor() { }

  ngOnInit() {
  }

}
