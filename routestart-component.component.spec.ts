import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutestartComponentComponent } from './routestart-component.component';

describe('RoutestartComponentComponent', () => {
  let component: RoutestartComponentComponent;
  let fixture: ComponentFixture<RoutestartComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutestartComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutestartComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
