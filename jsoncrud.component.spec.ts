import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsoncrudComponent } from './jsoncrud.component';

describe('JsoncrudComponent', () => {
  let component: JsoncrudComponent;
  let fixture: ComponentFixture<JsoncrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsoncrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsoncrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
