import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KomponenzComponent } from './komponenz.component';

describe('KomponenzComponent', () => {
  let component: KomponenzComponent;
  let fixture: ComponentFixture<KomponenzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KomponenzComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KomponenzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
