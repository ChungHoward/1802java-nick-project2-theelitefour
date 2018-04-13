import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreCoverageComponent } from './corecoverage.component';

describe('CoreCoverageComponent', () => {
  let component: CoreCoverageComponent;
  let fixture: ComponentFixture<CoreCoverageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoreCoverageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreCoverageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
