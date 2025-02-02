import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeprojectComponent } from './officeproject.component';

describe('OfficeprojectComponent', () => {
  let component: OfficeprojectComponent;
  let fixture: ComponentFixture<OfficeprojectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfficeprojectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfficeprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
