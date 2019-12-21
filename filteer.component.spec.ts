import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteerComponent } from './filteer.component';

describe('FilteerComponent', () => {
  let component: FilteerComponent;
  let fixture: ComponentFixture<FilteerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilteerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilteerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
