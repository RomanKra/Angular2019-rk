import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

export interface IStockInfo{
  symbol:string;
  price: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})

export class ComponentUpdateService {

  constructor() { }
  private updateLists = new Subject<string>();
  updateListsObs = <Observable<string>>this.updateLists;

  updateListFn(company: string) {
    this.updateLists.next(company);
  }
}
