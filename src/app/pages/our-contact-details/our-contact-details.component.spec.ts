import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurContactDetailsComponent } from './our-contact-details.component';

describe('OurContactDetailsComponent', () => {
  let component: OurContactDetailsComponent;
  let fixture: ComponentFixture<OurContactDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurContactDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurContactDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
