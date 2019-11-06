import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockListEntryComponent } from './stock-list-entry.component';

describe('StockListEntryComponent', () => {
  let component: StockListEntryComponent;
  let fixture: ComponentFixture<StockListEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockListEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockListEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
