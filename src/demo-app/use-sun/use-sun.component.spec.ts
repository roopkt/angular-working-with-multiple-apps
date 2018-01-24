import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseSunComponent } from './use-sun.component';

describe('UseSunComponent', () => {
  let component: UseSunComponent;
  let fixture: ComponentFixture<UseSunComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseSunComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseSunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
