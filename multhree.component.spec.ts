import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MulthreeComponent } from './multhree.component';

describe('MulthreeComponent', () => {
  let component: MulthreeComponent;
  let fixture: ComponentFixture<MulthreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MulthreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MulthreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
