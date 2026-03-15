import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockSimulation } from './stock-simulation';

describe('StockSimulation', () => {
  let component: StockSimulation;
  let fixture: ComponentFixture<StockSimulation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockSimulation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockSimulation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
