import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListpublisherComponent } from './listpublisher.component';

describe('ListpublisherComponent', () => {
  let component: ListpublisherComponent;
  let fixture: ComponentFixture<ListpublisherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListpublisherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListpublisherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
