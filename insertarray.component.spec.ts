import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertarrayComponent } from './insertarray.component';

describe('InsertarrayComponent', () => {
  let component: InsertarrayComponent;
  let fixture: ComponentFixture<InsertarrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertarrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertarrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
