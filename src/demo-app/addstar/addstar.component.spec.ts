import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddstarComponent } from './addstar.component';

describe('AddstarComponent', () => {
  let component: AddstarComponent;
  let fixture: ComponentFixture<AddstarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddstarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddstarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
