import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillUpdateComponent } from './bill-update.component';

describe('BillUpdateComponent', () => {
  let component: BillUpdateComponent;
  let fixture: ComponentFixture<BillUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
