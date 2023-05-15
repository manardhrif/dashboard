import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PMComponent } from './p-m.component';

describe('PMComponent', () => {
  let component: PMComponent;
  let fixture: ComponentFixture<PMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PMComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
