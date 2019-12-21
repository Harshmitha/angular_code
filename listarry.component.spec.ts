import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarryComponent } from './listarry.component';

describe('ListarryComponent', () => {
  let component: ListarryComponent;
  let fixture: ComponentFixture<ListarryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
