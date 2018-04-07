import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefensiveCoverageComponent } from './defensivecoverage.component';

describe('DefensiveCoverageComponent', () => {
  let component: DefensiveCoverageComponent;
  let fixture: ComponentFixture<DefensiveCoverageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefensiveCoverageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefensiveCoverageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
