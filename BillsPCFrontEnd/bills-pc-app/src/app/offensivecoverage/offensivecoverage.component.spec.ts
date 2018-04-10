import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { OffensiveCoverageComponent } from './offensivecoverage.component';

describe('OffensiveCoverageComponent', () => {
  let component: OffensiveCoverageComponent;
  let fixture: ComponentFixture<OffensiveCoverageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffensiveCoverageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffensiveCoverageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
