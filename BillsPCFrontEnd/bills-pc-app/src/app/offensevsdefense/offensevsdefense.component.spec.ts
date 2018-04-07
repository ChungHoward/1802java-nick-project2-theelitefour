import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffenseVsDefenseComponent } from './offensevsdefense.component';

describe('OffenseVsDefenseComponent', () => {
  let component: OffenseVsDefenseComponent;
  let fixture: ComponentFixture<OffenseVsDefenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffenseVsDefenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffenseVsDefenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
