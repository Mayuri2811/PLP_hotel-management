import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewHoteldetailsComponent } from './view-hoteldetails.component';

describe('ViewHoteldetailsComponent', () => {
  let component: ViewHoteldetailsComponent;
  let fixture: ComponentFixture<ViewHoteldetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewHoteldetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewHoteldetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
