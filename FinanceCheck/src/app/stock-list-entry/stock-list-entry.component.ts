import { Component, OnInit, Input } from '@angular/core';
import {ComponentUpdateService , IStockInfo} from './../component-update.service'
import { APIServiceService } from '../apiservice.service';

@Component({
    selector: 'app-stock-list-entry',
    templateUrl: './stock-list-entry.component.html',
    styleUrls: ['./stock-list-entry.component.css']
})
export class StockListEntryComponent implements OnInit {
    @Input() data: object;
    constructor(private componentUpdateService: ComponentUpdateService, private apiService: APIServiceService) { }
    
    ngOnInit() {
    }
    updateInfoView(){
        this.componentUpdateService.updateListFn(this.data.name);
    }
}
